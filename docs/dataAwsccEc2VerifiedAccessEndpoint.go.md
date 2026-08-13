# `dataAwsccEc2VerifiedAccessEndpoint` Submodule <a name="`dataAwsccEc2VerifiedAccessEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2VerifiedAccessEndpoint <a name="DataAwsccEc2VerifiedAccessEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_verified_access_endpoint awscc_ec2_verified_access_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

dataawsccec2verifiedaccessendpoint.NewDataAwsccEc2VerifiedAccessEndpoint(scope Construct, id *string, config DataAwsccEc2VerifiedAccessEndpointConfig) DataAwsccEc2VerifiedAccessEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig">DataAwsccEc2VerifiedAccessEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig">DataAwsccEc2VerifiedAccessEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

dataawsccec2verifiedaccessendpoint.DataAwsccEc2VerifiedAccessEndpoint_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

dataawsccec2verifiedaccessendpoint.DataAwsccEc2VerifiedAccessEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

dataawsccec2verifiedaccessendpoint.DataAwsccEc2VerifiedAccessEndpoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

dataawsccec2verifiedaccessendpoint.DataAwsccEc2VerifiedAccessEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEc2VerifiedAccessEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEc2VerifiedAccessEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_verified_access_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2VerifiedAccessEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.applicationDomain">ApplicationDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.attachmentType">AttachmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.cidrOptions">CidrOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.deviceValidationDomain">DeviceValidationDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.domainCertificateArn">DomainCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointDomain">EndpointDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointDomainPrefix">EndpointDomainPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.loadBalancerOptions">LoadBalancerOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.networkInterfaceOptions">NetworkInterfaceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.policyEnabled">PolicyEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.rdsOptions">RdsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference">DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList">DataAwsccEc2VerifiedAccessEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessEndpointId">VerifiedAccessEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessGroupId">VerifiedAccessGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessInstanceId">VerifiedAccessInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApplicationDomain`<sup>Required</sup> <a name="ApplicationDomain" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.applicationDomain"></a>

```go
func ApplicationDomain() *string
```

- *Type:* *string

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.attachmentType"></a>

```go
func AttachmentType() *string
```

- *Type:* *string

---

##### `CidrOptions`<sup>Required</sup> <a name="CidrOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.cidrOptions"></a>

```go
func CidrOptions() DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DeviceValidationDomain`<sup>Required</sup> <a name="DeviceValidationDomain" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.deviceValidationDomain"></a>

```go
func DeviceValidationDomain() *string
```

- *Type:* *string

---

##### `DomainCertificateArn`<sup>Required</sup> <a name="DomainCertificateArn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.domainCertificateArn"></a>

```go
func DomainCertificateArn() *string
```

- *Type:* *string

---

##### `EndpointDomain`<sup>Required</sup> <a name="EndpointDomain" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointDomain"></a>

```go
func EndpointDomain() *string
```

- *Type:* *string

---

##### `EndpointDomainPrefix`<sup>Required</sup> <a name="EndpointDomainPrefix" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointDomainPrefix"></a>

```go
func EndpointDomainPrefix() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `LoadBalancerOptions`<sup>Required</sup> <a name="LoadBalancerOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.loadBalancerOptions"></a>

```go
func LoadBalancerOptions() DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference</a>

---

##### `NetworkInterfaceOptions`<sup>Required</sup> <a name="NetworkInterfaceOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.networkInterfaceOptions"></a>

```go
func NetworkInterfaceOptions() DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference</a>

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.policyDocument"></a>

```go
func PolicyDocument() *string
```

- *Type:* *string

---

##### `PolicyEnabled`<sup>Required</sup> <a name="PolicyEnabled" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.policyEnabled"></a>

```go
func PolicyEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RdsOptions`<sup>Required</sup> <a name="RdsOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.rdsOptions"></a>

```go
func RdsOptions() DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference">DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference</a>

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SseSpecification`<sup>Required</sup> <a name="SseSpecification" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.sseSpecification"></a>

```go
func SseSpecification() DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference">DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.tags"></a>

```go
func Tags() DataAwsccEc2VerifiedAccessEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList">DataAwsccEc2VerifiedAccessEndpointTagsList</a>

---

##### `VerifiedAccessEndpointId`<sup>Required</sup> <a name="VerifiedAccessEndpointId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessEndpointId"></a>

```go
func VerifiedAccessEndpointId() *string
```

- *Type:* *string

---

##### `VerifiedAccessGroupId`<sup>Required</sup> <a name="VerifiedAccessGroupId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessGroupId"></a>

```go
func VerifiedAccessGroupId() *string
```

- *Type:* *string

---

##### `VerifiedAccessInstanceId`<sup>Required</sup> <a name="VerifiedAccessInstanceId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.verifiedAccessInstanceId"></a>

```go
func VerifiedAccessInstanceId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2VerifiedAccessEndpointCidrOptions <a name="DataAwsccEc2VerifiedAccessEndpointCidrOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

&dataawsccec2verifiedaccessendpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptions {

}
```


### DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges <a name="DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

&dataawsccec2verifiedaccessendpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges {

}
```


### DataAwsccEc2VerifiedAccessEndpointConfig <a name="DataAwsccEc2VerifiedAccessEndpointConfig" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

&dataawsccec2verifiedaccessendpoint.DataAwsccEc2VerifiedAccessEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_verified_access_endpoint#id DataAwsccEc2VerifiedAccessEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions <a name="DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

&dataawsccec2verifiedaccessendpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions {

}
```


### DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges <a name="DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

&dataawsccec2verifiedaccessendpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges {

}
```


### DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions <a name="DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

&dataawsccec2verifiedaccessendpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions {

}
```


### DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges <a name="DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

&dataawsccec2verifiedaccessendpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges {

}
```


### DataAwsccEc2VerifiedAccessEndpointRdsOptions <a name="DataAwsccEc2VerifiedAccessEndpointRdsOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

&dataawsccec2verifiedaccessendpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptions {

}
```


### DataAwsccEc2VerifiedAccessEndpointSseSpecification <a name="DataAwsccEc2VerifiedAccessEndpointSseSpecification" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

&dataawsccec2verifiedaccessendpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecification {

}
```


### DataAwsccEc2VerifiedAccessEndpointTags <a name="DataAwsccEc2VerifiedAccessEndpointTags" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

&dataawsccec2verifiedaccessendpoint.DataAwsccEc2VerifiedAccessEndpointTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

dataawsccec2verifiedaccessendpoint.NewDataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRanges">PortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptions">DataAwsccEc2VerifiedAccessEndpointCidrOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.portRanges"></a>

```go
func PortRanges() DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList</a>

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VerifiedAccessEndpointCidrOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptions">DataAwsccEc2VerifiedAccessEndpointCidrOptions</a>

---


### DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList <a name="DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

dataawsccec2verifiedaccessendpoint.NewDataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.get"></a>

```go
func Get(index *f64) DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

dataawsccec2verifiedaccessendpoint.NewDataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointCidrOptionsPortRanges</a>

---


### DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

dataawsccec2verifiedaccessendpoint.NewDataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRanges">PortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoadBalancerArn`<sup>Required</sup> <a name="LoadBalancerArn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.loadBalancerArn"></a>

```go
func LoadBalancerArn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.portRanges"></a>

```go
func PortRanges() DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList</a>

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptions</a>

---


### DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList <a name="DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

dataawsccec2verifiedaccessendpoint.NewDataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get"></a>

```go
func Get(index *f64) DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

dataawsccec2verifiedaccessendpoint.NewDataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointLoadBalancerOptionsPortRanges</a>

---


### DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

dataawsccec2verifiedaccessendpoint.NewDataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRanges">PortRanges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.portRanges"></a>

```go
func PortRanges() DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList</a>

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptions</a>

---


### DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList <a name="DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

dataawsccec2verifiedaccessendpoint.NewDataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get"></a>

```go
func Get(index *f64) DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

dataawsccec2verifiedaccessendpoint.NewDataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges">DataAwsccEc2VerifiedAccessEndpointNetworkInterfaceOptionsPortRanges</a>

---


### DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

dataawsccec2verifiedaccessendpoint.NewDataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArn">RdsDbClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArn">RdsDbInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArn">RdsDbProxyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpoint">RdsEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptions">DataAwsccEc2VerifiedAccessEndpointRdsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RdsDbClusterArn`<sup>Required</sup> <a name="RdsDbClusterArn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbClusterArn"></a>

```go
func RdsDbClusterArn() *string
```

- *Type:* *string

---

##### `RdsDbInstanceArn`<sup>Required</sup> <a name="RdsDbInstanceArn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbInstanceArn"></a>

```go
func RdsDbInstanceArn() *string
```

- *Type:* *string

---

##### `RdsDbProxyArn`<sup>Required</sup> <a name="RdsDbProxyArn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsDbProxyArn"></a>

```go
func RdsDbProxyArn() *string
```

- *Type:* *string

---

##### `RdsEndpoint`<sup>Required</sup> <a name="RdsEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.rdsEndpoint"></a>

```go
func RdsEndpoint() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VerifiedAccessEndpointRdsOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointRdsOptions">DataAwsccEc2VerifiedAccessEndpointRdsOptions</a>

---


### DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

dataawsccec2verifiedaccessendpoint.NewDataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled">CustomerManagedKeyEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecification">DataAwsccEc2VerifiedAccessEndpointSseSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerManagedKeyEnabled`<sup>Required</sup> <a name="CustomerManagedKeyEnabled" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.customerManagedKeyEnabled"></a>

```go
func CustomerManagedKeyEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VerifiedAccessEndpointSseSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointSseSpecification">DataAwsccEc2VerifiedAccessEndpointSseSpecification</a>

---


### DataAwsccEc2VerifiedAccessEndpointTagsList <a name="DataAwsccEc2VerifiedAccessEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

dataawsccec2verifiedaccessendpoint.NewDataAwsccEc2VerifiedAccessEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2VerifiedAccessEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2VerifiedAccessEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2VerifiedAccessEndpointTagsOutputReference <a name="DataAwsccEc2VerifiedAccessEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccessendpoint"

dataawsccec2verifiedaccessendpoint.NewDataAwsccEc2VerifiedAccessEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2VerifiedAccessEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTags">DataAwsccEc2VerifiedAccessEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VerifiedAccessEndpointTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessEndpoint.DataAwsccEc2VerifiedAccessEndpointTags">DataAwsccEc2VerifiedAccessEndpointTags</a>

---




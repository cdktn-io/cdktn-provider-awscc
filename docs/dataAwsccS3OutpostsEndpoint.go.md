# `dataAwsccS3OutpostsEndpoint` Submodule <a name="`dataAwsccS3OutpostsEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3OutpostsEndpoint <a name="DataAwsccS3OutpostsEndpoint" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3outposts_endpoint awscc_s3outposts_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsendpoint"

dataawsccs3outpostsendpoint.NewDataAwsccS3OutpostsEndpoint(scope Construct, id *string, config DataAwsccS3OutpostsEndpointConfig) DataAwsccS3OutpostsEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig">DataAwsccS3OutpostsEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig">DataAwsccS3OutpostsEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3OutpostsEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsendpoint"

dataawsccs3outpostsendpoint.DataAwsccS3OutpostsEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsendpoint"

dataawsccs3outpostsendpoint.DataAwsccS3OutpostsEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsendpoint"

dataawsccs3outpostsendpoint.DataAwsccS3OutpostsEndpoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsendpoint"

dataawsccs3outpostsendpoint.DataAwsccS3OutpostsEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccS3OutpostsEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccS3OutpostsEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccS3OutpostsEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3outposts_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3OutpostsEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.customerOwnedIpv4Pool">CustomerOwnedIpv4Pool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.failedReason">FailedReason</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference">DataAwsccS3OutpostsEndpointFailedReasonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList">DataAwsccS3OutpostsEndpointNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.outpostId">OutpostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `CustomerOwnedIpv4Pool`<sup>Required</sup> <a name="CustomerOwnedIpv4Pool" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.customerOwnedIpv4Pool"></a>

```go
func CustomerOwnedIpv4Pool() *string
```

- *Type:* *string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `FailedReason`<sup>Required</sup> <a name="FailedReason" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.failedReason"></a>

```go
func FailedReason() DataAwsccS3OutpostsEndpointFailedReasonOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference">DataAwsccS3OutpostsEndpointFailedReasonOutputReference</a>

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.networkInterfaces"></a>

```go
func NetworkInterfaces() DataAwsccS3OutpostsEndpointNetworkInterfacesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList">DataAwsccS3OutpostsEndpointNetworkInterfacesList</a>

---

##### `OutpostId`<sup>Required</sup> <a name="OutpostId" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.outpostId"></a>

```go
func OutpostId() *string
```

- *Type:* *string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.securityGroupId"></a>

```go
func SecurityGroupId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3OutpostsEndpointConfig <a name="DataAwsccS3OutpostsEndpointConfig" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsendpoint"

&dataawsccs3outpostsendpoint.DataAwsccS3OutpostsEndpointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/s3outposts_endpoint#id DataAwsccS3OutpostsEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3OutpostsEndpointFailedReason <a name="DataAwsccS3OutpostsEndpointFailedReason" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReason"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReason.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsendpoint"

&dataawsccs3outpostsendpoint.DataAwsccS3OutpostsEndpointFailedReason {

}
```


### DataAwsccS3OutpostsEndpointNetworkInterfaces <a name="DataAwsccS3OutpostsEndpointNetworkInterfaces" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfaces.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsendpoint"

&dataawsccs3outpostsendpoint.DataAwsccS3OutpostsEndpointNetworkInterfaces {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3OutpostsEndpointFailedReasonOutputReference <a name="DataAwsccS3OutpostsEndpointFailedReasonOutputReference" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsendpoint"

dataawsccs3outpostsendpoint.NewDataAwsccS3OutpostsEndpointFailedReasonOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3OutpostsEndpointFailedReasonOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.property.errorCode">ErrorCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReason">DataAwsccS3OutpostsEndpointFailedReason</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorCode`<sup>Required</sup> <a name="ErrorCode" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.property.errorCode"></a>

```go
func ErrorCode() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReasonOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3OutpostsEndpointFailedReason
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointFailedReason">DataAwsccS3OutpostsEndpointFailedReason</a>

---


### DataAwsccS3OutpostsEndpointNetworkInterfacesList <a name="DataAwsccS3OutpostsEndpointNetworkInterfacesList" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsendpoint"

dataawsccs3outpostsendpoint.NewDataAwsccS3OutpostsEndpointNetworkInterfacesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3OutpostsEndpointNetworkInterfacesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.get"></a>

```go
func Get(index *f64) DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference <a name="DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3outpostsendpoint"

dataawsccs3outpostsendpoint.NewDataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfaces">DataAwsccS3OutpostsEndpointNetworkInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfacesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3OutpostsEndpointNetworkInterfaces
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3OutpostsEndpoint.DataAwsccS3OutpostsEndpointNetworkInterfaces">DataAwsccS3OutpostsEndpointNetworkInterfaces</a>

---




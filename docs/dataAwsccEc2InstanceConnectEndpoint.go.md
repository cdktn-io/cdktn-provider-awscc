# `dataAwsccEc2InstanceConnectEndpoint` Submodule <a name="`dataAwsccEc2InstanceConnectEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2InstanceConnectEndpoint <a name="DataAwsccEc2InstanceConnectEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_instance_connect_endpoint awscc_ec2_instance_connect_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceconnectendpoint"

dataawsccec2instanceconnectendpoint.NewDataAwsccEc2InstanceConnectEndpoint(scope Construct, id *string, config DataAwsccEc2InstanceConnectEndpointConfig) DataAwsccEc2InstanceConnectEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig">DataAwsccEc2InstanceConnectEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig">DataAwsccEc2InstanceConnectEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2InstanceConnectEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceconnectendpoint"

dataawsccec2instanceconnectendpoint.DataAwsccEc2InstanceConnectEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceconnectendpoint"

dataawsccec2instanceconnectendpoint.DataAwsccEc2InstanceConnectEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceconnectendpoint"

dataawsccec2instanceconnectendpoint.DataAwsccEc2InstanceConnectEndpoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceconnectendpoint"

dataawsccec2instanceconnectendpoint.DataAwsccEc2InstanceConnectEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEc2InstanceConnectEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEc2InstanceConnectEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEc2InstanceConnectEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_instance_connect_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2InstanceConnectEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.clientToken">ClientToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.instanceConnectEndpointArn">InstanceConnectEndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.instanceConnectEndpointId">InstanceConnectEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.preserveClientIp">PreserveClientIp</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.publicDnsNames">PublicDnsNames</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList">DataAwsccEc2InstanceConnectEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.availabilityZoneId"></a>

```go
func AvailabilityZoneId() *string
```

- *Type:* *string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.clientToken"></a>

```go
func ClientToken() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `InstanceConnectEndpointArn`<sup>Required</sup> <a name="InstanceConnectEndpointArn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.instanceConnectEndpointArn"></a>

```go
func InstanceConnectEndpointArn() *string
```

- *Type:* *string

---

##### `InstanceConnectEndpointId`<sup>Required</sup> <a name="InstanceConnectEndpointId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.instanceConnectEndpointId"></a>

```go
func InstanceConnectEndpointId() *string
```

- *Type:* *string

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.networkInterfaceIds"></a>

```go
func NetworkInterfaceIds() *[]*string
```

- *Type:* *[]*string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `PreserveClientIp`<sup>Required</sup> <a name="PreserveClientIp" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.preserveClientIp"></a>

```go
func PreserveClientIp() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PublicDnsNames`<sup>Required</sup> <a name="PublicDnsNames" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.publicDnsNames"></a>

```go
func PublicDnsNames() DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference</a>

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.tags"></a>

```go
func Tags() DataAwsccEc2InstanceConnectEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList">DataAwsccEc2InstanceConnectEndpointTagsList</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2InstanceConnectEndpointConfig <a name="DataAwsccEc2InstanceConnectEndpointConfig" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceconnectendpoint"

&dataawsccec2instanceconnectendpoint.DataAwsccEc2InstanceConnectEndpointConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_instance_connect_endpoint#id DataAwsccEc2InstanceConnectEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2InstanceConnectEndpointPublicDnsNames <a name="DataAwsccEc2InstanceConnectEndpointPublicDnsNames" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNames.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceconnectendpoint"

&dataawsccec2instanceconnectendpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNames {

}
```


### DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack <a name="DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceconnectendpoint"

&dataawsccec2instanceconnectendpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack {

}
```


### DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4 <a name="DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceconnectendpoint"

&dataawsccec2instanceconnectendpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4 {

}
```


### DataAwsccEc2InstanceConnectEndpointTags <a name="DataAwsccEc2InstanceConnectEndpointTags" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceconnectendpoint"

&dataawsccec2instanceconnectendpoint.DataAwsccEc2InstanceConnectEndpointTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference <a name="DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceconnectendpoint"

dataawsccec2instanceconnectendpoint.NewDataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.fipsDnsName">FipsDnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `FipsDnsName`<sup>Required</sup> <a name="FipsDnsName" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.fipsDnsName"></a>

```go
func FipsDnsName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstack</a>

---


### DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference <a name="DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceconnectendpoint"

dataawsccec2instanceconnectendpoint.NewDataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.fipsDnsName">FipsDnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `FipsDnsName`<sup>Required</sup> <a name="FipsDnsName" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.fipsDnsName"></a>

```go
func FipsDnsName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4</a>

---


### DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference <a name="DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceconnectendpoint"

dataawsccec2instanceconnectendpoint.NewDataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.dualstack">Dualstack</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNames">DataAwsccEc2InstanceConnectEndpointPublicDnsNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dualstack`<sup>Required</sup> <a name="Dualstack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.dualstack"></a>

```go
func Dualstack() DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference</a>

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.ipv4"></a>

```go
func Ipv4() DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference">DataAwsccEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceConnectEndpointPublicDnsNames
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointPublicDnsNames">DataAwsccEc2InstanceConnectEndpointPublicDnsNames</a>

---


### DataAwsccEc2InstanceConnectEndpointTagsList <a name="DataAwsccEc2InstanceConnectEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceconnectendpoint"

dataawsccec2instanceconnectendpoint.NewDataAwsccEc2InstanceConnectEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2InstanceConnectEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2InstanceConnectEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2InstanceConnectEndpointTagsOutputReference <a name="DataAwsccEc2InstanceConnectEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2instanceconnectendpoint"

dataawsccec2instanceconnectendpoint.NewDataAwsccEc2InstanceConnectEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2InstanceConnectEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTags">DataAwsccEc2InstanceConnectEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2InstanceConnectEndpointTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2InstanceConnectEndpoint.DataAwsccEc2InstanceConnectEndpointTags">DataAwsccEc2InstanceConnectEndpointTags</a>

---




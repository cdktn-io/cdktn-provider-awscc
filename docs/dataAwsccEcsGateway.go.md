# `dataAwsccEcsGateway` Submodule <a name="`dataAwsccEcsGateway` Submodule" id="@cdktn/provider-awscc.dataAwsccEcsGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEcsGateway <a name="DataAwsccEcsGateway" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/ecs_gateway awscc_ecs_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

dataawsccecsgateway.NewDataAwsccEcsGateway(scope Construct, id *string, config DataAwsccEcsGatewayConfig) DataAwsccEcsGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig">DataAwsccEcsGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig">DataAwsccEcsGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEcsGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

dataawsccecsgateway.DataAwsccEcsGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

dataawsccecsgateway.DataAwsccEcsGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

dataawsccecsgateway.DataAwsccEcsGateway_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

dataawsccecsgateway.DataAwsccEcsGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEcsGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEcsGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEcsGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/ecs_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEcsGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference">DataAwsccEcsGatewayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.deletionProtection">DeletionProtection</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.gatewayName">GatewayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.infrastructureRoleArn">InfrastructureRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.propagateTags">PropagateTags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList">DataAwsccEcsGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.configuration"></a>

```go
func Configuration() DataAwsccEcsGatewayConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference">DataAwsccEcsGatewayConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.deletionProtection"></a>

```go
func DeletionProtection() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.gatewayName"></a>

```go
func GatewayName() *string
```

- *Type:* *string

---

##### `InfrastructureRoleArn`<sup>Required</sup> <a name="InfrastructureRoleArn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.infrastructureRoleArn"></a>

```go
func InfrastructureRoleArn() *string
```

- *Type:* *string

---

##### `PropagateTags`<sup>Required</sup> <a name="PropagateTags" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.propagateTags"></a>

```go
func PropagateTags() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.tags"></a>

```go
func Tags() DataAwsccEcsGatewayTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList">DataAwsccEcsGatewayTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEcsGatewayConfig <a name="DataAwsccEcsGatewayConfig" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

&dataawsccecsgateway.DataAwsccEcsGatewayConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/ecs_gateway#id DataAwsccEcsGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEcsGatewayConfiguration <a name="DataAwsccEcsGatewayConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

&dataawsccecsgateway.DataAwsccEcsGatewayConfiguration {

}
```


### DataAwsccEcsGatewayConfigurationHostSharedAlb <a name="DataAwsccEcsGatewayConfigurationHostSharedAlb" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlb.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

&dataawsccecsgateway.DataAwsccEcsGatewayConfigurationHostSharedAlb {

}
```


### DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

&dataawsccecsgateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs {

}
```


### DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

&dataawsccecsgateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination {

}
```


### DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

&dataawsccecsgateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3 {

}
```


### DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

&dataawsccecsgateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration {

}
```


### DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

&dataawsccecsgateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules {

}
```


### DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

&dataawsccecsgateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader {

}
```


### DataAwsccEcsGatewayTags <a name="DataAwsccEcsGatewayTags" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

&dataawsccecsgateway.DataAwsccEcsGatewayTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

dataawsccecsgateway.NewDataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.s3"></a>

```go
func S3() DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestination</a>

---


### DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

dataawsccecsgateway.NewDataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationS3</a>

---


### DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

dataawsccecsgateway.NewDataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.destination"></a>

```go
func Destination() DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsDestinationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogs</a>

---


### DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

dataawsccecsgateway.NewDataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.inboundSecurityGroup">InboundSecurityGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration">DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InboundSecurityGroup`<sup>Required</sup> <a name="InboundSecurityGroup" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.inboundSecurityGroup"></a>

```go
func InboundSecurityGroup() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration">DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfiguration</a>

---


### DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

dataawsccecsgateway.NewDataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.accessLogs">AccessLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.currentAlbCount">CurrentAlbCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.httpDesync">HttpDesync</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.maxAlbCount">MaxAlbCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.testTrafficRules">TestTrafficRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.webAclArn">WebAclArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlb">DataAwsccEcsGatewayConfigurationHostSharedAlb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLogs`<sup>Required</sup> <a name="AccessLogs" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.accessLogs"></a>

```go
func AccessLogs() DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbAccessLogsOutputReference</a>

---

##### `CurrentAlbCount`<sup>Required</sup> <a name="CurrentAlbCount" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.currentAlbCount"></a>

```go
func CurrentAlbCount() *f64
```

- *Type:* *f64

---

##### `HttpDesync`<sup>Required</sup> <a name="HttpDesync" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.httpDesync"></a>

```go
func HttpDesync() *string
```

- *Type:* *string

---

##### `MaxAlbCount`<sup>Required</sup> <a name="MaxAlbCount" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.maxAlbCount"></a>

```go
func MaxAlbCount() *f64
```

- *Type:* *f64

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.networkConfiguration"></a>

```go
func NetworkConfiguration() DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbNetworkConfigurationOutputReference</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `TestTrafficRules`<sup>Required</sup> <a name="TestTrafficRules" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.testTrafficRules"></a>

```go
func TestTrafficRules() DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference</a>

---

##### `WebAclArn`<sup>Required</sup> <a name="WebAclArn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.webAclArn"></a>

```go
func WebAclArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsGatewayConfigurationHostSharedAlb
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlb">DataAwsccEcsGatewayConfigurationHostSharedAlb</a>

---


### DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

dataawsccecsgateway.NewDataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeader</a>

---


### DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference <a name="DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

dataawsccecsgateway.NewDataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.header">Header</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.header"></a>

```go
func Header() DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesHeaderOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules">DataAwsccEcsGatewayConfigurationHostSharedAlbTestTrafficRules</a>

---


### DataAwsccEcsGatewayConfigurationOutputReference <a name="DataAwsccEcsGatewayConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

dataawsccecsgateway.NewDataAwsccEcsGatewayConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsGatewayConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.hostSharedAlb">HostSharedAlb</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfiguration">DataAwsccEcsGatewayConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostSharedAlb`<sup>Required</sup> <a name="HostSharedAlb" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.hostSharedAlb"></a>

```go
func HostSharedAlb() DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference">DataAwsccEcsGatewayConfigurationHostSharedAlbOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsGatewayConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayConfiguration">DataAwsccEcsGatewayConfiguration</a>

---


### DataAwsccEcsGatewayTagsList <a name="DataAwsccEcsGatewayTagsList" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

dataawsccecsgateway.NewDataAwsccEcsGatewayTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsGatewayTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsGatewayTagsOutputReference <a name="DataAwsccEcsGatewayTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawsccecsgateway"

dataawsccecsgateway.NewDataAwsccEcsGatewayTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsGatewayTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTags">DataAwsccEcsGatewayTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsGatewayTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsGateway.DataAwsccEcsGatewayTags">DataAwsccEcsGatewayTags</a>

---




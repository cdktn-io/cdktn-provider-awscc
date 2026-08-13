# `dataAwsccLightsailContainer` Submodule <a name="`dataAwsccLightsailContainer` Submodule" id="@cdktn/provider-awscc.dataAwsccLightsailContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLightsailContainer <a name="DataAwsccLightsailContainer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lightsail_container awscc_lightsail_container}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

dataawscclightsailcontainer.NewDataAwsccLightsailContainer(scope Construct, id *string, config DataAwsccLightsailContainerConfig) DataAwsccLightsailContainer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig">DataAwsccLightsailContainerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig">DataAwsccLightsailContainerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLightsailContainer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

dataawscclightsailcontainer.DataAwsccLightsailContainer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

dataawscclightsailcontainer.DataAwsccLightsailContainer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

dataawscclightsailcontainer.DataAwsccLightsailContainer_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

dataawscclightsailcontainer.DataAwsccLightsailContainer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccLightsailContainer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccLightsailContainer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccLightsailContainer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lightsail_container#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLightsailContainer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.containerArn">ContainerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.containerServiceDeployment">ContainerServiceDeployment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference">DataAwsccLightsailContainerContainerServiceDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.isDisabled">IsDisabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.power">Power</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.principalArn">PrincipalArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.privateRegistryAccess">PrivateRegistryAccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference">DataAwsccLightsailContainerPrivateRegistryAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.publicDomainNames">PublicDomainNames</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList">DataAwsccLightsailContainerPublicDomainNamesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.scale">Scale</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList">DataAwsccLightsailContainerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ContainerArn`<sup>Required</sup> <a name="ContainerArn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.containerArn"></a>

```go
func ContainerArn() *string
```

- *Type:* *string

---

##### `ContainerServiceDeployment`<sup>Required</sup> <a name="ContainerServiceDeployment" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.containerServiceDeployment"></a>

```go
func ContainerServiceDeployment() DataAwsccLightsailContainerContainerServiceDeploymentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference">DataAwsccLightsailContainerContainerServiceDeploymentOutputReference</a>

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.isDisabled"></a>

```go
func IsDisabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Power`<sup>Required</sup> <a name="Power" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.power"></a>

```go
func Power() *string
```

- *Type:* *string

---

##### `PrincipalArn`<sup>Required</sup> <a name="PrincipalArn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.principalArn"></a>

```go
func PrincipalArn() *string
```

- *Type:* *string

---

##### `PrivateRegistryAccess`<sup>Required</sup> <a name="PrivateRegistryAccess" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.privateRegistryAccess"></a>

```go
func PrivateRegistryAccess() DataAwsccLightsailContainerPrivateRegistryAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference">DataAwsccLightsailContainerPrivateRegistryAccessOutputReference</a>

---

##### `PublicDomainNames`<sup>Required</sup> <a name="PublicDomainNames" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.publicDomainNames"></a>

```go
func PublicDomainNames() DataAwsccLightsailContainerPublicDomainNamesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList">DataAwsccLightsailContainerPublicDomainNamesList</a>

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.scale"></a>

```go
func Scale() *f64
```

- *Type:* *f64

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.tags"></a>

```go
func Tags() DataAwsccLightsailContainerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList">DataAwsccLightsailContainerTagsList</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLightsailContainerConfig <a name="DataAwsccLightsailContainerConfig" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

&dataawscclightsailcontainer.DataAwsccLightsailContainerConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/lightsail_container#id DataAwsccLightsailContainer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLightsailContainerContainerServiceDeployment <a name="DataAwsccLightsailContainerContainerServiceDeployment" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeployment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

&dataawscclightsailcontainer.DataAwsccLightsailContainerContainerServiceDeployment {

}
```


### DataAwsccLightsailContainerContainerServiceDeploymentContainers <a name="DataAwsccLightsailContainerContainerServiceDeploymentContainers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

&dataawscclightsailcontainer.DataAwsccLightsailContainerContainerServiceDeploymentContainers {

}
```


### DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment <a name="DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

&dataawscclightsailcontainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment {

}
```


### DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts <a name="DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

&dataawscclightsailcontainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts {

}
```


### DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint <a name="DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

&dataawscclightsailcontainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint {

}
```


### DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig <a name="DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

&dataawscclightsailcontainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig {

}
```


### DataAwsccLightsailContainerPrivateRegistryAccess <a name="DataAwsccLightsailContainerPrivateRegistryAccess" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccess.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

&dataawscclightsailcontainer.DataAwsccLightsailContainerPrivateRegistryAccess {

}
```


### DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole <a name="DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

&dataawscclightsailcontainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole {

}
```


### DataAwsccLightsailContainerPublicDomainNames <a name="DataAwsccLightsailContainerPublicDomainNames" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNames.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

&dataawscclightsailcontainer.DataAwsccLightsailContainerPublicDomainNames {

}
```


### DataAwsccLightsailContainerTags <a name="DataAwsccLightsailContainerTags" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

&dataawscclightsailcontainer.DataAwsccLightsailContainerTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList <a name="DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

dataawscclightsailcontainer.NewDataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.get"></a>

```go
func Get(index *f64) DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference <a name="DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

dataawscclightsailcontainer.NewDataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.variable">Variable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment">DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.variable"></a>

```go
func Variable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment">DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironment</a>

---


### DataAwsccLightsailContainerContainerServiceDeploymentContainersList <a name="DataAwsccLightsailContainerContainerServiceDeploymentContainersList" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

dataawscclightsailcontainer.NewDataAwsccLightsailContainerContainerServiceDeploymentContainersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLightsailContainerContainerServiceDeploymentContainersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.get"></a>

```go
func Get(index *f64) DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference <a name="DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

dataawscclightsailcontainer.NewDataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList">DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList">DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainers">DataAwsccLightsailContainerContainerServiceDeploymentContainers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.environment"></a>

```go
func Environment() DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList">DataAwsccLightsailContainerContainerServiceDeploymentContainersEnvironmentList</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.ports"></a>

```go
func Ports() DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList">DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailContainerContainerServiceDeploymentContainers
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainers">DataAwsccLightsailContainerContainerServiceDeploymentContainers</a>

---


### DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList <a name="DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

dataawscclightsailcontainer.NewDataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.get"></a>

```go
func Get(index *f64) DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference <a name="DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

dataawscclightsailcontainer.NewDataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts">DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts">DataAwsccLightsailContainerContainerServiceDeploymentContainersPorts</a>

---


### DataAwsccLightsailContainerContainerServiceDeploymentOutputReference <a name="DataAwsccLightsailContainerContainerServiceDeploymentOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

dataawscclightsailcontainer.NewDataAwsccLightsailContainerContainerServiceDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLightsailContainerContainerServiceDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.property.containers">Containers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList">DataAwsccLightsailContainerContainerServiceDeploymentContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.property.publicEndpoint">PublicEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference">DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeployment">DataAwsccLightsailContainerContainerServiceDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.property.containers"></a>

```go
func Containers() DataAwsccLightsailContainerContainerServiceDeploymentContainersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentContainersList">DataAwsccLightsailContainerContainerServiceDeploymentContainersList</a>

---

##### `PublicEndpoint`<sup>Required</sup> <a name="PublicEndpoint" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.property.publicEndpoint"></a>

```go
func PublicEndpoint() DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference">DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailContainerContainerServiceDeployment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeployment">DataAwsccLightsailContainerContainerServiceDeployment</a>

---


### DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference <a name="DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

dataawscclightsailcontainer.NewDataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.successCodes">SuccessCodes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.healthyThreshold"></a>

```go
func HealthyThreshold() *f64
```

- *Type:* *f64

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.intervalSeconds"></a>

```go
func IntervalSeconds() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `SuccessCodes`<sup>Required</sup> <a name="SuccessCodes" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.successCodes"></a>

```go
func SuccessCodes() *string
```

- *Type:* *string

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.unhealthyThreshold"></a>

```go
func UnhealthyThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a>

---


### DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference <a name="DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

dataawscclightsailcontainer.NewDataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.healthCheckConfig">HealthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference">DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint">DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerPort"></a>

```go
func ContainerPort() *f64
```

- *Type:* *f64

---

##### `HealthCheckConfig`<sup>Required</sup> <a name="HealthCheckConfig" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.healthCheckConfig"></a>

```go
func HealthCheckConfig() DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference">DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint">DataAwsccLightsailContainerContainerServiceDeploymentPublicEndpoint</a>

---


### DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference <a name="DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

dataawscclightsailcontainer.NewDataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActive">IsActive</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.principalArn">PrincipalArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole">DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActive"></a>

```go
func IsActive() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PrincipalArn`<sup>Required</sup> <a name="PrincipalArn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.principalArn"></a>

```go
func PrincipalArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole">DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRole</a>

---


### DataAwsccLightsailContainerPrivateRegistryAccessOutputReference <a name="DataAwsccLightsailContainerPrivateRegistryAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

dataawscclightsailcontainer.NewDataAwsccLightsailContainerPrivateRegistryAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLightsailContainerPrivateRegistryAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.property.ecrImagePullerRole">EcrImagePullerRole</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference">DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccess">DataAwsccLightsailContainerPrivateRegistryAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EcrImagePullerRole`<sup>Required</sup> <a name="EcrImagePullerRole" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.property.ecrImagePullerRole"></a>

```go
func EcrImagePullerRole() DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference">DataAwsccLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailContainerPrivateRegistryAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPrivateRegistryAccess">DataAwsccLightsailContainerPrivateRegistryAccess</a>

---


### DataAwsccLightsailContainerPublicDomainNamesList <a name="DataAwsccLightsailContainerPublicDomainNamesList" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

dataawscclightsailcontainer.NewDataAwsccLightsailContainerPublicDomainNamesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLightsailContainerPublicDomainNamesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.get"></a>

```go
func Get(index *f64) DataAwsccLightsailContainerPublicDomainNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLightsailContainerPublicDomainNamesOutputReference <a name="DataAwsccLightsailContainerPublicDomainNamesOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

dataawscclightsailcontainer.NewDataAwsccLightsailContainerPublicDomainNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLightsailContainerPublicDomainNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.property.certificateName">CertificateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.property.domainNames">DomainNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNames">DataAwsccLightsailContainerPublicDomainNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.property.certificateName"></a>

```go
func CertificateName() *string
```

- *Type:* *string

---

##### `DomainNames`<sup>Required</sup> <a name="DomainNames" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.property.domainNames"></a>

```go
func DomainNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailContainerPublicDomainNames
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerPublicDomainNames">DataAwsccLightsailContainerPublicDomainNames</a>

---


### DataAwsccLightsailContainerTagsList <a name="DataAwsccLightsailContainerTagsList" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

dataawscclightsailcontainer.NewDataAwsccLightsailContainerTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLightsailContainerTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.get"></a>

```go
func Get(index *f64) DataAwsccLightsailContainerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLightsailContainerTagsOutputReference <a name="DataAwsccLightsailContainerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscclightsailcontainer"

dataawscclightsailcontainer.NewDataAwsccLightsailContainerTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLightsailContainerTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTags">DataAwsccLightsailContainerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLightsailContainerTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailContainer.DataAwsccLightsailContainerTags">DataAwsccLightsailContainerTags</a>

---




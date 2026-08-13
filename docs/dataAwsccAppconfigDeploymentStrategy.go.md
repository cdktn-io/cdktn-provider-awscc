# `dataAwsccAppconfigDeploymentStrategy` Submodule <a name="`dataAwsccAppconfigDeploymentStrategy` Submodule" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppconfigDeploymentStrategy <a name="DataAwsccAppconfigDeploymentStrategy" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appconfig_deployment_strategy awscc_appconfig_deployment_strategy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigdeploymentstrategy"

dataawsccappconfigdeploymentstrategy.NewDataAwsccAppconfigDeploymentStrategy(scope Construct, id *string, config DataAwsccAppconfigDeploymentStrategyConfig) DataAwsccAppconfigDeploymentStrategy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig">DataAwsccAppconfigDeploymentStrategyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig">DataAwsccAppconfigDeploymentStrategyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppconfigDeploymentStrategy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigdeploymentstrategy"

dataawsccappconfigdeploymentstrategy.DataAwsccAppconfigDeploymentStrategy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigdeploymentstrategy"

dataawsccappconfigdeploymentstrategy.DataAwsccAppconfigDeploymentStrategy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigdeploymentstrategy"

dataawsccappconfigdeploymentstrategy.DataAwsccAppconfigDeploymentStrategy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigdeploymentstrategy"

dataawsccappconfigdeploymentstrategy.DataAwsccAppconfigDeploymentStrategy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccAppconfigDeploymentStrategy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccAppconfigDeploymentStrategy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccAppconfigDeploymentStrategy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appconfig_deployment_strategy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppconfigDeploymentStrategy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.deploymentDurationInMinutes">DeploymentDurationInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.deploymentStrategyId">DeploymentStrategyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.finalBakeTimeInMinutes">FinalBakeTimeInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.growthFactor">GrowthFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.growthType">GrowthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.replicateTo">ReplicateTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList">DataAwsccAppconfigDeploymentStrategyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DeploymentDurationInMinutes`<sup>Required</sup> <a name="DeploymentDurationInMinutes" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.deploymentDurationInMinutes"></a>

```go
func DeploymentDurationInMinutes() *f64
```

- *Type:* *f64

---

##### `DeploymentStrategyId`<sup>Required</sup> <a name="DeploymentStrategyId" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.deploymentStrategyId"></a>

```go
func DeploymentStrategyId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FinalBakeTimeInMinutes`<sup>Required</sup> <a name="FinalBakeTimeInMinutes" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.finalBakeTimeInMinutes"></a>

```go
func FinalBakeTimeInMinutes() *f64
```

- *Type:* *f64

---

##### `GrowthFactor`<sup>Required</sup> <a name="GrowthFactor" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.growthFactor"></a>

```go
func GrowthFactor() *f64
```

- *Type:* *f64

---

##### `GrowthType`<sup>Required</sup> <a name="GrowthType" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.growthType"></a>

```go
func GrowthType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReplicateTo`<sup>Required</sup> <a name="ReplicateTo" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.replicateTo"></a>

```go
func ReplicateTo() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.tags"></a>

```go
func Tags() DataAwsccAppconfigDeploymentStrategyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList">DataAwsccAppconfigDeploymentStrategyTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppconfigDeploymentStrategyConfig <a name="DataAwsccAppconfigDeploymentStrategyConfig" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigdeploymentstrategy"

&dataawsccappconfigdeploymentstrategy.DataAwsccAppconfigDeploymentStrategyConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appconfig_deployment_strategy#id DataAwsccAppconfigDeploymentStrategy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppconfigDeploymentStrategyTags <a name="DataAwsccAppconfigDeploymentStrategyTags" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigdeploymentstrategy"

&dataawsccappconfigdeploymentstrategy.DataAwsccAppconfigDeploymentStrategyTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppconfigDeploymentStrategyTagsList <a name="DataAwsccAppconfigDeploymentStrategyTagsList" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigdeploymentstrategy"

dataawsccappconfigdeploymentstrategy.NewDataAwsccAppconfigDeploymentStrategyTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAppconfigDeploymentStrategyTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.get"></a>

```go
func Get(index *f64) DataAwsccAppconfigDeploymentStrategyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAppconfigDeploymentStrategyTagsOutputReference <a name="DataAwsccAppconfigDeploymentStrategyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappconfigdeploymentstrategy"

dataawsccappconfigdeploymentstrategy.NewDataAwsccAppconfigDeploymentStrategyTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAppconfigDeploymentStrategyTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTags">DataAwsccAppconfigDeploymentStrategyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppconfigDeploymentStrategyTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigDeploymentStrategy.DataAwsccAppconfigDeploymentStrategyTags">DataAwsccAppconfigDeploymentStrategyTags</a>

---




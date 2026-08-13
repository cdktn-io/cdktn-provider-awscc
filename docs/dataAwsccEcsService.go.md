# `dataAwsccEcsService` Submodule <a name="`dataAwsccEcsService` Submodule" id="@cdktn/provider-awscc.dataAwsccEcsService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEcsService <a name="DataAwsccEcsService" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ecs_service awscc_ecs_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsService(scope Construct, id *string, config DataAwsccEcsServiceConfig) DataAwsccEcsService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig">DataAwsccEcsServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig">DataAwsccEcsServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEcsService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.DataAwsccEcsService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.DataAwsccEcsService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.DataAwsccEcsService_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.DataAwsccEcsService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEcsService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEcsService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEcsService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ecs_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEcsService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.availabilityZoneRebalancing">AvailabilityZoneRebalancing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.capacityProviderStrategy">CapacityProviderStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList">DataAwsccEcsServiceCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.deploymentConfiguration">DeploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference">DataAwsccEcsServiceDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.deploymentController">DeploymentController</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference">DataAwsccEcsServiceDeploymentControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.desiredCount">DesiredCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.enableEcsManagedTags">EnableEcsManagedTags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.enableExecuteCommand">EnableExecuteCommand</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.forceNewDeployment">ForceNewDeployment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference">DataAwsccEcsServiceForceNewDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.healthCheckGracePeriodSeconds">HealthCheckGracePeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.launchType">LaunchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.loadBalancers">LoadBalancers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList">DataAwsccEcsServiceLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference">DataAwsccEcsServiceMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference">DataAwsccEcsServiceNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.placementConstraints">PlacementConstraints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList">DataAwsccEcsServicePlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.placementStrategies">PlacementStrategies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList">DataAwsccEcsServicePlacementStrategiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.platformVersion">PlatformVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.propagateTags">PropagateTags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.schedulingStrategy">SchedulingStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.serviceArn">ServiceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.serviceConnectConfiguration">ServiceConnectConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference">DataAwsccEcsServiceServiceConnectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.serviceRegistries">ServiceRegistries</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList">DataAwsccEcsServiceServiceRegistriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList">DataAwsccEcsServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.taskDefinition">TaskDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.volumeConfigurations">VolumeConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList">DataAwsccEcsServiceVolumeConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.vpcLatticeConfigurations">VpcLatticeConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList">DataAwsccEcsServiceVpcLatticeConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AvailabilityZoneRebalancing`<sup>Required</sup> <a name="AvailabilityZoneRebalancing" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.availabilityZoneRebalancing"></a>

```go
func AvailabilityZoneRebalancing() *string
```

- *Type:* *string

---

##### `CapacityProviderStrategy`<sup>Required</sup> <a name="CapacityProviderStrategy" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.capacityProviderStrategy"></a>

```go
func CapacityProviderStrategy() DataAwsccEcsServiceCapacityProviderStrategyList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList">DataAwsccEcsServiceCapacityProviderStrategyList</a>

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `DeploymentConfiguration`<sup>Required</sup> <a name="DeploymentConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.deploymentConfiguration"></a>

```go
func DeploymentConfiguration() DataAwsccEcsServiceDeploymentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference">DataAwsccEcsServiceDeploymentConfigurationOutputReference</a>

---

##### `DeploymentController`<sup>Required</sup> <a name="DeploymentController" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.deploymentController"></a>

```go
func DeploymentController() DataAwsccEcsServiceDeploymentControllerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference">DataAwsccEcsServiceDeploymentControllerOutputReference</a>

---

##### `DesiredCount`<sup>Required</sup> <a name="DesiredCount" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.desiredCount"></a>

```go
func DesiredCount() *f64
```

- *Type:* *f64

---

##### `EnableEcsManagedTags`<sup>Required</sup> <a name="EnableEcsManagedTags" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.enableEcsManagedTags"></a>

```go
func EnableEcsManagedTags() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EnableExecuteCommand`<sup>Required</sup> <a name="EnableExecuteCommand" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.enableExecuteCommand"></a>

```go
func EnableExecuteCommand() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ForceNewDeployment`<sup>Required</sup> <a name="ForceNewDeployment" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.forceNewDeployment"></a>

```go
func ForceNewDeployment() DataAwsccEcsServiceForceNewDeploymentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference">DataAwsccEcsServiceForceNewDeploymentOutputReference</a>

---

##### `HealthCheckGracePeriodSeconds`<sup>Required</sup> <a name="HealthCheckGracePeriodSeconds" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.healthCheckGracePeriodSeconds"></a>

```go
func HealthCheckGracePeriodSeconds() *f64
```

- *Type:* *f64

---

##### `LaunchType`<sup>Required</sup> <a name="LaunchType" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.launchType"></a>

```go
func LaunchType() *string
```

- *Type:* *string

---

##### `LoadBalancers`<sup>Required</sup> <a name="LoadBalancers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.loadBalancers"></a>

```go
func LoadBalancers() DataAwsccEcsServiceLoadBalancersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList">DataAwsccEcsServiceLoadBalancersList</a>

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.monitoring"></a>

```go
func Monitoring() DataAwsccEcsServiceMonitoringOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference">DataAwsccEcsServiceMonitoringOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.networkConfiguration"></a>

```go
func NetworkConfiguration() DataAwsccEcsServiceNetworkConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference">DataAwsccEcsServiceNetworkConfigurationOutputReference</a>

---

##### `PlacementConstraints`<sup>Required</sup> <a name="PlacementConstraints" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.placementConstraints"></a>

```go
func PlacementConstraints() DataAwsccEcsServicePlacementConstraintsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList">DataAwsccEcsServicePlacementConstraintsList</a>

---

##### `PlacementStrategies`<sup>Required</sup> <a name="PlacementStrategies" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.placementStrategies"></a>

```go
func PlacementStrategies() DataAwsccEcsServicePlacementStrategiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList">DataAwsccEcsServicePlacementStrategiesList</a>

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.platformVersion"></a>

```go
func PlatformVersion() *string
```

- *Type:* *string

---

##### `PropagateTags`<sup>Required</sup> <a name="PropagateTags" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.propagateTags"></a>

```go
func PropagateTags() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `SchedulingStrategy`<sup>Required</sup> <a name="SchedulingStrategy" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.schedulingStrategy"></a>

```go
func SchedulingStrategy() *string
```

- *Type:* *string

---

##### `ServiceArn`<sup>Required</sup> <a name="ServiceArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.serviceArn"></a>

```go
func ServiceArn() *string
```

- *Type:* *string

---

##### `ServiceConnectConfiguration`<sup>Required</sup> <a name="ServiceConnectConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.serviceConnectConfiguration"></a>

```go
func ServiceConnectConfiguration() DataAwsccEcsServiceServiceConnectConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference">DataAwsccEcsServiceServiceConnectConfigurationOutputReference</a>

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `ServiceRegistries`<sup>Required</sup> <a name="ServiceRegistries" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.serviceRegistries"></a>

```go
func ServiceRegistries() DataAwsccEcsServiceServiceRegistriesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList">DataAwsccEcsServiceServiceRegistriesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.tags"></a>

```go
func Tags() DataAwsccEcsServiceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList">DataAwsccEcsServiceTagsList</a>

---

##### `TaskDefinition`<sup>Required</sup> <a name="TaskDefinition" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.taskDefinition"></a>

```go
func TaskDefinition() *string
```

- *Type:* *string

---

##### `VolumeConfigurations`<sup>Required</sup> <a name="VolumeConfigurations" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.volumeConfigurations"></a>

```go
func VolumeConfigurations() DataAwsccEcsServiceVolumeConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList">DataAwsccEcsServiceVolumeConfigurationsList</a>

---

##### `VpcLatticeConfigurations`<sup>Required</sup> <a name="VpcLatticeConfigurations" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.vpcLatticeConfigurations"></a>

```go
func VpcLatticeConfigurations() DataAwsccEcsServiceVpcLatticeConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList">DataAwsccEcsServiceVpcLatticeConfigurationsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEcsServiceCapacityProviderStrategy <a name="DataAwsccEcsServiceCapacityProviderStrategy" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceCapacityProviderStrategy {

}
```


### DataAwsccEcsServiceConfig <a name="DataAwsccEcsServiceConfig" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ecs_service#id DataAwsccEcsService#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEcsServiceDeploymentConfiguration <a name="DataAwsccEcsServiceDeploymentConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceDeploymentConfiguration {

}
```


### DataAwsccEcsServiceDeploymentConfigurationAlarms <a name="DataAwsccEcsServiceDeploymentConfigurationAlarms" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceDeploymentConfigurationAlarms {

}
```


### DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration <a name="DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration {

}
```


### DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker <a name="DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker {

}
```


### DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration <a name="DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration {

}
```


### DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks <a name="DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks {

}
```


### DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration <a name="DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration {

}
```


### DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration <a name="DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration {

}
```


### DataAwsccEcsServiceDeploymentController <a name="DataAwsccEcsServiceDeploymentController" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentController"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentController.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceDeploymentController {

}
```


### DataAwsccEcsServiceForceNewDeployment <a name="DataAwsccEcsServiceForceNewDeployment" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeployment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceForceNewDeployment {

}
```


### DataAwsccEcsServiceLoadBalancers <a name="DataAwsccEcsServiceLoadBalancers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceLoadBalancers {

}
```


### DataAwsccEcsServiceLoadBalancersAdvancedConfiguration <a name="DataAwsccEcsServiceLoadBalancersAdvancedConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceLoadBalancersAdvancedConfiguration {

}
```


### DataAwsccEcsServiceMonitoring <a name="DataAwsccEcsServiceMonitoring" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoring.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceMonitoring {

}
```


### DataAwsccEcsServiceMonitoringMetricConfigurations <a name="DataAwsccEcsServiceMonitoringMetricConfigurations" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceMonitoringMetricConfigurations {

}
```


### DataAwsccEcsServiceNetworkConfiguration <a name="DataAwsccEcsServiceNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceNetworkConfiguration {

}
```


### DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration <a name="DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration {

}
```


### DataAwsccEcsServicePlacementConstraints <a name="DataAwsccEcsServicePlacementConstraints" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServicePlacementConstraints {

}
```


### DataAwsccEcsServicePlacementStrategies <a name="DataAwsccEcsServicePlacementStrategies" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServicePlacementStrategies {

}
```


### DataAwsccEcsServiceServiceConnectConfiguration <a name="DataAwsccEcsServiceServiceConnectConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceServiceConnectConfiguration {

}
```


### DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration <a name="DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration {

}
```


### DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration <a name="DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration {

}
```


### DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions <a name="DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions {

}
```


### DataAwsccEcsServiceServiceConnectConfigurationServices <a name="DataAwsccEcsServiceServiceConnectConfigurationServices" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServices.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceServiceConnectConfigurationServices {

}
```


### DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases {

}
```


### DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules {

}
```


### DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader {

}
```


### DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue {

}
```


### DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout {

}
```


### DataAwsccEcsServiceServiceConnectConfigurationServicesTls <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesTls" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceServiceConnectConfigurationServicesTls {

}
```


### DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority {

}
```


### DataAwsccEcsServiceServiceRegistries <a name="DataAwsccEcsServiceServiceRegistries" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceServiceRegistries {

}
```


### DataAwsccEcsServiceTags <a name="DataAwsccEcsServiceTags" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceTags {

}
```


### DataAwsccEcsServiceVolumeConfigurations <a name="DataAwsccEcsServiceVolumeConfigurations" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceVolumeConfigurations {

}
```


### DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume <a name="DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume {

}
```


### DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications <a name="DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications {

}
```


### DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags <a name="DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags {

}
```


### DataAwsccEcsServiceVpcLatticeConfigurations <a name="DataAwsccEcsServiceVpcLatticeConfigurations" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

&dataawsccecsservice.DataAwsccEcsServiceVpcLatticeConfigurations {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEcsServiceCapacityProviderStrategyList <a name="DataAwsccEcsServiceCapacityProviderStrategyList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceCapacityProviderStrategyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsServiceCapacityProviderStrategyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.get"></a>

```go
func Get(index *f64) DataAwsccEcsServiceCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsServiceCapacityProviderStrategyOutputReference <a name="DataAwsccEcsServiceCapacityProviderStrategyOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceCapacityProviderStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsServiceCapacityProviderStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.base">Base</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.capacityProvider">CapacityProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategy">DataAwsccEcsServiceCapacityProviderStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.base"></a>

```go
func Base() *f64
```

- *Type:* *f64

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```go
func CapacityProvider() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceCapacityProviderStrategy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceCapacityProviderStrategy">DataAwsccEcsServiceCapacityProviderStrategy</a>

---


### DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference <a name="DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.alarmNames">AlarmNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.enable">Enable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.rollback">Rollback</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarms">DataAwsccEcsServiceDeploymentConfigurationAlarms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmNames`<sup>Required</sup> <a name="AlarmNames" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.alarmNames"></a>

```go
func AlarmNames() *[]*string
```

- *Type:* *[]*string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.enable"></a>

```go
func Enable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Rollback`<sup>Required</sup> <a name="Rollback" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.rollback"></a>

```go
func Rollback() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceDeploymentConfigurationAlarms
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarms">DataAwsccEcsServiceDeploymentConfigurationAlarms</a>

---


### DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference <a name="DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.canaryBakeTimeInMinutes">CanaryBakeTimeInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.canaryPercent">CanaryPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration">DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CanaryBakeTimeInMinutes`<sup>Required</sup> <a name="CanaryBakeTimeInMinutes" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.canaryBakeTimeInMinutes"></a>

```go
func CanaryBakeTimeInMinutes() *f64
```

- *Type:* *f64

---

##### `CanaryPercent`<sup>Required</sup> <a name="CanaryPercent" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.canaryPercent"></a>

```go
func CanaryPercent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration">DataAwsccEcsServiceDeploymentConfigurationCanaryConfiguration</a>

---


### DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference <a name="DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.enable">Enable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.resetOnHealthyTask">ResetOnHealthyTask</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.rollback">Rollback</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.thresholdConfiguration">ThresholdConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference">DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker">DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.enable"></a>

```go
func Enable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ResetOnHealthyTask`<sup>Required</sup> <a name="ResetOnHealthyTask" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.resetOnHealthyTask"></a>

```go
func ResetOnHealthyTask() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Rollback`<sup>Required</sup> <a name="Rollback" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.rollback"></a>

```go
func Rollback() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ThresholdConfiguration`<sup>Required</sup> <a name="ThresholdConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.thresholdConfiguration"></a>

```go
func ThresholdConfiguration() DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference">DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker">DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreaker</a>

---


### DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference <a name="DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration">DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration">DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerThresholdConfiguration</a>

---


### DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList <a name="DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.get"></a>

```go
func Get(index *f64) DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference <a name="DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.hookDetails">HookDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.hookTargetArn">HookTargetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.lifecycleStages">LifecycleStages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.targetType">TargetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.timeoutConfiguration">TimeoutConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference">DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks">DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HookDetails`<sup>Required</sup> <a name="HookDetails" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.hookDetails"></a>

```go
func HookDetails() *string
```

- *Type:* *string

---

##### `HookTargetArn`<sup>Required</sup> <a name="HookTargetArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.hookTargetArn"></a>

```go
func HookTargetArn() *string
```

- *Type:* *string

---

##### `LifecycleStages`<sup>Required</sup> <a name="LifecycleStages" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.lifecycleStages"></a>

```go
func LifecycleStages() *[]*string
```

- *Type:* *[]*string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.targetType"></a>

```go
func TargetType() *string
```

- *Type:* *string

---

##### `TimeoutConfiguration`<sup>Required</sup> <a name="TimeoutConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.timeoutConfiguration"></a>

```go
func TimeoutConfiguration() DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference">DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks">DataAwsccEcsServiceDeploymentConfigurationLifecycleHooks</a>

---


### DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference <a name="DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.property.timeoutInMinutes">TimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration">DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `TimeoutInMinutes`<sup>Required</sup> <a name="TimeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.property.timeoutInMinutes"></a>

```go
func TimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration">DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksTimeoutConfiguration</a>

---


### DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference <a name="DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.stepBakeTimeInMinutes">StepBakeTimeInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.stepPercent">StepPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration">DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StepBakeTimeInMinutes`<sup>Required</sup> <a name="StepBakeTimeInMinutes" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.stepBakeTimeInMinutes"></a>

```go
func StepBakeTimeInMinutes() *f64
```

- *Type:* *f64

---

##### `StepPercent`<sup>Required</sup> <a name="StepPercent" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.stepPercent"></a>

```go
func StepPercent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration">DataAwsccEcsServiceDeploymentConfigurationLinearConfiguration</a>

---


### DataAwsccEcsServiceDeploymentConfigurationOutputReference <a name="DataAwsccEcsServiceDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceDeploymentConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceDeploymentConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.alarms">Alarms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference">DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.bakeTimeInMinutes">BakeTimeInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.canaryConfiguration">CanaryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference">DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.deploymentCircuitBreaker">DeploymentCircuitBreaker</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference">DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.lifecycleHooks">LifecycleHooks</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList">DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.linearConfiguration">LinearConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference">DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.maximumPercent">MaximumPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.minimumHealthyPercent">MinimumHealthyPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.strategy">Strategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfiguration">DataAwsccEcsServiceDeploymentConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Alarms`<sup>Required</sup> <a name="Alarms" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.alarms"></a>

```go
func Alarms() DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference">DataAwsccEcsServiceDeploymentConfigurationAlarmsOutputReference</a>

---

##### `BakeTimeInMinutes`<sup>Required</sup> <a name="BakeTimeInMinutes" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.bakeTimeInMinutes"></a>

```go
func BakeTimeInMinutes() *f64
```

- *Type:* *f64

---

##### `CanaryConfiguration`<sup>Required</sup> <a name="CanaryConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.canaryConfiguration"></a>

```go
func CanaryConfiguration() DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference">DataAwsccEcsServiceDeploymentConfigurationCanaryConfigurationOutputReference</a>

---

##### `DeploymentCircuitBreaker`<sup>Required</sup> <a name="DeploymentCircuitBreaker" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.deploymentCircuitBreaker"></a>

```go
func DeploymentCircuitBreaker() DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference">DataAwsccEcsServiceDeploymentConfigurationDeploymentCircuitBreakerOutputReference</a>

---

##### `LifecycleHooks`<sup>Required</sup> <a name="LifecycleHooks" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.lifecycleHooks"></a>

```go
func LifecycleHooks() DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList">DataAwsccEcsServiceDeploymentConfigurationLifecycleHooksList</a>

---

##### `LinearConfiguration`<sup>Required</sup> <a name="LinearConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.linearConfiguration"></a>

```go
func LinearConfiguration() DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference">DataAwsccEcsServiceDeploymentConfigurationLinearConfigurationOutputReference</a>

---

##### `MaximumPercent`<sup>Required</sup> <a name="MaximumPercent" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.maximumPercent"></a>

```go
func MaximumPercent() *f64
```

- *Type:* *f64

---

##### `MinimumHealthyPercent`<sup>Required</sup> <a name="MinimumHealthyPercent" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.minimumHealthyPercent"></a>

```go
func MinimumHealthyPercent() *f64
```

- *Type:* *f64

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.strategy"></a>

```go
func Strategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceDeploymentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentConfiguration">DataAwsccEcsServiceDeploymentConfiguration</a>

---


### DataAwsccEcsServiceDeploymentControllerOutputReference <a name="DataAwsccEcsServiceDeploymentControllerOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceDeploymentControllerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceDeploymentControllerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentController">DataAwsccEcsServiceDeploymentController</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentControllerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceDeploymentController
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceDeploymentController">DataAwsccEcsServiceDeploymentController</a>

---


### DataAwsccEcsServiceForceNewDeploymentOutputReference <a name="DataAwsccEcsServiceForceNewDeploymentOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceForceNewDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceForceNewDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.property.enableForceNewDeployment">EnableForceNewDeployment</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.property.forceNewDeploymentNonce">ForceNewDeploymentNonce</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeployment">DataAwsccEcsServiceForceNewDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableForceNewDeployment`<sup>Required</sup> <a name="EnableForceNewDeployment" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.property.enableForceNewDeployment"></a>

```go
func EnableForceNewDeployment() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ForceNewDeploymentNonce`<sup>Required</sup> <a name="ForceNewDeploymentNonce" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.property.forceNewDeploymentNonce"></a>

```go
func ForceNewDeploymentNonce() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceForceNewDeployment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceForceNewDeployment">DataAwsccEcsServiceForceNewDeployment</a>

---


### DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference <a name="DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.alternateTargetGroupArn">AlternateTargetGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.productionListenerRule">ProductionListenerRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.testListenerRule">TestListenerRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfiguration">DataAwsccEcsServiceLoadBalancersAdvancedConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlternateTargetGroupArn`<sup>Required</sup> <a name="AlternateTargetGroupArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.alternateTargetGroupArn"></a>

```go
func AlternateTargetGroupArn() *string
```

- *Type:* *string

---

##### `ProductionListenerRule`<sup>Required</sup> <a name="ProductionListenerRule" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.productionListenerRule"></a>

```go
func ProductionListenerRule() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `TestListenerRule`<sup>Required</sup> <a name="TestListenerRule" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.testListenerRule"></a>

```go
func TestListenerRule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceLoadBalancersAdvancedConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfiguration">DataAwsccEcsServiceLoadBalancersAdvancedConfiguration</a>

---


### DataAwsccEcsServiceLoadBalancersList <a name="DataAwsccEcsServiceLoadBalancersList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceLoadBalancersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsServiceLoadBalancersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.get"></a>

```go
func Get(index *f64) DataAwsccEcsServiceLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsServiceLoadBalancersOutputReference <a name="DataAwsccEcsServiceLoadBalancersOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceLoadBalancersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsServiceLoadBalancersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.advancedConfiguration">AdvancedConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference">DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.loadBalancerName">LoadBalancerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancers">DataAwsccEcsServiceLoadBalancers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvancedConfiguration`<sup>Required</sup> <a name="AdvancedConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.advancedConfiguration"></a>

```go
func AdvancedConfiguration() DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference">DataAwsccEcsServiceLoadBalancersAdvancedConfigurationOutputReference</a>

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.containerPort"></a>

```go
func ContainerPort() *f64
```

- *Type:* *f64

---

##### `LoadBalancerName`<sup>Required</sup> <a name="LoadBalancerName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.loadBalancerName"></a>

```go
func LoadBalancerName() *string
```

- *Type:* *string

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.targetGroupArn"></a>

```go
func TargetGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceLoadBalancers
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceLoadBalancers">DataAwsccEcsServiceLoadBalancers</a>

---


### DataAwsccEcsServiceMonitoringMetricConfigurationsList <a name="DataAwsccEcsServiceMonitoringMetricConfigurationsList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceMonitoringMetricConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsServiceMonitoringMetricConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference <a name="DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.property.metricNames">MetricNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.property.resolutionSeconds">ResolutionSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurations">DataAwsccEcsServiceMonitoringMetricConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricNames`<sup>Required</sup> <a name="MetricNames" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.property.metricNames"></a>

```go
func MetricNames() *[]*string
```

- *Type:* *[]*string

---

##### `ResolutionSeconds`<sup>Required</sup> <a name="ResolutionSeconds" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.property.resolutionSeconds"></a>

```go
func ResolutionSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceMonitoringMetricConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurations">DataAwsccEcsServiceMonitoringMetricConfigurations</a>

---


### DataAwsccEcsServiceMonitoringOutputReference <a name="DataAwsccEcsServiceMonitoringOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceMonitoringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceMonitoringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.property.metricConfigurations">MetricConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList">DataAwsccEcsServiceMonitoringMetricConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoring">DataAwsccEcsServiceMonitoring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricConfigurations`<sup>Required</sup> <a name="MetricConfigurations" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.property.metricConfigurations"></a>

```go
func MetricConfigurations() DataAwsccEcsServiceMonitoringMetricConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringMetricConfigurationsList">DataAwsccEcsServiceMonitoringMetricConfigurationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoringOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceMonitoring
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceMonitoring">DataAwsccEcsServiceMonitoring</a>

---


### DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference <a name="DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIp">AssignPublicIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration">DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIp"></a>

```go
func AssignPublicIp() *string
```

- *Type:* *string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration">DataAwsccEcsServiceNetworkConfigurationAwsvpcConfiguration</a>

---


### DataAwsccEcsServiceNetworkConfigurationOutputReference <a name="DataAwsccEcsServiceNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.property.awsvpcConfiguration">AwsvpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference">DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfiguration">DataAwsccEcsServiceNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsvpcConfiguration`<sup>Required</sup> <a name="AwsvpcConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.property.awsvpcConfiguration"></a>

```go
func AwsvpcConfiguration() DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference">DataAwsccEcsServiceNetworkConfigurationAwsvpcConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceNetworkConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceNetworkConfiguration">DataAwsccEcsServiceNetworkConfiguration</a>

---


### DataAwsccEcsServicePlacementConstraintsList <a name="DataAwsccEcsServicePlacementConstraintsList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServicePlacementConstraintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsServicePlacementConstraintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsServicePlacementConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsServicePlacementConstraintsOutputReference <a name="DataAwsccEcsServicePlacementConstraintsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServicePlacementConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsServicePlacementConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraints">DataAwsccEcsServicePlacementConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServicePlacementConstraints
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementConstraints">DataAwsccEcsServicePlacementConstraints</a>

---


### DataAwsccEcsServicePlacementStrategiesList <a name="DataAwsccEcsServicePlacementStrategiesList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServicePlacementStrategiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsServicePlacementStrategiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.get"></a>

```go
func Get(index *f64) DataAwsccEcsServicePlacementStrategiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsServicePlacementStrategiesOutputReference <a name="DataAwsccEcsServicePlacementStrategiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServicePlacementStrategiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsServicePlacementStrategiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategies">DataAwsccEcsServicePlacementStrategies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServicePlacementStrategies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServicePlacementStrategies">DataAwsccEcsServicePlacementStrategies</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.property.includeQueryParameters">IncludeQueryParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration">DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `IncludeQueryParameters`<sup>Required</sup> <a name="IncludeQueryParameters" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.property.includeQueryParameters"></a>

```go
func IncludeQueryParameters() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration">DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfiguration</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.logDriver">LogDriver</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.options">Options</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.secretOptions">SecretOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList">DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration">DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogDriver`<sup>Required</sup> <a name="LogDriver" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.logDriver"></a>

```go
func LogDriver() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.options"></a>

```go
func Options() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `SecretOptions`<sup>Required</sup> <a name="SecretOptions" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.secretOptions"></a>

```go
func SecretOptions() DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList">DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration">DataAwsccEcsServiceServiceConnectConfigurationLogConfiguration</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList <a name="DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.property.valueFrom">ValueFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions">DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.property.valueFrom"></a>

```go
func ValueFrom() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions">DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationSecretOptions</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceServiceConnectConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceServiceConnectConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.accessLogConfiguration">AccessLogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference">DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference">DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.services">Services</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList">DataAwsccEcsServiceServiceConnectConfigurationServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfiguration">DataAwsccEcsServiceServiceConnectConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLogConfiguration`<sup>Required</sup> <a name="AccessLogConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.accessLogConfiguration"></a>

```go
func AccessLogConfiguration() DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference">DataAwsccEcsServiceServiceConnectConfigurationAccessLogConfigurationOutputReference</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.logConfiguration"></a>

```go
func LogConfiguration() DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference">DataAwsccEcsServiceServiceConnectConfigurationLogConfigurationOutputReference</a>

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.services"></a>

```go
func Services() DataAwsccEcsServiceServiceConnectConfigurationServicesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList">DataAwsccEcsServiceServiceConnectConfigurationServicesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceServiceConnectConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfiguration">DataAwsccEcsServiceServiceConnectConfiguration</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.get"></a>

```go
func Get(index *f64) DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.testTrafficRules">TestTrafficRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `TestTrafficRules`<sup>Required</sup> <a name="TestTrafficRules" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.testTrafficRules"></a>

```go
func TestTrafficRules() DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliases</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.property.value"></a>

```go
func Value() DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeader</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.property.exact">Exact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.property.exact"></a>

```go
func Exact() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValueOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderValue</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.property.header">Header</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.property.header"></a>

```go
func Header() DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesHeaderOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesTestTrafficRules</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationServicesList <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceServiceConnectConfigurationServicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsServiceServiceConnectConfigurationServicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.get"></a>

```go
func Get(index *f64) DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.clientAliases">ClientAliases</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.discoveryName">DiscoveryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.ingressPortOverride">IngressPortOverride</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.timeout">Timeout</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.tls">Tls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServices">DataAwsccEcsServiceServiceConnectConfigurationServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientAliases`<sup>Required</sup> <a name="ClientAliases" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.clientAliases"></a>

```go
func ClientAliases() DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList">DataAwsccEcsServiceServiceConnectConfigurationServicesClientAliasesList</a>

---

##### `DiscoveryName`<sup>Required</sup> <a name="DiscoveryName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.discoveryName"></a>

```go
func DiscoveryName() *string
```

- *Type:* *string

---

##### `IngressPortOverride`<sup>Required</sup> <a name="IngressPortOverride" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.ingressPortOverride"></a>

```go
func IngressPortOverride() *f64
```

- *Type:* *f64

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.timeout"></a>

```go
func Timeout() DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference</a>

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.tls"></a>

```go
func Tls() DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceServiceConnectConfigurationServices
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServices">DataAwsccEcsServiceServiceConnectConfigurationServices</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.property.idleTimeoutSeconds">IdleTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.property.perRequestTimeoutSeconds">PerRequestTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout">DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdleTimeoutSeconds`<sup>Required</sup> <a name="IdleTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.property.idleTimeoutSeconds"></a>

```go
func IdleTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `PerRequestTimeoutSeconds`<sup>Required</sup> <a name="PerRequestTimeoutSeconds" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.property.perRequestTimeoutSeconds"></a>

```go
func PerRequestTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeoutOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout">DataAwsccEcsServiceServiceConnectConfigurationServicesTimeout</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.property.awsPcaAuthorityArn">AwsPcaAuthorityArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority">DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsPcaAuthorityArn`<sup>Required</sup> <a name="AwsPcaAuthorityArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.property.awsPcaAuthorityArn"></a>

```go
func AwsPcaAuthorityArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority">DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthority</a>

---


### DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference <a name="DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.issuerCertificateAuthority">IssuerCertificateAuthority</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTls">DataAwsccEcsServiceServiceConnectConfigurationServicesTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IssuerCertificateAuthority`<sup>Required</sup> <a name="IssuerCertificateAuthority" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.issuerCertificateAuthority"></a>

```go
func IssuerCertificateAuthority() DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference">DataAwsccEcsServiceServiceConnectConfigurationServicesTlsIssuerCertificateAuthorityOutputReference</a>

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTlsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceServiceConnectConfigurationServicesTls
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceConnectConfigurationServicesTls">DataAwsccEcsServiceServiceConnectConfigurationServicesTls</a>

---


### DataAwsccEcsServiceServiceRegistriesList <a name="DataAwsccEcsServiceServiceRegistriesList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceServiceRegistriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsServiceServiceRegistriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.get"></a>

```go
func Get(index *f64) DataAwsccEcsServiceServiceRegistriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsServiceServiceRegistriesOutputReference <a name="DataAwsccEcsServiceServiceRegistriesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceServiceRegistriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsServiceServiceRegistriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.registryArn">RegistryArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistries">DataAwsccEcsServiceServiceRegistries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.containerPort"></a>

```go
func ContainerPort() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `RegistryArn`<sup>Required</sup> <a name="RegistryArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.registryArn"></a>

```go
func RegistryArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceServiceRegistries
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceServiceRegistries">DataAwsccEcsServiceServiceRegistries</a>

---


### DataAwsccEcsServiceTagsList <a name="DataAwsccEcsServiceTagsList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsServiceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsServiceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsServiceTagsOutputReference <a name="DataAwsccEcsServiceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsServiceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTags">DataAwsccEcsServiceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceTags">DataAwsccEcsServiceTags</a>

---


### DataAwsccEcsServiceVolumeConfigurationsList <a name="DataAwsccEcsServiceVolumeConfigurationsList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceVolumeConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsServiceVolumeConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsServiceVolumeConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference <a name="DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.encrypted">Encrypted</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.filesystemType">FilesystemType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.sizeInGiB">SizeInGiB</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.tagSpecifications">TagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.volumeInitializationRate">VolumeInitializationRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.encrypted"></a>

```go
func Encrypted() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `FilesystemType`<sup>Required</sup> <a name="FilesystemType" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.filesystemType"></a>

```go
func FilesystemType() *string
```

- *Type:* *string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SizeInGiB`<sup>Required</sup> <a name="SizeInGiB" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.sizeInGiB"></a>

```go
func SizeInGiB() *f64
```

- *Type:* *f64

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `TagSpecifications`<sup>Required</sup> <a name="TagSpecifications" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.tagSpecifications"></a>

```go
func TagSpecifications() DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList</a>

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeInitializationRate`<sup>Required</sup> <a name="VolumeInitializationRate" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.volumeInitializationRate"></a>

```go
func VolumeInitializationRate() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolume</a>

---


### DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList <a name="DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference <a name="DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.propagateTags">PropagateTags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PropagateTags`<sup>Required</sup> <a name="PropagateTags" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.propagateTags"></a>

```go
func PropagateTags() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.tags"></a>

```go
func Tags() DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecifications</a>

---


### DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList <a name="DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference <a name="DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeTagSpecificationsTags</a>

---


### DataAwsccEcsServiceVolumeConfigurationsOutputReference <a name="DataAwsccEcsServiceVolumeConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceVolumeConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsServiceVolumeConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.property.managedEbsVolume">ManagedEbsVolume</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurations">DataAwsccEcsServiceVolumeConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManagedEbsVolume`<sup>Required</sup> <a name="ManagedEbsVolume" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.property.managedEbsVolume"></a>

```go
func ManagedEbsVolume() DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference">DataAwsccEcsServiceVolumeConfigurationsManagedEbsVolumeOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceVolumeConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVolumeConfigurations">DataAwsccEcsServiceVolumeConfigurations</a>

---


### DataAwsccEcsServiceVpcLatticeConfigurationsList <a name="DataAwsccEcsServiceVpcLatticeConfigurationsList" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceVpcLatticeConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEcsServiceVpcLatticeConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference <a name="DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccecsservice"

dataawsccecsservice.NewDataAwsccEcsServiceVpcLatticeConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurations">DataAwsccEcsServiceVpcLatticeConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.targetGroupArn"></a>

```go
func TargetGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEcsServiceVpcLatticeConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsService.DataAwsccEcsServiceVpcLatticeConfigurations">DataAwsccEcsServiceVpcLatticeConfigurations</a>

---




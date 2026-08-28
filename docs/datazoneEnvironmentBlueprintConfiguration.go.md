# `datazoneEnvironmentBlueprintConfiguration` Submodule <a name="`datazoneEnvironmentBlueprintConfiguration` Submodule" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneEnvironmentBlueprintConfiguration <a name="DatazoneEnvironmentBlueprintConfiguration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration awscc_datazone_environment_blueprint_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneenvironmentblueprintconfiguration"

datazoneenvironmentblueprintconfiguration.NewDatazoneEnvironmentBlueprintConfiguration(scope Construct, id *string, config DatazoneEnvironmentBlueprintConfigurationConfig) DatazoneEnvironmentBlueprintConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig">DatazoneEnvironmentBlueprintConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig">DatazoneEnvironmentBlueprintConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putProvisioningConfigurations">PutProvisioningConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putRegionalParameters">PutRegionalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetEnvironmentRolePermissionBoundary">ResetEnvironmentRolePermissionBoundary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetGlobalParameters">ResetGlobalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetManageAccessRoleArn">ResetManageAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetProvisioningConfigurations">ResetProvisioningConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetProvisioningRoleArn">ResetProvisioningRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetRegionalParameters">ResetRegionalParameters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProvisioningConfigurations` <a name="PutProvisioningConfigurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putProvisioningConfigurations"></a>

```go
func PutProvisioningConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putProvisioningConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRegionalParameters` <a name="PutRegionalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putRegionalParameters"></a>

```go
func PutRegionalParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.putRegionalParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnvironmentRolePermissionBoundary` <a name="ResetEnvironmentRolePermissionBoundary" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetEnvironmentRolePermissionBoundary"></a>

```go
func ResetEnvironmentRolePermissionBoundary()
```

##### `ResetGlobalParameters` <a name="ResetGlobalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetGlobalParameters"></a>

```go
func ResetGlobalParameters()
```

##### `ResetManageAccessRoleArn` <a name="ResetManageAccessRoleArn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetManageAccessRoleArn"></a>

```go
func ResetManageAccessRoleArn()
```

##### `ResetProvisioningConfigurations` <a name="ResetProvisioningConfigurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetProvisioningConfigurations"></a>

```go
func ResetProvisioningConfigurations()
```

##### `ResetProvisioningRoleArn` <a name="ResetProvisioningRoleArn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetProvisioningRoleArn"></a>

```go
func ResetProvisioningRoleArn()
```

##### `ResetRegionalParameters` <a name="ResetRegionalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetRegionalParameters"></a>

```go
func ResetRegionalParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneEnvironmentBlueprintConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneenvironmentblueprintconfiguration"

datazoneenvironmentblueprintconfiguration.DatazoneEnvironmentBlueprintConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneenvironmentblueprintconfiguration"

datazoneenvironmentblueprintconfiguration.DatazoneEnvironmentBlueprintConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneenvironmentblueprintconfiguration"

datazoneenvironmentblueprintconfiguration.DatazoneEnvironmentBlueprintConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneenvironmentblueprintconfiguration"

datazoneenvironmentblueprintconfiguration.DatazoneEnvironmentBlueprintConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DatazoneEnvironmentBlueprintConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatazoneEnvironmentBlueprintConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatazoneEnvironmentBlueprintConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneEnvironmentBlueprintConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintId">EnvironmentBlueprintId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningConfigurations">ProvisioningConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionalParameters">RegionalParameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList">DatazoneEnvironmentBlueprintConfigurationRegionalParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainIdentifierInput">DomainIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.enabledRegionsInput">EnabledRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdentifierInput">EnvironmentBlueprintIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentRolePermissionBoundaryInput">EnvironmentRolePermissionBoundaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.globalParametersInput">GlobalParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArnInput">ManageAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningConfigurationsInput">ProvisioningConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArnInput">ProvisioningRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionalParametersInput">RegionalParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainIdentifier">DomainIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.enabledRegions">EnabledRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdentifier">EnvironmentBlueprintIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentRolePermissionBoundary">EnvironmentRolePermissionBoundary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.globalParameters">GlobalParameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArn">ManageAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArn">ProvisioningRoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `EnvironmentBlueprintId`<sup>Required</sup> <a name="EnvironmentBlueprintId" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintId"></a>

```go
func EnvironmentBlueprintId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProvisioningConfigurations`<sup>Required</sup> <a name="ProvisioningConfigurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningConfigurations"></a>

```go
func ProvisioningConfigurations() DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList</a>

---

##### `RegionalParameters`<sup>Required</sup> <a name="RegionalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionalParameters"></a>

```go
func RegionalParameters() DatazoneEnvironmentBlueprintConfigurationRegionalParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList">DatazoneEnvironmentBlueprintConfigurationRegionalParametersList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `DomainIdentifierInput`<sup>Optional</sup> <a name="DomainIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainIdentifierInput"></a>

```go
func DomainIdentifierInput() *string
```

- *Type:* *string

---

##### `EnabledRegionsInput`<sup>Optional</sup> <a name="EnabledRegionsInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.enabledRegionsInput"></a>

```go
func EnabledRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvironmentBlueprintIdentifierInput`<sup>Optional</sup> <a name="EnvironmentBlueprintIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdentifierInput"></a>

```go
func EnvironmentBlueprintIdentifierInput() *string
```

- *Type:* *string

---

##### `EnvironmentRolePermissionBoundaryInput`<sup>Optional</sup> <a name="EnvironmentRolePermissionBoundaryInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentRolePermissionBoundaryInput"></a>

```go
func EnvironmentRolePermissionBoundaryInput() *string
```

- *Type:* *string

---

##### `GlobalParametersInput`<sup>Optional</sup> <a name="GlobalParametersInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.globalParametersInput"></a>

```go
func GlobalParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ManageAccessRoleArnInput`<sup>Optional</sup> <a name="ManageAccessRoleArnInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArnInput"></a>

```go
func ManageAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `ProvisioningConfigurationsInput`<sup>Optional</sup> <a name="ProvisioningConfigurationsInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningConfigurationsInput"></a>

```go
func ProvisioningConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `ProvisioningRoleArnInput`<sup>Optional</sup> <a name="ProvisioningRoleArnInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArnInput"></a>

```go
func ProvisioningRoleArnInput() *string
```

- *Type:* *string

---

##### `RegionalParametersInput`<sup>Optional</sup> <a name="RegionalParametersInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionalParametersInput"></a>

```go
func RegionalParametersInput() interface{}
```

- *Type:* interface{}

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainIdentifier"></a>

```go
func DomainIdentifier() *string
```

- *Type:* *string

---

##### `EnabledRegions`<sup>Required</sup> <a name="EnabledRegions" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.enabledRegions"></a>

```go
func EnabledRegions() *[]*string
```

- *Type:* *[]*string

---

##### `EnvironmentBlueprintIdentifier`<sup>Required</sup> <a name="EnvironmentBlueprintIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdentifier"></a>

```go
func EnvironmentBlueprintIdentifier() *string
```

- *Type:* *string

---

##### `EnvironmentRolePermissionBoundary`<sup>Required</sup> <a name="EnvironmentRolePermissionBoundary" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentRolePermissionBoundary"></a>

```go
func EnvironmentRolePermissionBoundary() *string
```

- *Type:* *string

---

##### `GlobalParameters`<sup>Required</sup> <a name="GlobalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.globalParameters"></a>

```go
func GlobalParameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ManageAccessRoleArn`<sup>Required</sup> <a name="ManageAccessRoleArn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArn"></a>

```go
func ManageAccessRoleArn() *string
```

- *Type:* *string

---

##### `ProvisioningRoleArn`<sup>Required</sup> <a name="ProvisioningRoleArn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArn"></a>

```go
func ProvisioningRoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneEnvironmentBlueprintConfigurationConfig <a name="DatazoneEnvironmentBlueprintConfigurationConfig" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneenvironmentblueprintconfiguration"

&datazoneenvironmentblueprintconfiguration.DatazoneEnvironmentBlueprintConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DomainIdentifier: *string,
	EnabledRegions: *[]*string,
	EnvironmentBlueprintIdentifier: *string,
	EnvironmentRolePermissionBoundary: *string,
	GlobalParameters: *map[string]*string,
	ManageAccessRoleArn: *string,
	ProvisioningConfigurations: interface{},
	ProvisioningRoleArn: *string,
	RegionalParameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.domainIdentifier">DomainIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#domain_identifier DatazoneEnvironmentBlueprintConfiguration#domain_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.enabledRegions">EnabledRegions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#enabled_regions DatazoneEnvironmentBlueprintConfiguration#enabled_regions}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.environmentBlueprintIdentifier">EnvironmentBlueprintIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#environment_blueprint_identifier DatazoneEnvironmentBlueprintConfiguration#environment_blueprint_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.environmentRolePermissionBoundary">EnvironmentRolePermissionBoundary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#environment_role_permission_boundary DatazoneEnvironmentBlueprintConfiguration#environment_role_permission_boundary}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.globalParameters">GlobalParameters</a></code> | <code>*map[string]*string</code> | Region-agnostic environment blueprint parameters. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.manageAccessRoleArn">ManageAccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#manage_access_role_arn DatazoneEnvironmentBlueprintConfiguration#manage_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioningConfigurations">ProvisioningConfigurations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_configurations DatazoneEnvironmentBlueprintConfiguration#provisioning_configurations}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioningRoleArn">ProvisioningRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_role_arn DatazoneEnvironmentBlueprintConfiguration#provisioning_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.regionalParameters">RegionalParameters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#regional_parameters DatazoneEnvironmentBlueprintConfiguration#regional_parameters}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.domainIdentifier"></a>

```go
DomainIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#domain_identifier DatazoneEnvironmentBlueprintConfiguration#domain_identifier}.

---

##### `EnabledRegions`<sup>Required</sup> <a name="EnabledRegions" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.enabledRegions"></a>

```go
EnabledRegions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#enabled_regions DatazoneEnvironmentBlueprintConfiguration#enabled_regions}.

---

##### `EnvironmentBlueprintIdentifier`<sup>Required</sup> <a name="EnvironmentBlueprintIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.environmentBlueprintIdentifier"></a>

```go
EnvironmentBlueprintIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#environment_blueprint_identifier DatazoneEnvironmentBlueprintConfiguration#environment_blueprint_identifier}.

---

##### `EnvironmentRolePermissionBoundary`<sup>Optional</sup> <a name="EnvironmentRolePermissionBoundary" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.environmentRolePermissionBoundary"></a>

```go
EnvironmentRolePermissionBoundary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#environment_role_permission_boundary DatazoneEnvironmentBlueprintConfiguration#environment_role_permission_boundary}.

---

##### `GlobalParameters`<sup>Optional</sup> <a name="GlobalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.globalParameters"></a>

```go
GlobalParameters *map[string]*string
```

- *Type:* *map[string]*string

Region-agnostic environment blueprint parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#global_parameters DatazoneEnvironmentBlueprintConfiguration#global_parameters}

---

##### `ManageAccessRoleArn`<sup>Optional</sup> <a name="ManageAccessRoleArn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.manageAccessRoleArn"></a>

```go
ManageAccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#manage_access_role_arn DatazoneEnvironmentBlueprintConfiguration#manage_access_role_arn}.

---

##### `ProvisioningConfigurations`<sup>Optional</sup> <a name="ProvisioningConfigurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioningConfigurations"></a>

```go
ProvisioningConfigurations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_configurations DatazoneEnvironmentBlueprintConfiguration#provisioning_configurations}.

---

##### `ProvisioningRoleArn`<sup>Optional</sup> <a name="ProvisioningRoleArn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioningRoleArn"></a>

```go
ProvisioningRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_role_arn DatazoneEnvironmentBlueprintConfiguration#provisioning_role_arn}.

---

##### `RegionalParameters`<sup>Optional</sup> <a name="RegionalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.regionalParameters"></a>

```go
RegionalParameters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#regional_parameters DatazoneEnvironmentBlueprintConfiguration#regional_parameters}.

---

### DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations <a name="DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneenvironmentblueprintconfiguration"

&datazoneenvironmentblueprintconfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations {
	LakeFormationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations.property.lakeFormationConfiguration">LakeFormationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#lake_formation_configuration DatazoneEnvironmentBlueprintConfiguration#lake_formation_configuration}. |

---

##### `LakeFormationConfiguration`<sup>Optional</sup> <a name="LakeFormationConfiguration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations.property.lakeFormationConfiguration"></a>

```go
LakeFormationConfiguration DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#lake_formation_configuration DatazoneEnvironmentBlueprintConfiguration#lake_formation_configuration}.

---

### DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration <a name="DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneenvironmentblueprintconfiguration"

&datazoneenvironmentblueprintconfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration {
	LocationRegistrationExcludeS3Locations: *[]*string,
	LocationRegistrationRole: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.property.locationRegistrationExcludeS3Locations">LocationRegistrationExcludeS3Locations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#location_registration_exclude_s3_locations DatazoneEnvironmentBlueprintConfiguration#location_registration_exclude_s3_locations}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.property.locationRegistrationRole">LocationRegistrationRole</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#location_registration_role DatazoneEnvironmentBlueprintConfiguration#location_registration_role}. |

---

##### `LocationRegistrationExcludeS3Locations`<sup>Optional</sup> <a name="LocationRegistrationExcludeS3Locations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.property.locationRegistrationExcludeS3Locations"></a>

```go
LocationRegistrationExcludeS3Locations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#location_registration_exclude_s3_locations DatazoneEnvironmentBlueprintConfiguration#location_registration_exclude_s3_locations}.

---

##### `LocationRegistrationRole`<sup>Optional</sup> <a name="LocationRegistrationRole" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.property.locationRegistrationRole"></a>

```go
LocationRegistrationRole *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#location_registration_role DatazoneEnvironmentBlueprintConfiguration#location_registration_role}.

---

### DatazoneEnvironmentBlueprintConfigurationRegionalParameters <a name="DatazoneEnvironmentBlueprintConfigurationRegionalParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneenvironmentblueprintconfiguration"

&datazoneenvironmentblueprintconfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters {
	Parameters: *map[string]*string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#parameters DatazoneEnvironmentBlueprintConfiguration#parameters}. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#region DatazoneEnvironmentBlueprintConfiguration#region}. |

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#parameters DatazoneEnvironmentBlueprintConfiguration#parameters}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParameters.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_blueprint_configuration#region DatazoneEnvironmentBlueprintConfiguration#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference <a name="DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneenvironmentblueprintconfiguration"

datazoneenvironmentblueprintconfiguration.NewDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resetLocationRegistrationExcludeS3Locations">ResetLocationRegistrationExcludeS3Locations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resetLocationRegistrationRole">ResetLocationRegistrationRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocationRegistrationExcludeS3Locations` <a name="ResetLocationRegistrationExcludeS3Locations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resetLocationRegistrationExcludeS3Locations"></a>

```go
func ResetLocationRegistrationExcludeS3Locations()
```

##### `ResetLocationRegistrationRole` <a name="ResetLocationRegistrationRole" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resetLocationRegistrationRole"></a>

```go
func ResetLocationRegistrationRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationExcludeS3LocationsInput">LocationRegistrationExcludeS3LocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationRoleInput">LocationRegistrationRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationExcludeS3Locations">LocationRegistrationExcludeS3Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationRole">LocationRegistrationRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocationRegistrationExcludeS3LocationsInput`<sup>Optional</sup> <a name="LocationRegistrationExcludeS3LocationsInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationExcludeS3LocationsInput"></a>

```go
func LocationRegistrationExcludeS3LocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LocationRegistrationRoleInput`<sup>Optional</sup> <a name="LocationRegistrationRoleInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationRoleInput"></a>

```go
func LocationRegistrationRoleInput() *string
```

- *Type:* *string

---

##### `LocationRegistrationExcludeS3Locations`<sup>Required</sup> <a name="LocationRegistrationExcludeS3Locations" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationExcludeS3Locations"></a>

```go
func LocationRegistrationExcludeS3Locations() *[]*string
```

- *Type:* *[]*string

---

##### `LocationRegistrationRole`<sup>Required</sup> <a name="LocationRegistrationRole" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationRole"></a>

```go
func LocationRegistrationRole() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList <a name="DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneenvironmentblueprintconfiguration"

datazoneenvironmentblueprintconfiguration.NewDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.get"></a>

```go
func Get(index *f64) DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference <a name="DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneenvironmentblueprintconfiguration"

datazoneenvironmentblueprintconfiguration.NewDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.putLakeFormationConfiguration">PutLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resetLakeFormationConfiguration">ResetLakeFormationConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLakeFormationConfiguration` <a name="PutLakeFormationConfiguration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.putLakeFormationConfiguration"></a>

```go
func PutLakeFormationConfiguration(value DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.putLakeFormationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a>

---

##### `ResetLakeFormationConfiguration` <a name="ResetLakeFormationConfiguration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resetLakeFormationConfiguration"></a>

```go
func ResetLakeFormationConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.lakeFormationConfiguration">LakeFormationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.lakeFormationConfigurationInput">LakeFormationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LakeFormationConfiguration`<sup>Required</sup> <a name="LakeFormationConfiguration" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.lakeFormationConfiguration"></a>

```go
func LakeFormationConfiguration() DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference">DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference</a>

---

##### `LakeFormationConfigurationInput`<sup>Optional</sup> <a name="LakeFormationConfigurationInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.lakeFormationConfigurationInput"></a>

```go
func LakeFormationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneEnvironmentBlueprintConfigurationRegionalParametersList <a name="DatazoneEnvironmentBlueprintConfigurationRegionalParametersList" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneenvironmentblueprintconfiguration"

datazoneenvironmentblueprintconfiguration.NewDatazoneEnvironmentBlueprintConfigurationRegionalParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatazoneEnvironmentBlueprintConfigurationRegionalParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.get"></a>

```go
func Get(index *f64) DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference <a name="DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneenvironmentblueprintconfiguration"

datazoneenvironmentblueprintconfiguration.NewDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




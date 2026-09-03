# `appintegrationsDataIntegration` Submodule <a name="`appintegrationsDataIntegration` Submodule" id="@cdktn/provider-awscc.appintegrationsDataIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppintegrationsDataIntegration <a name="AppintegrationsDataIntegration" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_data_integration awscc_appintegrations_data_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsdataintegration"

appintegrationsdataintegration.NewAppintegrationsDataIntegration(scope Construct, id *string, config AppintegrationsDataIntegrationConfig) AppintegrationsDataIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig">AppintegrationsDataIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig">AppintegrationsDataIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putFileConfiguration">PutFileConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putScheduleConfig">PutScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetFileConfiguration">ResetFileConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetObjectConfiguration">ResetObjectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetScheduleConfig">ResetScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFileConfiguration` <a name="PutFileConfiguration" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putFileConfiguration"></a>

```go
func PutFileConfiguration(value AppintegrationsDataIntegrationFileConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putFileConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration">AppintegrationsDataIntegrationFileConfiguration</a>

---

##### `PutScheduleConfig` <a name="PutScheduleConfig" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putScheduleConfig"></a>

```go
func PutScheduleConfig(value AppintegrationsDataIntegrationScheduleConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putScheduleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFileConfiguration` <a name="ResetFileConfiguration" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetFileConfiguration"></a>

```go
func ResetFileConfiguration()
```

##### `ResetObjectConfiguration` <a name="ResetObjectConfiguration" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetObjectConfiguration"></a>

```go
func ResetObjectConfiguration()
```

##### `ResetScheduleConfig` <a name="ResetScheduleConfig" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetScheduleConfig"></a>

```go
func ResetScheduleConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppintegrationsDataIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsdataintegration"

appintegrationsdataintegration.AppintegrationsDataIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsdataintegration"

appintegrationsdataintegration.AppintegrationsDataIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsdataintegration"

appintegrationsdataintegration.AppintegrationsDataIntegration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsdataintegration"

appintegrationsdataintegration.AppintegrationsDataIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AppintegrationsDataIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppintegrationsDataIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppintegrationsDataIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_data_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AppintegrationsDataIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.dataIntegrationArn">DataIntegrationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.dataIntegrationId">DataIntegrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.fileConfiguration">FileConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference">AppintegrationsDataIntegrationFileConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.scheduleConfig">ScheduleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference">AppintegrationsDataIntegrationScheduleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList">AppintegrationsDataIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.fileConfigurationInput">FileConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.objectConfigurationInput">ObjectConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.scheduleConfigInput">ScheduleConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.sourceUriInput">SourceUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.objectConfiguration">ObjectConfiguration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.sourceUri">SourceUri</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataIntegrationArn`<sup>Required</sup> <a name="DataIntegrationArn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.dataIntegrationArn"></a>

```go
func DataIntegrationArn() *string
```

- *Type:* *string

---

##### `DataIntegrationId`<sup>Required</sup> <a name="DataIntegrationId" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.dataIntegrationId"></a>

```go
func DataIntegrationId() *string
```

- *Type:* *string

---

##### `FileConfiguration`<sup>Required</sup> <a name="FileConfiguration" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.fileConfiguration"></a>

```go
func FileConfiguration() AppintegrationsDataIntegrationFileConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference">AppintegrationsDataIntegrationFileConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ScheduleConfig`<sup>Required</sup> <a name="ScheduleConfig" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.scheduleConfig"></a>

```go
func ScheduleConfig() AppintegrationsDataIntegrationScheduleConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference">AppintegrationsDataIntegrationScheduleConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tags"></a>

```go
func Tags() AppintegrationsDataIntegrationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList">AppintegrationsDataIntegrationTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FileConfigurationInput`<sup>Optional</sup> <a name="FileConfigurationInput" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.fileConfigurationInput"></a>

```go
func FileConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ObjectConfigurationInput`<sup>Optional</sup> <a name="ObjectConfigurationInput" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.objectConfigurationInput"></a>

```go
func ObjectConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduleConfigInput`<sup>Optional</sup> <a name="ScheduleConfigInput" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.scheduleConfigInput"></a>

```go
func ScheduleConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SourceUriInput`<sup>Optional</sup> <a name="SourceUriInput" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.sourceUriInput"></a>

```go
func SourceUriInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectConfiguration`<sup>Required</sup> <a name="ObjectConfiguration" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.objectConfiguration"></a>

```go
func ObjectConfiguration() interface{}
```

- *Type:* interface{}

---

##### `SourceUri`<sup>Required</sup> <a name="SourceUri" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.sourceUri"></a>

```go
func SourceUri() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppintegrationsDataIntegrationConfig <a name="AppintegrationsDataIntegrationConfig" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsdataintegration"

&appintegrationsdataintegration.AppintegrationsDataIntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	KmsKey: *string,
	Name: *string,
	SourceUri: *string,
	Description: *string,
	FileConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration,
	ObjectConfiguration: interface{},
	ScheduleConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The KMS key of the data integration. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.name">Name</a></code> | <code>*string</code> | The name of the data integration. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.sourceUri">SourceUri</a></code> | <code>*string</code> | The URI of the data source. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.description">Description</a></code> | <code>*string</code> | The data integration description. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.fileConfiguration">FileConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration">AppintegrationsDataIntegrationFileConfiguration</a></code> | The configuration for what files should be pulled from the source. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.objectConfiguration">ObjectConfiguration</a></code> | <code>interface{}</code> | The configuration for what data should be pulled from the source. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.scheduleConfig">ScheduleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a></code> | The name of the data and how often it should be pulled from the source. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags (keys and values) associated with the data integration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The KMS key of the data integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_data_integration#kms_key AppintegrationsDataIntegration#kms_key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the data integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_data_integration#name AppintegrationsDataIntegration#name}

---

##### `SourceUri`<sup>Required</sup> <a name="SourceUri" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.sourceUri"></a>

```go
SourceUri *string
```

- *Type:* *string

The URI of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_data_integration#source_uri AppintegrationsDataIntegration#source_uri}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The data integration description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_data_integration#description AppintegrationsDataIntegration#description}

---

##### `FileConfiguration`<sup>Optional</sup> <a name="FileConfiguration" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.fileConfiguration"></a>

```go
FileConfiguration AppintegrationsDataIntegrationFileConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration">AppintegrationsDataIntegrationFileConfiguration</a>

The configuration for what files should be pulled from the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_data_integration#file_configuration AppintegrationsDataIntegration#file_configuration}

---

##### `ObjectConfiguration`<sup>Optional</sup> <a name="ObjectConfiguration" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.objectConfiguration"></a>

```go
ObjectConfiguration interface{}
```

- *Type:* interface{}

The configuration for what data should be pulled from the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_data_integration#object_configuration AppintegrationsDataIntegration#object_configuration}

---

##### `ScheduleConfig`<sup>Optional</sup> <a name="ScheduleConfig" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.scheduleConfig"></a>

```go
ScheduleConfig AppintegrationsDataIntegrationScheduleConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig">AppintegrationsDataIntegrationScheduleConfig</a>

The name of the data and how often it should be pulled from the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_data_integration#schedule_config AppintegrationsDataIntegration#schedule_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags (keys and values) associated with the data integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_data_integration#tags AppintegrationsDataIntegration#tags}

---

### AppintegrationsDataIntegrationFileConfiguration <a name="AppintegrationsDataIntegrationFileConfiguration" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsdataintegration"

&appintegrationsdataintegration.AppintegrationsDataIntegrationFileConfiguration {
	Filters: interface{},
	Folders: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration.property.filters">Filters</a></code> | <code>interface{}</code> | Restrictions for what files should be pulled from the source. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration.property.folders">Folders</a></code> | <code>*[]*string</code> | Identifiers for the source folders to pull all files from recursively. |

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration.property.filters"></a>

```go
Filters interface{}
```

- *Type:* interface{}

Restrictions for what files should be pulled from the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_data_integration#filters AppintegrationsDataIntegration#filters}

---

##### `Folders`<sup>Optional</sup> <a name="Folders" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfiguration.property.folders"></a>

```go
Folders *[]*string
```

- *Type:* *[]*string

Identifiers for the source folders to pull all files from recursively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_data_integration#folders AppintegrationsDataIntegration#folders}

---

### AppintegrationsDataIntegrationScheduleConfig <a name="AppintegrationsDataIntegrationScheduleConfig" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsdataintegration"

&appintegrationsdataintegration.AppintegrationsDataIntegrationScheduleConfig {
	FirstExecutionFrom: *string,
	Object: *string,
	ScheduleExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.firstExecutionFrom">FirstExecutionFrom</a></code> | <code>*string</code> | The start date for objects to import in the first flow run. Epoch or ISO timestamp format is supported. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.object">Object</a></code> | <code>*string</code> | The name of the object to pull from the data source. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | How often the data should be pulled from data source. |

---

##### `FirstExecutionFrom`<sup>Optional</sup> <a name="FirstExecutionFrom" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.firstExecutionFrom"></a>

```go
FirstExecutionFrom *string
```

- *Type:* *string

The start date for objects to import in the first flow run. Epoch or ISO timestamp format is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_data_integration#first_execution_from AppintegrationsDataIntegration#first_execution_from}

---

##### `Object`<sup>Optional</sup> <a name="Object" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.object"></a>

```go
Object *string
```

- *Type:* *string

The name of the object to pull from the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_data_integration#object AppintegrationsDataIntegration#object}

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfig.property.scheduleExpression"></a>

```go
ScheduleExpression *string
```

- *Type:* *string

How often the data should be pulled from data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_data_integration#schedule_expression AppintegrationsDataIntegration#schedule_expression}

---

### AppintegrationsDataIntegrationTags <a name="AppintegrationsDataIntegrationTags" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsdataintegration"

&appintegrationsdataintegration.AppintegrationsDataIntegrationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags.property.key">Key</a></code> | <code>*string</code> | A key to identify the tag. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags.property.value">Value</a></code> | <code>*string</code> | Corresponding tag value for the key. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

A key to identify the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_data_integration#key AppintegrationsDataIntegration#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Corresponding tag value for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_data_integration#value AppintegrationsDataIntegration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppintegrationsDataIntegrationFileConfigurationOutputReference <a name="AppintegrationsDataIntegrationFileConfigurationOutputReference" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsdataintegration"

appintegrationsdataintegration.NewAppintegrationsDataIntegrationFileConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppintegrationsDataIntegrationFileConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.resetFolders">ResetFolders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.resetFilters"></a>

```go
func ResetFilters()
```

##### `ResetFolders` <a name="ResetFolders" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.resetFolders"></a>

```go
func ResetFolders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.filtersInput">FiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.foldersInput">FoldersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.filters">Filters</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.folders">Folders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.filtersInput"></a>

```go
func FiltersInput() interface{}
```

- *Type:* interface{}

---

##### `FoldersInput`<sup>Optional</sup> <a name="FoldersInput" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.foldersInput"></a>

```go
func FoldersInput() *[]*string
```

- *Type:* *[]*string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.filters"></a>

```go
func Filters() interface{}
```

- *Type:* interface{}

---

##### `Folders`<sup>Required</sup> <a name="Folders" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.folders"></a>

```go
func Folders() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationFileConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppintegrationsDataIntegrationScheduleConfigOutputReference <a name="AppintegrationsDataIntegrationScheduleConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsdataintegration"

appintegrationsdataintegration.NewAppintegrationsDataIntegrationScheduleConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppintegrationsDataIntegrationScheduleConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resetFirstExecutionFrom">ResetFirstExecutionFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resetObject">ResetObject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFirstExecutionFrom` <a name="ResetFirstExecutionFrom" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resetFirstExecutionFrom"></a>

```go
func ResetFirstExecutionFrom()
```

##### `ResetObject` <a name="ResetObject" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resetObject"></a>

```go
func ResetObject()
```

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.resetScheduleExpression"></a>

```go
func ResetScheduleExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFromInput">FirstExecutionFromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFrom">FirstExecutionFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FirstExecutionFromInput`<sup>Optional</sup> <a name="FirstExecutionFromInput" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFromInput"></a>

```go
func FirstExecutionFromInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpressionInput"></a>

```go
func ScheduleExpressionInput() *string
```

- *Type:* *string

---

##### `FirstExecutionFrom`<sup>Required</sup> <a name="FirstExecutionFrom" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFrom"></a>

```go
func FirstExecutionFrom() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationScheduleConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppintegrationsDataIntegrationTagsList <a name="AppintegrationsDataIntegrationTagsList" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsdataintegration"

appintegrationsdataintegration.NewAppintegrationsDataIntegrationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppintegrationsDataIntegrationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.get"></a>

```go
func Get(index *f64) AppintegrationsDataIntegrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppintegrationsDataIntegrationTagsOutputReference <a name="AppintegrationsDataIntegrationTagsOutputReference" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsdataintegration"

appintegrationsdataintegration.NewAppintegrationsDataIntegrationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppintegrationsDataIntegrationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appintegrationsDataIntegration.AppintegrationsDataIntegrationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




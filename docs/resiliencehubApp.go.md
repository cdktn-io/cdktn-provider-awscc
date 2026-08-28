# `resiliencehubApp` Submodule <a name="`resiliencehubApp` Submodule" id="@cdktn/provider-awscc.resiliencehubApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResiliencehubApp <a name="ResiliencehubApp" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app awscc_resiliencehub_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubapp"

resiliencehubapp.NewResiliencehubApp(scope Construct, id *string, config ResiliencehubAppConfig) ResiliencehubApp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig">ResiliencehubAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig">ResiliencehubAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putEventSubscriptions">PutEventSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putPermissionModel">PutPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putResourceMappings">PutResourceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetAppAssessmentSchedule">ResetAppAssessmentSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetEventSubscriptions">ResetEventSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetPermissionModel">ResetPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetResiliencyPolicyArn">ResetResiliencyPolicyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventSubscriptions` <a name="PutEventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putEventSubscriptions"></a>

```go
func PutEventSubscriptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putEventSubscriptions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPermissionModel` <a name="PutPermissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putPermissionModel"></a>

```go
func PutPermissionModel(value ResiliencehubAppPermissionModel)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putPermissionModel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a>

---

##### `PutResourceMappings` <a name="PutResourceMappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putResourceMappings"></a>

```go
func PutResourceMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.putResourceMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAppAssessmentSchedule` <a name="ResetAppAssessmentSchedule" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetAppAssessmentSchedule"></a>

```go
func ResetAppAssessmentSchedule()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEventSubscriptions` <a name="ResetEventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetEventSubscriptions"></a>

```go
func ResetEventSubscriptions()
```

##### `ResetPermissionModel` <a name="ResetPermissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetPermissionModel"></a>

```go
func ResetPermissionModel()
```

##### `ResetResiliencyPolicyArn` <a name="ResetResiliencyPolicyArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetResiliencyPolicyArn"></a>

```go
func ResetResiliencyPolicyArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ResiliencehubApp resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubapp"

resiliencehubapp.ResiliencehubApp_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubapp"

resiliencehubapp.ResiliencehubApp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubapp"

resiliencehubapp.ResiliencehubApp_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubapp"

resiliencehubapp.ResiliencehubApp_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ResiliencehubApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ResiliencehubApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ResiliencehubApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ResiliencehubApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appArn">AppArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.driftStatus">DriftStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.eventSubscriptions">EventSubscriptions</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList">ResiliencehubAppEventSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.permissionModel">PermissionModel</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference">ResiliencehubAppPermissionModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resourceMappings">ResourceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList">ResiliencehubAppResourceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appAssessmentScheduleInput">AppAssessmentScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appTemplateBodyInput">AppTemplateBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.eventSubscriptionsInput">EventSubscriptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.permissionModelInput">PermissionModelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resiliencyPolicyArnInput">ResiliencyPolicyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resourceMappingsInput">ResourceMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appAssessmentSchedule">AppAssessmentSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appTemplateBody">AppTemplateBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resiliencyPolicyArn">ResiliencyPolicyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppArn`<sup>Required</sup> <a name="AppArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appArn"></a>

```go
func AppArn() *string
```

- *Type:* *string

---

##### `DriftStatus`<sup>Required</sup> <a name="DriftStatus" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.driftStatus"></a>

```go
func DriftStatus() *string
```

- *Type:* *string

---

##### `EventSubscriptions`<sup>Required</sup> <a name="EventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.eventSubscriptions"></a>

```go
func EventSubscriptions() ResiliencehubAppEventSubscriptionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList">ResiliencehubAppEventSubscriptionsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PermissionModel`<sup>Required</sup> <a name="PermissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.permissionModel"></a>

```go
func PermissionModel() ResiliencehubAppPermissionModelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference">ResiliencehubAppPermissionModelOutputReference</a>

---

##### `ResourceMappings`<sup>Required</sup> <a name="ResourceMappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resourceMappings"></a>

```go
func ResourceMappings() ResiliencehubAppResourceMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList">ResiliencehubAppResourceMappingsList</a>

---

##### `AppAssessmentScheduleInput`<sup>Optional</sup> <a name="AppAssessmentScheduleInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appAssessmentScheduleInput"></a>

```go
func AppAssessmentScheduleInput() *string
```

- *Type:* *string

---

##### `AppTemplateBodyInput`<sup>Optional</sup> <a name="AppTemplateBodyInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appTemplateBodyInput"></a>

```go
func AppTemplateBodyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EventSubscriptionsInput`<sup>Optional</sup> <a name="EventSubscriptionsInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.eventSubscriptionsInput"></a>

```go
func EventSubscriptionsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PermissionModelInput`<sup>Optional</sup> <a name="PermissionModelInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.permissionModelInput"></a>

```go
func PermissionModelInput() interface{}
```

- *Type:* interface{}

---

##### `ResiliencyPolicyArnInput`<sup>Optional</sup> <a name="ResiliencyPolicyArnInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resiliencyPolicyArnInput"></a>

```go
func ResiliencyPolicyArnInput() *string
```

- *Type:* *string

---

##### `ResourceMappingsInput`<sup>Optional</sup> <a name="ResourceMappingsInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resourceMappingsInput"></a>

```go
func ResourceMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AppAssessmentSchedule`<sup>Required</sup> <a name="AppAssessmentSchedule" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appAssessmentSchedule"></a>

```go
func AppAssessmentSchedule() *string
```

- *Type:* *string

---

##### `AppTemplateBody`<sup>Required</sup> <a name="AppTemplateBody" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.appTemplateBody"></a>

```go
func AppTemplateBody() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResiliencyPolicyArn`<sup>Required</sup> <a name="ResiliencyPolicyArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.resiliencyPolicyArn"></a>

```go
func ResiliencyPolicyArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubApp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ResiliencehubAppConfig <a name="ResiliencehubAppConfig" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubapp"

&resiliencehubapp.ResiliencehubAppConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AppTemplateBody: *string,
	Name: *string,
	ResourceMappings: interface{},
	AppAssessmentSchedule: *string,
	Description: *string,
	EventSubscriptions: interface{},
	PermissionModel: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.resiliencehubApp.ResiliencehubAppPermissionModel,
	ResiliencyPolicyArn: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.appTemplateBody">AppTemplateBody</a></code> | <code>*string</code> | A string containing full ResilienceHub app template body. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.name">Name</a></code> | <code>*string</code> | Name of the app. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.resourceMappings">ResourceMappings</a></code> | <code>interface{}</code> | An array of ResourceMapping objects. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.appAssessmentSchedule">AppAssessmentSchedule</a></code> | <code>*string</code> | Assessment execution schedule. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.description">Description</a></code> | <code>*string</code> | App description. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.eventSubscriptions">EventSubscriptions</a></code> | <code>interface{}</code> | The list of events you would like to subscribe and get notification for. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.permissionModel">PermissionModel</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a></code> | Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.resiliencyPolicyArn">ResiliencyPolicyArn</a></code> | <code>*string</code> | Amazon Resource Name (ARN) of the Resiliency Policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#tags ResiliencehubApp#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppTemplateBody`<sup>Required</sup> <a name="AppTemplateBody" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.appTemplateBody"></a>

```go
AppTemplateBody *string
```

- *Type:* *string

A string containing full ResilienceHub app template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#app_template_body ResiliencehubApp#app_template_body}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#name ResiliencehubApp#name}

---

##### `ResourceMappings`<sup>Required</sup> <a name="ResourceMappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.resourceMappings"></a>

```go
ResourceMappings interface{}
```

- *Type:* interface{}

An array of ResourceMapping objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#resource_mappings ResiliencehubApp#resource_mappings}

---

##### `AppAssessmentSchedule`<sup>Optional</sup> <a name="AppAssessmentSchedule" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.appAssessmentSchedule"></a>

```go
AppAssessmentSchedule *string
```

- *Type:* *string

Assessment execution schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#app_assessment_schedule ResiliencehubApp#app_assessment_schedule}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

App description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#description ResiliencehubApp#description}

---

##### `EventSubscriptions`<sup>Optional</sup> <a name="EventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.eventSubscriptions"></a>

```go
EventSubscriptions interface{}
```

- *Type:* interface{}

The list of events you would like to subscribe and get notification for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#event_subscriptions ResiliencehubApp#event_subscriptions}

---

##### `PermissionModel`<sup>Optional</sup> <a name="PermissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.permissionModel"></a>

```go
PermissionModel ResiliencehubAppPermissionModel
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel">ResiliencehubAppPermissionModel</a>

Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#permission_model ResiliencehubApp#permission_model}

---

##### `ResiliencyPolicyArn`<sup>Optional</sup> <a name="ResiliencyPolicyArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.resiliencyPolicyArn"></a>

```go
ResiliencyPolicyArn *string
```

- *Type:* *string

Amazon Resource Name (ARN) of the Resiliency Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#resiliency_policy_arn ResiliencehubApp#resiliency_policy_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#tags ResiliencehubApp#tags}.

---

### ResiliencehubAppEventSubscriptions <a name="ResiliencehubAppEventSubscriptions" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubapp"

&resiliencehubapp.ResiliencehubAppEventSubscriptions {
	EventType: *string,
	Name: *string,
	SnsTopicArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.eventType">EventType</a></code> | <code>*string</code> | The type of event you would like to subscribe and get notification for. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.name">Name</a></code> | <code>*string</code> | Unique name to identify an event subscription. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic. |

---

##### `EventType`<sup>Optional</sup> <a name="EventType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.eventType"></a>

```go
EventType *string
```

- *Type:* *string

The type of event you would like to subscribe and get notification for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#event_type ResiliencehubApp#event_type}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.name"></a>

```go
Name *string
```

- *Type:* *string

Unique name to identify an event subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#name ResiliencehubApp#name}

---

##### `SnsTopicArn`<sup>Optional</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptions.property.snsTopicArn"></a>

```go
SnsTopicArn *string
```

- *Type:* *string

Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#sns_topic_arn ResiliencehubApp#sns_topic_arn}

---

### ResiliencehubAppPermissionModel <a name="ResiliencehubAppPermissionModel" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubapp"

&resiliencehubapp.ResiliencehubAppPermissionModel {
	CrossAccountRoleArns: *[]*string,
	InvokerRoleName: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.crossAccountRoleArns">CrossAccountRoleArns</a></code> | <code>*[]*string</code> | Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.invokerRoleName">InvokerRoleName</a></code> | <code>*string</code> | Existing AWS IAM role name in the primary AWS account that will be assumed by AWS Resilience Hub Service Principle to obtain a read-only access to your application resources while running an assessment. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.type">Type</a></code> | <code>*string</code> | Defines how AWS Resilience Hub scans your resources. |

---

##### `CrossAccountRoleArns`<sup>Optional</sup> <a name="CrossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.crossAccountRoleArns"></a>

```go
CrossAccountRoleArns *[]*string
```

- *Type:* *[]*string

Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts.

These ARNs are used for querying purposes while importing resources and assessing your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#cross_account_role_arns ResiliencehubApp#cross_account_role_arns}

---

##### `InvokerRoleName`<sup>Optional</sup> <a name="InvokerRoleName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.invokerRoleName"></a>

```go
InvokerRoleName *string
```

- *Type:* *string

Existing AWS IAM role name in the primary AWS account that will be assumed by AWS Resilience Hub Service Principle to obtain a read-only access to your application resources while running an assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#invoker_role_name ResiliencehubApp#invoker_role_name}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModel.property.type"></a>

```go
Type *string
```

- *Type:* *string

Defines how AWS Resilience Hub scans your resources.

It can scan for the resources by using a pre-existing role in your AWS account, or by using the credentials of the current IAM user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#type ResiliencehubApp#type}

---

### ResiliencehubAppResourceMappings <a name="ResiliencehubAppResourceMappings" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubapp"

&resiliencehubapp.ResiliencehubAppResourceMappings {
	MappingType: *string,
	PhysicalResourceId: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId,
	EksSourceName: *string,
	LogicalStackName: *string,
	ResourceName: *string,
	TerraformSourceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.mappingType">MappingType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#mapping_type ResiliencehubApp#mapping_type}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.physicalResourceId">PhysicalResourceId</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#physical_resource_id ResiliencehubApp#physical_resource_id}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.eksSourceName">EksSourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#eks_source_name ResiliencehubApp#eks_source_name}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.logicalStackName">LogicalStackName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#logical_stack_name ResiliencehubApp#logical_stack_name}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.resourceName">ResourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#resource_name ResiliencehubApp#resource_name}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.terraformSourceName">TerraformSourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#terraform_source_name ResiliencehubApp#terraform_source_name}. |

---

##### `MappingType`<sup>Required</sup> <a name="MappingType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.mappingType"></a>

```go
MappingType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#mapping_type ResiliencehubApp#mapping_type}.

---

##### `PhysicalResourceId`<sup>Required</sup> <a name="PhysicalResourceId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.physicalResourceId"></a>

```go
PhysicalResourceId ResiliencehubAppResourceMappingsPhysicalResourceId
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#physical_resource_id ResiliencehubApp#physical_resource_id}.

---

##### `EksSourceName`<sup>Optional</sup> <a name="EksSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.eksSourceName"></a>

```go
EksSourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#eks_source_name ResiliencehubApp#eks_source_name}.

---

##### `LogicalStackName`<sup>Optional</sup> <a name="LogicalStackName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.logicalStackName"></a>

```go
LogicalStackName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#logical_stack_name ResiliencehubApp#logical_stack_name}.

---

##### `ResourceName`<sup>Optional</sup> <a name="ResourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.resourceName"></a>

```go
ResourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#resource_name ResiliencehubApp#resource_name}.

---

##### `TerraformSourceName`<sup>Optional</sup> <a name="TerraformSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappings.property.terraformSourceName"></a>

```go
TerraformSourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#terraform_source_name ResiliencehubApp#terraform_source_name}.

---

### ResiliencehubAppResourceMappingsPhysicalResourceId <a name="ResiliencehubAppResourceMappingsPhysicalResourceId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubapp"

&resiliencehubapp.ResiliencehubAppResourceMappingsPhysicalResourceId {
	Identifier: *string,
	Type: *string,
	AwsAccountId: *string,
	AwsRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#identifier ResiliencehubApp#identifier}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#type ResiliencehubApp#type}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#aws_account_id ResiliencehubApp#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#aws_region ResiliencehubApp#aws_region}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#identifier ResiliencehubApp#identifier}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#type ResiliencehubApp#type}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#aws_account_id ResiliencehubApp#aws_account_id}.

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId.property.awsRegion"></a>

```go
AwsRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehub_app#aws_region ResiliencehubApp#aws_region}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResiliencehubAppEventSubscriptionsList <a name="ResiliencehubAppEventSubscriptionsList" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubapp"

resiliencehubapp.NewResiliencehubAppEventSubscriptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ResiliencehubAppEventSubscriptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.get"></a>

```go
func Get(index *f64) ResiliencehubAppEventSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResiliencehubAppEventSubscriptionsOutputReference <a name="ResiliencehubAppEventSubscriptionsOutputReference" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubapp"

resiliencehubapp.NewResiliencehubAppEventSubscriptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ResiliencehubAppEventSubscriptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetEventType">ResetEventType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetSnsTopicArn">ResetSnsTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventType` <a name="ResetEventType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetEventType"></a>

```go
func ResetEventType()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetSnsTopicArn` <a name="ResetSnsTopicArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.resetSnsTopicArn"></a>

```go
func ResetSnsTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.eventTypeInput"></a>

```go
func EventTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArnInput"></a>

```go
func SnsTopicArnInput() *string
```

- *Type:* *string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArn"></a>

```go
func SnsTopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppEventSubscriptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResiliencehubAppPermissionModelOutputReference <a name="ResiliencehubAppPermissionModelOutputReference" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubapp"

resiliencehubapp.NewResiliencehubAppPermissionModelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResiliencehubAppPermissionModelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetCrossAccountRoleArns">ResetCrossAccountRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetInvokerRoleName">ResetInvokerRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCrossAccountRoleArns` <a name="ResetCrossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetCrossAccountRoleArns"></a>

```go
func ResetCrossAccountRoleArns()
```

##### `ResetInvokerRoleName` <a name="ResetInvokerRoleName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetInvokerRoleName"></a>

```go
func ResetInvokerRoleName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArnsInput">CrossAccountRoleArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.invokerRoleNameInput">InvokerRoleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArns">CrossAccountRoleArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.invokerRoleName">InvokerRoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrossAccountRoleArnsInput`<sup>Optional</sup> <a name="CrossAccountRoleArnsInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArnsInput"></a>

```go
func CrossAccountRoleArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InvokerRoleNameInput`<sup>Optional</sup> <a name="InvokerRoleNameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.invokerRoleNameInput"></a>

```go
func InvokerRoleNameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CrossAccountRoleArns`<sup>Required</sup> <a name="CrossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArns"></a>

```go
func CrossAccountRoleArns() *[]*string
```

- *Type:* *[]*string

---

##### `InvokerRoleName`<sup>Required</sup> <a name="InvokerRoleName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.invokerRoleName"></a>

```go
func InvokerRoleName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppPermissionModelOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResiliencehubAppResourceMappingsList <a name="ResiliencehubAppResourceMappingsList" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubapp"

resiliencehubapp.NewResiliencehubAppResourceMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ResiliencehubAppResourceMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.get"></a>

```go
func Get(index *f64) ResiliencehubAppResourceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResiliencehubAppResourceMappingsOutputReference <a name="ResiliencehubAppResourceMappingsOutputReference" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubapp"

resiliencehubapp.NewResiliencehubAppResourceMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ResiliencehubAppResourceMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.putPhysicalResourceId">PutPhysicalResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetEksSourceName">ResetEksSourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetLogicalStackName">ResetLogicalStackName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetResourceName">ResetResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetTerraformSourceName">ResetTerraformSourceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPhysicalResourceId` <a name="PutPhysicalResourceId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.putPhysicalResourceId"></a>

```go
func PutPhysicalResourceId(value ResiliencehubAppResourceMappingsPhysicalResourceId)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.putPhysicalResourceId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceId">ResiliencehubAppResourceMappingsPhysicalResourceId</a>

---

##### `ResetEksSourceName` <a name="ResetEksSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetEksSourceName"></a>

```go
func ResetEksSourceName()
```

##### `ResetLogicalStackName` <a name="ResetLogicalStackName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetLogicalStackName"></a>

```go
func ResetLogicalStackName()
```

##### `ResetResourceName` <a name="ResetResourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetResourceName"></a>

```go
func ResetResourceName()
```

##### `ResetTerraformSourceName` <a name="ResetTerraformSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.resetTerraformSourceName"></a>

```go
func ResetTerraformSourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.physicalResourceId">PhysicalResourceId</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference">ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.eksSourceNameInput">EksSourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.logicalStackNameInput">LogicalStackNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.mappingTypeInput">MappingTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.physicalResourceIdInput">PhysicalResourceIdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.resourceNameInput">ResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.terraformSourceNameInput">TerraformSourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.eksSourceName">EksSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.logicalStackName">LogicalStackName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.mappingType">MappingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.terraformSourceName">TerraformSourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PhysicalResourceId`<sup>Required</sup> <a name="PhysicalResourceId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.physicalResourceId"></a>

```go
func PhysicalResourceId() ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference">ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference</a>

---

##### `EksSourceNameInput`<sup>Optional</sup> <a name="EksSourceNameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.eksSourceNameInput"></a>

```go
func EksSourceNameInput() *string
```

- *Type:* *string

---

##### `LogicalStackNameInput`<sup>Optional</sup> <a name="LogicalStackNameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.logicalStackNameInput"></a>

```go
func LogicalStackNameInput() *string
```

- *Type:* *string

---

##### `MappingTypeInput`<sup>Optional</sup> <a name="MappingTypeInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.mappingTypeInput"></a>

```go
func MappingTypeInput() *string
```

- *Type:* *string

---

##### `PhysicalResourceIdInput`<sup>Optional</sup> <a name="PhysicalResourceIdInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.physicalResourceIdInput"></a>

```go
func PhysicalResourceIdInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.resourceNameInput"></a>

```go
func ResourceNameInput() *string
```

- *Type:* *string

---

##### `TerraformSourceNameInput`<sup>Optional</sup> <a name="TerraformSourceNameInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.terraformSourceNameInput"></a>

```go
func TerraformSourceNameInput() *string
```

- *Type:* *string

---

##### `EksSourceName`<sup>Required</sup> <a name="EksSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.eksSourceName"></a>

```go
func EksSourceName() *string
```

- *Type:* *string

---

##### `LogicalStackName`<sup>Required</sup> <a name="LogicalStackName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.logicalStackName"></a>

```go
func LogicalStackName() *string
```

- *Type:* *string

---

##### `MappingType`<sup>Required</sup> <a name="MappingType" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.mappingType"></a>

```go
func MappingType() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `TerraformSourceName`<sup>Required</sup> <a name="TerraformSourceName" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.terraformSourceName"></a>

```go
func TerraformSourceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference <a name="ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubapp"

resiliencehubapp.NewResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resetAwsAccountId"></a>

```go
func ResetAwsAccountId()
```

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resetAwsRegion"></a>

```go
func ResetAwsRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegionInput"></a>

```go
func AwsRegionInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegion"></a>

```go
func AwsRegion() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubApp.ResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




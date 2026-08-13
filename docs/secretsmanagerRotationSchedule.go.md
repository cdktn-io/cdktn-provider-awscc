# `secretsmanagerRotationSchedule` Submodule <a name="`secretsmanagerRotationSchedule` Submodule" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerRotationSchedule <a name="SecretsmanagerRotationSchedule" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule awscc_secretsmanager_rotation_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagerrotationschedule"

secretsmanagerrotationschedule.NewSecretsmanagerRotationSchedule(scope Construct, id *string, config SecretsmanagerRotationScheduleConfig) SecretsmanagerRotationSchedule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig">SecretsmanagerRotationScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig">SecretsmanagerRotationScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putExternalSecretRotationMetadata">PutExternalSecretRotationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putHostedRotationLambda">PutHostedRotationLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putRotationRules">PutRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetExternalSecretRotationMetadata">ResetExternalSecretRotationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetExternalSecretRotationRoleArn">ResetExternalSecretRotationRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetHostedRotationLambda">ResetHostedRotationLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotateImmediatelyOnUpdate">ResetRotateImmediatelyOnUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotationLambdaArn">ResetRotationLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotationRules">ResetRotationRules</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExternalSecretRotationMetadata` <a name="PutExternalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putExternalSecretRotationMetadata"></a>

```go
func PutExternalSecretRotationMetadata(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putExternalSecretRotationMetadata.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHostedRotationLambda` <a name="PutHostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putHostedRotationLambda"></a>

```go
func PutHostedRotationLambda(value SecretsmanagerRotationScheduleHostedRotationLambda)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putHostedRotationLambda.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a>

---

##### `PutRotationRules` <a name="PutRotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putRotationRules"></a>

```go
func PutRotationRules(value SecretsmanagerRotationScheduleRotationRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.putRotationRules.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a>

---

##### `ResetExternalSecretRotationMetadata` <a name="ResetExternalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetExternalSecretRotationMetadata"></a>

```go
func ResetExternalSecretRotationMetadata()
```

##### `ResetExternalSecretRotationRoleArn` <a name="ResetExternalSecretRotationRoleArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetExternalSecretRotationRoleArn"></a>

```go
func ResetExternalSecretRotationRoleArn()
```

##### `ResetHostedRotationLambda` <a name="ResetHostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetHostedRotationLambda"></a>

```go
func ResetHostedRotationLambda()
```

##### `ResetRotateImmediatelyOnUpdate` <a name="ResetRotateImmediatelyOnUpdate" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotateImmediatelyOnUpdate"></a>

```go
func ResetRotateImmediatelyOnUpdate()
```

##### `ResetRotationLambdaArn` <a name="ResetRotationLambdaArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotationLambdaArn"></a>

```go
func ResetRotationLambdaArn()
```

##### `ResetRotationRules` <a name="ResetRotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.resetRotationRules"></a>

```go
func ResetRotationRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecretsmanagerRotationSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagerrotationschedule"

secretsmanagerrotationschedule.SecretsmanagerRotationSchedule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagerrotationschedule"

secretsmanagerrotationschedule.SecretsmanagerRotationSchedule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagerrotationschedule"

secretsmanagerrotationschedule.SecretsmanagerRotationSchedule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagerrotationschedule"

secretsmanagerrotationschedule.SecretsmanagerRotationSchedule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecretsmanagerRotationSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecretsmanagerRotationSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecretsmanagerRotationSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecretsmanagerRotationSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationMetadata">ExternalSecretRotationMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList">SecretsmanagerRotationScheduleExternalSecretRotationMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.hostedRotationLambda">HostedRotationLambda</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference">SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationRules">RotationRules</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference">SecretsmanagerRotationScheduleRotationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationScheduleId">RotationScheduleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationMetadataInput">ExternalSecretRotationMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationRoleArnInput">ExternalSecretRotationRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.hostedRotationLambdaInput">HostedRotationLambdaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotateImmediatelyOnUpdateInput">RotateImmediatelyOnUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationLambdaArnInput">RotationLambdaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationRulesInput">RotationRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationRoleArn">ExternalSecretRotationRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotateImmediatelyOnUpdate">RotateImmediatelyOnUpdate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationLambdaArn">RotationLambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExternalSecretRotationMetadata`<sup>Required</sup> <a name="ExternalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationMetadata"></a>

```go
func ExternalSecretRotationMetadata() SecretsmanagerRotationScheduleExternalSecretRotationMetadataList
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList">SecretsmanagerRotationScheduleExternalSecretRotationMetadataList</a>

---

##### `HostedRotationLambda`<sup>Required</sup> <a name="HostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.hostedRotationLambda"></a>

```go
func HostedRotationLambda() SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference">SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RotationRules`<sup>Required</sup> <a name="RotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationRules"></a>

```go
func RotationRules() SecretsmanagerRotationScheduleRotationRulesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference">SecretsmanagerRotationScheduleRotationRulesOutputReference</a>

---

##### `RotationScheduleId`<sup>Required</sup> <a name="RotationScheduleId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationScheduleId"></a>

```go
func RotationScheduleId() *string
```

- *Type:* *string

---

##### `ExternalSecretRotationMetadataInput`<sup>Optional</sup> <a name="ExternalSecretRotationMetadataInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationMetadataInput"></a>

```go
func ExternalSecretRotationMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalSecretRotationRoleArnInput`<sup>Optional</sup> <a name="ExternalSecretRotationRoleArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationRoleArnInput"></a>

```go
func ExternalSecretRotationRoleArnInput() *string
```

- *Type:* *string

---

##### `HostedRotationLambdaInput`<sup>Optional</sup> <a name="HostedRotationLambdaInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.hostedRotationLambdaInput"></a>

```go
func HostedRotationLambdaInput() interface{}
```

- *Type:* interface{}

---

##### `RotateImmediatelyOnUpdateInput`<sup>Optional</sup> <a name="RotateImmediatelyOnUpdateInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotateImmediatelyOnUpdateInput"></a>

```go
func RotateImmediatelyOnUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `RotationLambdaArnInput`<sup>Optional</sup> <a name="RotationLambdaArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationLambdaArnInput"></a>

```go
func RotationLambdaArnInput() *string
```

- *Type:* *string

---

##### `RotationRulesInput`<sup>Optional</sup> <a name="RotationRulesInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationRulesInput"></a>

```go
func RotationRulesInput() interface{}
```

- *Type:* interface{}

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `ExternalSecretRotationRoleArn`<sup>Required</sup> <a name="ExternalSecretRotationRoleArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.externalSecretRotationRoleArn"></a>

```go
func ExternalSecretRotationRoleArn() *string
```

- *Type:* *string

---

##### `RotateImmediatelyOnUpdate`<sup>Required</sup> <a name="RotateImmediatelyOnUpdate" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotateImmediatelyOnUpdate"></a>

```go
func RotateImmediatelyOnUpdate() interface{}
```

- *Type:* interface{}

---

##### `RotationLambdaArn`<sup>Required</sup> <a name="RotationLambdaArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.rotationLambdaArn"></a>

```go
func RotationLambdaArn() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationSchedule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerRotationScheduleConfig <a name="SecretsmanagerRotationScheduleConfig" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagerrotationschedule"

&secretsmanagerrotationschedule.SecretsmanagerRotationScheduleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	SecretId: *string,
	ExternalSecretRotationMetadata: interface{},
	ExternalSecretRotationRoleArn: *string,
	HostedRotationLambda: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda,
	RotateImmediatelyOnUpdate: interface{},
	RotationLambdaArn: *string,
	RotationRules: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.secretId">SecretId</a></code> | <code>*string</code> | The ARN or name of the secret to rotate. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.externalSecretRotationMetadata">ExternalSecretRotationMetadata</a></code> | <code>interface{}</code> | The list of metadata needed to successfully rotate a managed external secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.externalSecretRotationRoleArn">ExternalSecretRotationRoleArn</a></code> | <code>*string</code> | The ARN of the IAM role that is used by Secrets Manager to rotate a managed external secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.hostedRotationLambda">HostedRotationLambda</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a></code> | Creates a new Lambda rotation function based on one of the Secrets Manager rotation function templates. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotateImmediatelyOnUpdate">RotateImmediatelyOnUpdate</a></code> | <code>interface{}</code> | Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotationLambdaArn">RotationLambdaArn</a></code> | <code>*string</code> | The ARN of an existing Lambda rotation function. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotationRules">RotationRules</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a></code> | A structure that defines the rotation configuration for this secret. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

The ARN or name of the secret to rotate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#secret_id SecretsmanagerRotationSchedule#secret_id}

---

##### `ExternalSecretRotationMetadata`<sup>Optional</sup> <a name="ExternalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.externalSecretRotationMetadata"></a>

```go
ExternalSecretRotationMetadata interface{}
```

- *Type:* interface{}

The list of metadata needed to successfully rotate a managed external secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#external_secret_rotation_metadata SecretsmanagerRotationSchedule#external_secret_rotation_metadata}

---

##### `ExternalSecretRotationRoleArn`<sup>Optional</sup> <a name="ExternalSecretRotationRoleArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.externalSecretRotationRoleArn"></a>

```go
ExternalSecretRotationRoleArn *string
```

- *Type:* *string

The ARN of the IAM role that is used by Secrets Manager to rotate a managed external secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#external_secret_rotation_role_arn SecretsmanagerRotationSchedule#external_secret_rotation_role_arn}

---

##### `HostedRotationLambda`<sup>Optional</sup> <a name="HostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.hostedRotationLambda"></a>

```go
HostedRotationLambda SecretsmanagerRotationScheduleHostedRotationLambda
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda">SecretsmanagerRotationScheduleHostedRotationLambda</a>

Creates a new Lambda rotation function based on one of the Secrets Manager rotation function templates.

To use a rotation function that already exists, specify RotationLambdaARN instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#hosted_rotation_lambda SecretsmanagerRotationSchedule#hosted_rotation_lambda}

---

##### `RotateImmediatelyOnUpdate`<sup>Optional</sup> <a name="RotateImmediatelyOnUpdate" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotateImmediatelyOnUpdate"></a>

```go
RotateImmediatelyOnUpdate interface{}
```

- *Type:* interface{}

Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#rotate_immediately_on_update SecretsmanagerRotationSchedule#rotate_immediately_on_update}

---

##### `RotationLambdaArn`<sup>Optional</sup> <a name="RotationLambdaArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotationLambdaArn"></a>

```go
RotationLambdaArn *string
```

- *Type:* *string

The ARN of an existing Lambda rotation function.

To specify a rotation function that is also defined in this template, use the Ref function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#rotation_lambda_arn SecretsmanagerRotationSchedule#rotation_lambda_arn}

---

##### `RotationRules`<sup>Optional</sup> <a name="RotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleConfig.property.rotationRules"></a>

```go
RotationRules SecretsmanagerRotationScheduleRotationRules
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules">SecretsmanagerRotationScheduleRotationRules</a>

A structure that defines the rotation configuration for this secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#rotation_rules SecretsmanagerRotationSchedule#rotation_rules}

---

### SecretsmanagerRotationScheduleExternalSecretRotationMetadata <a name="SecretsmanagerRotationScheduleExternalSecretRotationMetadata" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagerrotationschedule"

&secretsmanagerrotationschedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata.property.key">Key</a></code> | <code>*string</code> | The key name of the metadata item. You can specify a value that's 1 to 256 characters in length. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata.property.value">Value</a></code> | <code>*string</code> | The value for the metadata item. You can specify a value that's 1 to 2048 characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the metadata item. You can specify a value that's 1 to 256 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#key SecretsmanagerRotationSchedule#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadata.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the metadata item. You can specify a value that's 1 to 2048 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#value SecretsmanagerRotationSchedule#value}

---

### SecretsmanagerRotationScheduleHostedRotationLambda <a name="SecretsmanagerRotationScheduleHostedRotationLambda" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagerrotationschedule"

&secretsmanagerrotationschedule.SecretsmanagerRotationScheduleHostedRotationLambda {
	ExcludeCharacters: *string,
	KmsKeyArn: *string,
	MasterSecretArn: *string,
	MasterSecretKmsKeyArn: *string,
	RotationLambdaName: *string,
	RotationType: *string,
	Runtime: *string,
	SuperuserSecretArn: *string,
	SuperuserSecretKmsKeyArn: *string,
	VpcSecurityGroupIds: *string,
	VpcSubnetIds: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.excludeCharacters">ExcludeCharacters</a></code> | <code>*string</code> | A string of the characters that you don't want in the password. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | The ARN of the KMS key that Secrets Manager uses to encrypt the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.masterSecretArn">MasterSecretArn</a></code> | <code>*string</code> | The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.masterSecretKmsKeyArn">MasterSecretKmsKeyArn</a></code> | <code>*string</code> | The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.rotationLambdaName">RotationLambdaName</a></code> | <code>*string</code> | The name of the Lambda rotation function. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.rotationType">RotationType</a></code> | <code>*string</code> | The type of rotation template to use. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.runtime">Runtime</a></code> | <code>*string</code> | The python runtime associated with the Lambda function. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.superuserSecretArn">SuperuserSecretArn</a></code> | <code>*string</code> | The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.superuserSecretKmsKeyArn">SuperuserSecretKmsKeyArn</a></code> | <code>*string</code> | The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*string</code> | A comma-separated list of security group IDs applied to the target database. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.vpcSubnetIds">VpcSubnetIds</a></code> | <code>*string</code> | A comma separated list of VPC subnet IDs of the target database network. |

---

##### `ExcludeCharacters`<sup>Optional</sup> <a name="ExcludeCharacters" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.excludeCharacters"></a>

```go
ExcludeCharacters *string
```

- *Type:* *string

A string of the characters that you don't want in the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#exclude_characters SecretsmanagerRotationSchedule#exclude_characters}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

The ARN of the KMS key that Secrets Manager uses to encrypt the secret.

If you don't specify this value, then Secrets Manager uses the key aws/secretsmanager. If aws/secretsmanager doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#kms_key_arn SecretsmanagerRotationSchedule#kms_key_arn}

---

##### `MasterSecretArn`<sup>Optional</sup> <a name="MasterSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.masterSecretArn"></a>

```go
MasterSecretArn *string
```

- *Type:* *string

The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy.

CloudFormation grants the execution role for the Lambda rotation function GetSecretValue permission to the secret in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#master_secret_arn SecretsmanagerRotationSchedule#master_secret_arn}

---

##### `MasterSecretKmsKeyArn`<sup>Optional</sup> <a name="MasterSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.masterSecretKmsKeyArn"></a>

```go
MasterSecretKmsKeyArn *string
```

- *Type:* *string

The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key.

You don't need to specify this property if the superuser secret is encrypted using the key aws/secretsmanager. CloudFormation grants the execution role for the Lambda rotation function Decrypt, DescribeKey, and GenerateDataKey permission to the key in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#master_secret_kms_key_arn SecretsmanagerRotationSchedule#master_secret_kms_key_arn}

---

##### `RotationLambdaName`<sup>Optional</sup> <a name="RotationLambdaName" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.rotationLambdaName"></a>

```go
RotationLambdaName *string
```

- *Type:* *string

The name of the Lambda rotation function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#rotation_lambda_name SecretsmanagerRotationSchedule#rotation_lambda_name}

---

##### `RotationType`<sup>Optional</sup> <a name="RotationType" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.rotationType"></a>

```go
RotationType *string
```

- *Type:* *string

The type of rotation template to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#rotation_type SecretsmanagerRotationSchedule#rotation_type}

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.runtime"></a>

```go
Runtime *string
```

- *Type:* *string

The python runtime associated with the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#runtime SecretsmanagerRotationSchedule#runtime}

---

##### `SuperuserSecretArn`<sup>Optional</sup> <a name="SuperuserSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.superuserSecretArn"></a>

```go
SuperuserSecretArn *string
```

- *Type:* *string

The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy.

CloudFormation grants the execution role for the Lambda rotation function GetSecretValue permission to the secret in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#superuser_secret_arn SecretsmanagerRotationSchedule#superuser_secret_arn}

---

##### `SuperuserSecretKmsKeyArn`<sup>Optional</sup> <a name="SuperuserSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.superuserSecretKmsKeyArn"></a>

```go
SuperuserSecretKmsKeyArn *string
```

- *Type:* *string

The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key.

You don't need to specify this property if the superuser secret is encrypted using the key aws/secretsmanager. CloudFormation grants the execution role for the Lambda rotation function Decrypt, DescribeKey, and GenerateDataKey permission to the key in this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#superuser_secret_kms_key_arn SecretsmanagerRotationSchedule#superuser_secret_kms_key_arn}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.vpcSecurityGroupIds"></a>

```go
VpcSecurityGroupIds *string
```

- *Type:* *string

A comma-separated list of security group IDs applied to the target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#vpc_security_group_ids SecretsmanagerRotationSchedule#vpc_security_group_ids}

---

##### `VpcSubnetIds`<sup>Optional</sup> <a name="VpcSubnetIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambda.property.vpcSubnetIds"></a>

```go
VpcSubnetIds *string
```

- *Type:* *string

A comma separated list of VPC subnet IDs of the target database network.

The Lambda rotation function is in the same subnet group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#vpc_subnet_ids SecretsmanagerRotationSchedule#vpc_subnet_ids}

---

### SecretsmanagerRotationScheduleRotationRules <a name="SecretsmanagerRotationScheduleRotationRules" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagerrotationschedule"

&secretsmanagerrotationschedule.SecretsmanagerRotationScheduleRotationRules {
	AutomaticallyAfterDays: *f64,
	Duration: *string,
	ScheduleExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.automaticallyAfterDays">AutomaticallyAfterDays</a></code> | <code>*f64</code> | The number of days between automatic scheduled rotations of the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.duration">Duration</a></code> | <code>*string</code> | The length of the rotation window in hours, for example 3h for a three hour window. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | A cron() or rate() expression that defines the schedule for rotating your secret. |

---

##### `AutomaticallyAfterDays`<sup>Optional</sup> <a name="AutomaticallyAfterDays" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.automaticallyAfterDays"></a>

```go
AutomaticallyAfterDays *f64
```

- *Type:* *f64

The number of days between automatic scheduled rotations of the secret.

You can use this value to check that your secret meets your compliance guidelines for how often secrets must be rotated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#automatically_after_days SecretsmanagerRotationSchedule#automatically_after_days}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

The length of the rotation window in hours, for example 3h for a three hour window.

Secrets Manager rotates your secret at any time during this window. The window must not extend into the next rotation window or the next UTC day. The window starts according to the ScheduleExpression. If you don't specify a Duration, for a ScheduleExpression in hours, the window automatically closes after one hour. For a ScheduleExpression in days, the window automatically closes at the end of the UTC day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#duration SecretsmanagerRotationSchedule#duration}

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRules.property.scheduleExpression"></a>

```go
ScheduleExpression *string
```

- *Type:* *string

A cron() or rate() expression that defines the schedule for rotating your secret.

Secrets Manager rotation schedules use UTC time zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/secretsmanager_rotation_schedule#schedule_expression SecretsmanagerRotationSchedule#schedule_expression}

---

## Classes <a name="Classes" id="Classes"></a>

### SecretsmanagerRotationScheduleExternalSecretRotationMetadataList <a name="SecretsmanagerRotationScheduleExternalSecretRotationMetadataList" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagerrotationschedule"

secretsmanagerrotationschedule.NewSecretsmanagerRotationScheduleExternalSecretRotationMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecretsmanagerRotationScheduleExternalSecretRotationMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.get"></a>

```go
func Get(index *f64) SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference <a name="SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagerrotationschedule"

secretsmanagerrotationschedule.NewSecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleExternalSecretRotationMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference <a name="SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagerrotationschedule"

secretsmanagerrotationschedule.NewSecretsmanagerRotationScheduleHostedRotationLambdaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetExcludeCharacters">ResetExcludeCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetMasterSecretArn">ResetMasterSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetMasterSecretKmsKeyArn">ResetMasterSecretKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRotationLambdaName">ResetRotationLambdaName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRotationType">ResetRotationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetSuperuserSecretArn">ResetSuperuserSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetSuperuserSecretKmsKeyArn">ResetSuperuserSecretKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetVpcSubnetIds">ResetVpcSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeCharacters` <a name="ResetExcludeCharacters" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetExcludeCharacters"></a>

```go
func ResetExcludeCharacters()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetMasterSecretArn` <a name="ResetMasterSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetMasterSecretArn"></a>

```go
func ResetMasterSecretArn()
```

##### `ResetMasterSecretKmsKeyArn` <a name="ResetMasterSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetMasterSecretKmsKeyArn"></a>

```go
func ResetMasterSecretKmsKeyArn()
```

##### `ResetRotationLambdaName` <a name="ResetRotationLambdaName" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRotationLambdaName"></a>

```go
func ResetRotationLambdaName()
```

##### `ResetRotationType` <a name="ResetRotationType" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRotationType"></a>

```go
func ResetRotationType()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetRuntime"></a>

```go
func ResetRuntime()
```

##### `ResetSuperuserSecretArn` <a name="ResetSuperuserSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetSuperuserSecretArn"></a>

```go
func ResetSuperuserSecretArn()
```

##### `ResetSuperuserSecretKmsKeyArn` <a name="ResetSuperuserSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetSuperuserSecretKmsKeyArn"></a>

```go
func ResetSuperuserSecretKmsKeyArn()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetVpcSecurityGroupIds"></a>

```go
func ResetVpcSecurityGroupIds()
```

##### `ResetVpcSubnetIds` <a name="ResetVpcSubnetIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.resetVpcSubnetIds"></a>

```go
func ResetVpcSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.excludeCharactersInput">ExcludeCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretArnInput">MasterSecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretKmsKeyArnInput">MasterSecretKmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationLambdaNameInput">RotationLambdaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationTypeInput">RotationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.runtimeInput">RuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretArnInput">SuperuserSecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretKmsKeyArnInput">SuperuserSecretKmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSubnetIdsInput">VpcSubnetIdsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.excludeCharacters">ExcludeCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretArn">MasterSecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretKmsKeyArn">MasterSecretKmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationLambdaName">RotationLambdaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationType">RotationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretArn">SuperuserSecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretKmsKeyArn">SuperuserSecretKmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSubnetIds">VpcSubnetIds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeCharactersInput`<sup>Optional</sup> <a name="ExcludeCharactersInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.excludeCharactersInput"></a>

```go
func ExcludeCharactersInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `MasterSecretArnInput`<sup>Optional</sup> <a name="MasterSecretArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretArnInput"></a>

```go
func MasterSecretArnInput() *string
```

- *Type:* *string

---

##### `MasterSecretKmsKeyArnInput`<sup>Optional</sup> <a name="MasterSecretKmsKeyArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretKmsKeyArnInput"></a>

```go
func MasterSecretKmsKeyArnInput() *string
```

- *Type:* *string

---

##### `RotationLambdaNameInput`<sup>Optional</sup> <a name="RotationLambdaNameInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationLambdaNameInput"></a>

```go
func RotationLambdaNameInput() *string
```

- *Type:* *string

---

##### `RotationTypeInput`<sup>Optional</sup> <a name="RotationTypeInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationTypeInput"></a>

```go
func RotationTypeInput() *string
```

- *Type:* *string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.runtimeInput"></a>

```go
func RuntimeInput() *string
```

- *Type:* *string

---

##### `SuperuserSecretArnInput`<sup>Optional</sup> <a name="SuperuserSecretArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretArnInput"></a>

```go
func SuperuserSecretArnInput() *string
```

- *Type:* *string

---

##### `SuperuserSecretKmsKeyArnInput`<sup>Optional</sup> <a name="SuperuserSecretKmsKeyArnInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretKmsKeyArnInput"></a>

```go
func SuperuserSecretKmsKeyArnInput() *string
```

- *Type:* *string

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSecurityGroupIdsInput"></a>

```go
func VpcSecurityGroupIdsInput() *string
```

- *Type:* *string

---

##### `VpcSubnetIdsInput`<sup>Optional</sup> <a name="VpcSubnetIdsInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSubnetIdsInput"></a>

```go
func VpcSubnetIdsInput() *string
```

- *Type:* *string

---

##### `ExcludeCharacters`<sup>Required</sup> <a name="ExcludeCharacters" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.excludeCharacters"></a>

```go
func ExcludeCharacters() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `MasterSecretArn`<sup>Required</sup> <a name="MasterSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretArn"></a>

```go
func MasterSecretArn() *string
```

- *Type:* *string

---

##### `MasterSecretKmsKeyArn`<sup>Required</sup> <a name="MasterSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.masterSecretKmsKeyArn"></a>

```go
func MasterSecretKmsKeyArn() *string
```

- *Type:* *string

---

##### `RotationLambdaName`<sup>Required</sup> <a name="RotationLambdaName" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationLambdaName"></a>

```go
func RotationLambdaName() *string
```

- *Type:* *string

---

##### `RotationType`<sup>Required</sup> <a name="RotationType" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.rotationType"></a>

```go
func RotationType() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `SuperuserSecretArn`<sup>Required</sup> <a name="SuperuserSecretArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretArn"></a>

```go
func SuperuserSecretArn() *string
```

- *Type:* *string

---

##### `SuperuserSecretKmsKeyArn`<sup>Required</sup> <a name="SuperuserSecretKmsKeyArn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.superuserSecretKmsKeyArn"></a>

```go
func SuperuserSecretKmsKeyArn() *string
```

- *Type:* *string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *string
```

- *Type:* *string

---

##### `VpcSubnetIds`<sup>Required</sup> <a name="VpcSubnetIds" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.vpcSubnetIds"></a>

```go
func VpcSubnetIds() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleHostedRotationLambdaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecretsmanagerRotationScheduleRotationRulesOutputReference <a name="SecretsmanagerRotationScheduleRotationRulesOutputReference" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagerrotationschedule"

secretsmanagerrotationschedule.NewSecretsmanagerRotationScheduleRotationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecretsmanagerRotationScheduleRotationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetAutomaticallyAfterDays">ResetAutomaticallyAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutomaticallyAfterDays` <a name="ResetAutomaticallyAfterDays" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetAutomaticallyAfterDays"></a>

```go
func ResetAutomaticallyAfterDays()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetDuration"></a>

```go
func ResetDuration()
```

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.resetScheduleExpression"></a>

```go
func ResetScheduleExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.automaticallyAfterDaysInput">AutomaticallyAfterDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.automaticallyAfterDays">AutomaticallyAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomaticallyAfterDaysInput`<sup>Optional</sup> <a name="AutomaticallyAfterDaysInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.automaticallyAfterDaysInput"></a>

```go
func AutomaticallyAfterDaysInput() *f64
```

- *Type:* *f64

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.scheduleExpressionInput"></a>

```go
func ScheduleExpressionInput() *string
```

- *Type:* *string

---

##### `AutomaticallyAfterDays`<sup>Required</sup> <a name="AutomaticallyAfterDays" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.automaticallyAfterDays"></a>

```go
func AutomaticallyAfterDays() *f64
```

- *Type:* *f64

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.secretsmanagerRotationSchedule.SecretsmanagerRotationScheduleRotationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




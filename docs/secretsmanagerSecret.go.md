# `secretsmanagerSecret` Submodule <a name="`secretsmanagerSecret` Submodule" id="@cdktn/provider-awscc.secretsmanagerSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerSecret <a name="SecretsmanagerSecret" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret awscc_secretsmanager_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagersecret"

secretsmanagersecret.NewSecretsmanagerSecret(scope Construct, id *string, config SecretsmanagerSecretConfig) SecretsmanagerSecret
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig">SecretsmanagerSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig">SecretsmanagerSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString">PutGenerateSecretString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putReplicaRegions">PutReplicaRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetGenerateSecretString">ResetGenerateSecretString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetReplicaRegions">ResetReplicaRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetSecretString">ResetSecretString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGenerateSecretString` <a name="PutGenerateSecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString"></a>

```go
func PutGenerateSecretString(value SecretsmanagerSecretGenerateSecretString)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a>

---

##### `PutReplicaRegions` <a name="PutReplicaRegions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putReplicaRegions"></a>

```go
func PutReplicaRegions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putReplicaRegions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGenerateSecretString` <a name="ResetGenerateSecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetGenerateSecretString"></a>

```go
func ResetGenerateSecretString()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetName"></a>

```go
func ResetName()
```

##### `ResetReplicaRegions` <a name="ResetReplicaRegions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetReplicaRegions"></a>

```go
func ResetReplicaRegions()
```

##### `ResetSecretString` <a name="ResetSecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetSecretString"></a>

```go
func ResetSecretString()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetTags"></a>

```go
func ResetTags()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecretsmanagerSecret resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagersecret"

secretsmanagersecret.SecretsmanagerSecret_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagersecret"

secretsmanagersecret.SecretsmanagerSecret_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagersecret"

secretsmanagersecret.SecretsmanagerSecret_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagersecret"

secretsmanagersecret.SecretsmanagerSecret_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecretsmanagerSecret resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecretsmanagerSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecretsmanagerSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecretsmanagerSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.generateSecretString">GenerateSecretString</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference">SecretsmanagerSecretGenerateSecretStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.replicaRegions">ReplicaRegions</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList">SecretsmanagerSecretReplicaRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList">SecretsmanagerSecretTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.generateSecretStringInput">GenerateSecretStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.replicaRegionsInput">ReplicaRegionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretStringInput">SecretStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretString">SecretString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GenerateSecretString`<sup>Required</sup> <a name="GenerateSecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.generateSecretString"></a>

```go
func GenerateSecretString() SecretsmanagerSecretGenerateSecretStringOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference">SecretsmanagerSecretGenerateSecretStringOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ReplicaRegions`<sup>Required</sup> <a name="ReplicaRegions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.replicaRegions"></a>

```go
func ReplicaRegions() SecretsmanagerSecretReplicaRegionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList">SecretsmanagerSecretReplicaRegionsList</a>

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tags"></a>

```go
func Tags() SecretsmanagerSecretTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList">SecretsmanagerSecretTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GenerateSecretStringInput`<sup>Optional</sup> <a name="GenerateSecretStringInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.generateSecretStringInput"></a>

```go
func GenerateSecretStringInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReplicaRegionsInput`<sup>Optional</sup> <a name="ReplicaRegionsInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.replicaRegionsInput"></a>

```go
func ReplicaRegionsInput() interface{}
```

- *Type:* interface{}

---

##### `SecretStringInput`<sup>Optional</sup> <a name="SecretStringInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretStringInput"></a>

```go
func SecretStringInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecretString`<sup>Required</sup> <a name="SecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretString"></a>

```go
func SecretString() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerSecretConfig <a name="SecretsmanagerSecretConfig" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagersecret"

&secretsmanagersecret.SecretsmanagerSecretConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	GenerateSecretString: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString,
	KmsKeyId: *string,
	Name: *string,
	ReplicaRegions: interface{},
	SecretString: *string,
	Tags: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.description">Description</a></code> | <code>*string</code> | The description of the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.generateSecretString">GenerateSecretString</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a></code> | A structure that specifies how to generate a password to encrypt and store in the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.name">Name</a></code> | <code>*string</code> | The name of the new secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.replicaRegions">ReplicaRegions</a></code> | <code>interface{}</code> | A custom type that specifies a ``Region`` and the ``KmsKeyId`` for a replica secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.secretString">SecretString</a></code> | <code>*string</code> | The text to encrypt and store in the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of tags to attach to the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.type">Type</a></code> | <code>*string</code> | The exact string that identifies the third-party partner that holds the external secret. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#description SecretsmanagerSecret#description}

---

##### `GenerateSecretString`<sup>Optional</sup> <a name="GenerateSecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.generateSecretString"></a>

```go
GenerateSecretString SecretsmanagerSecretGenerateSecretString
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a>

A structure that specifies how to generate a password to encrypt and store in the secret.

To include a specific string in the secret, use `SecretString` instead. If you omit both `GenerateSecretString` and `SecretString`, you create an empty secret. When you make a change to this property, a new secret version is created.
We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#generate_secret_string SecretsmanagerSecret#generate_secret_string}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret.

An alias is always prefixed by `alias/`, for example `alias/aws/secretsmanager`. For more information, see [About aliases](https://docs.aws.amazon.com/kms/latest/developerguide/alias-about.html).
To use a KMS key in a different account, use the key ARN or the alias ARN.
If you don't specify this value, then Secrets Manager uses the key `aws/secretsmanager`. If that key doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.
If the secret is in a different AWS account from the credentials calling the API, then you can't use `aws/secretsmanager` to encrypt the secret, and you must create and use a customer managed KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the new secret.

The secret name can contain ASCII letters, numbers, and the following characters: /_+=.@-
Do not end your secret name with a hyphen followed by six characters. If you do so, you risk confusion and unexpected results when searching for a secret by partial ARN. Secrets Manager automatically adds a hyphen and six random characters after the secret name at the end of the ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#name SecretsmanagerSecret#name}

---

##### `ReplicaRegions`<sup>Optional</sup> <a name="ReplicaRegions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.replicaRegions"></a>

```go
ReplicaRegions interface{}
```

- *Type:* interface{}

A custom type that specifies a ``Region`` and the ``KmsKeyId`` for a replica secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#replica_regions SecretsmanagerSecret#replica_regions}

---

##### `SecretString`<sup>Optional</sup> <a name="SecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.secretString"></a>

```go
SecretString *string
```

- *Type:* *string

The text to encrypt and store in the secret.

We recommend you use a JSON structure of key/value pairs for your secret value. To generate a random password, use `GenerateSecretString` instead. If you omit both `GenerateSecretString` and `SecretString`, you create an empty secret. When you make a change to this property, a new secret version is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#secret_string SecretsmanagerSecret#secret_string}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of tags to attach to the secret.

Each tag is a key and value pair of strings in a JSON text string, for example:
`[{"Key":"CostCenter","Value":"12345"},{"Key":"environment","Value":"production"}]`
Secrets Manager tag key names are case sensitive. A tag with the key "ABC" is a different tag from one with key "abc".
Stack-level tags, tags you apply to the CloudFormation stack, are also attached to the secret.
If you check tags in permissions policies as part of your security strategy, then adding or removing a tag can change permissions. If the completion of this operation would result in you losing your permissions for this secret, then Secrets Manager blocks the operation and returns an `Access Denied` error. For more information, see [Control access to secrets using tags](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#tag-secrets-abac) and [Limit access to identities with tags that match secrets' tags](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#auth-and-access_tags2).
For information about how to format a JSON parameter for the various command line tool environments, see [Using JSON for Parameters](https://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json). If your command-line tool or SDK requires quotation marks around the parameter, you should use single quotes to avoid confusion with the double quotes required in the JSON text.
The following restrictions apply to tags:

* Maximum number of tags per secret: 50
* Maximum key length: 127 Unicode characters in UTF-8
* Maximum value length: 255 Unicode characters in UTF-8
* Tag keys and values are case sensitive.
* Do not use the `aws:` prefix in your tag names or values because AWS reserves it for AWS use. You can't edit or delete tag names or values with this prefix. Tags with this prefix do not count against your tags per secret limit.
* If you use your tagging schema across multiple services and resources, other services might have restrictions on allowed characters. Generally allowed characters: letters, spaces, and numbers representable in UTF-8, plus the following special characters: + - = . _ : /

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The exact string that identifies the third-party partner that holds the external secret.

For more information, see [Managed external secret partners](https://docs.aws.amazon.com/secretsmanager/latest/userguide/mes-partners.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#type SecretsmanagerSecret#type}

---

### SecretsmanagerSecretGenerateSecretString <a name="SecretsmanagerSecretGenerateSecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagersecret"

&secretsmanagersecret.SecretsmanagerSecretGenerateSecretString {
	ExcludeCharacters: *string,
	ExcludeLowercase: interface{},
	ExcludeNumbers: interface{},
	ExcludePunctuation: interface{},
	ExcludeUppercase: interface{},
	GenerateStringKey: *string,
	IncludeSpace: interface{},
	PasswordLength: *f64,
	RequireEachIncludedType: interface{},
	SecretStringTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeCharacters">ExcludeCharacters</a></code> | <code>*string</code> | A string of the characters that you don't want in the password. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeLowercase">ExcludeLowercase</a></code> | <code>interface{}</code> | Specifies whether to exclude lowercase letters from the password. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeNumbers">ExcludeNumbers</a></code> | <code>interface{}</code> | Specifies whether to exclude numbers from the password. If you don't include this switch, the password can contain numbers. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludePunctuation">ExcludePunctuation</a></code> | <code>interface{}</code> | Specifies whether to exclude the following punctuation characters from the password: ``! |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeUppercase">ExcludeUppercase</a></code> | <code>interface{}</code> | Specifies whether to exclude uppercase letters from the password. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.generateStringKey">GenerateStringKey</a></code> | <code>*string</code> | The JSON key name for the key/value pair, where the value is the generated password. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.includeSpace">IncludeSpace</a></code> | <code>interface{}</code> | Specifies whether to include the space character. If you include this switch, the password can contain space characters. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.passwordLength">PasswordLength</a></code> | <code>*f64</code> | The length of the password. If you don't include this parameter, the default length is 32 characters. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.requireEachIncludedType">RequireEachIncludedType</a></code> | <code>interface{}</code> | Specifies whether to include at least one upper and lowercase letter, one number, and one punctuation. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.secretStringTemplate">SecretStringTemplate</a></code> | <code>*string</code> | A template that the generated string must match. |

---

##### `ExcludeCharacters`<sup>Optional</sup> <a name="ExcludeCharacters" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeCharacters"></a>

```go
ExcludeCharacters *string
```

- *Type:* *string

A string of the characters that you don't want in the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#exclude_characters SecretsmanagerSecret#exclude_characters}

---

##### `ExcludeLowercase`<sup>Optional</sup> <a name="ExcludeLowercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeLowercase"></a>

```go
ExcludeLowercase interface{}
```

- *Type:* interface{}

Specifies whether to exclude lowercase letters from the password.

If you don't include this switch, the password can contain lowercase letters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#exclude_lowercase SecretsmanagerSecret#exclude_lowercase}

---

##### `ExcludeNumbers`<sup>Optional</sup> <a name="ExcludeNumbers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeNumbers"></a>

```go
ExcludeNumbers interface{}
```

- *Type:* interface{}

Specifies whether to exclude numbers from the password. If you don't include this switch, the password can contain numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#exclude_numbers SecretsmanagerSecret#exclude_numbers}

---

##### `ExcludePunctuation`<sup>Optional</sup> <a name="ExcludePunctuation" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludePunctuation"></a>

```go
ExcludePunctuation interface{}
```

- *Type:* interface{}

Specifies whether to exclude the following punctuation characters from the password: ``!

" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~``. If you don't include this switch, the password can contain punctuation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#exclude_punctuation SecretsmanagerSecret#exclude_punctuation}

---

##### `ExcludeUppercase`<sup>Optional</sup> <a name="ExcludeUppercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeUppercase"></a>

```go
ExcludeUppercase interface{}
```

- *Type:* interface{}

Specifies whether to exclude uppercase letters from the password.

If you don't include this switch, the password can contain uppercase letters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#exclude_uppercase SecretsmanagerSecret#exclude_uppercase}

---

##### `GenerateStringKey`<sup>Optional</sup> <a name="GenerateStringKey" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.generateStringKey"></a>

```go
GenerateStringKey *string
```

- *Type:* *string

The JSON key name for the key/value pair, where the value is the generated password.

This pair is added to the JSON structure specified by the `SecretStringTemplate` parameter. If you specify this parameter, then you must also specify `SecretStringTemplate`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#generate_string_key SecretsmanagerSecret#generate_string_key}

---

##### `IncludeSpace`<sup>Optional</sup> <a name="IncludeSpace" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.includeSpace"></a>

```go
IncludeSpace interface{}
```

- *Type:* interface{}

Specifies whether to include the space character. If you include this switch, the password can contain space characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#include_space SecretsmanagerSecret#include_space}

---

##### `PasswordLength`<sup>Optional</sup> <a name="PasswordLength" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.passwordLength"></a>

```go
PasswordLength *f64
```

- *Type:* *f64

The length of the password. If you don't include this parameter, the default length is 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#password_length SecretsmanagerSecret#password_length}

---

##### `RequireEachIncludedType`<sup>Optional</sup> <a name="RequireEachIncludedType" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.requireEachIncludedType"></a>

```go
RequireEachIncludedType interface{}
```

- *Type:* interface{}

Specifies whether to include at least one upper and lowercase letter, one number, and one punctuation.

If you don't include this switch, the password contains at least one of every character type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#require_each_included_type SecretsmanagerSecret#require_each_included_type}

---

##### `SecretStringTemplate`<sup>Optional</sup> <a name="SecretStringTemplate" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.secretStringTemplate"></a>

```go
SecretStringTemplate *string
```

- *Type:* *string

A template that the generated string must match.

When you make a change to this property, a new secret version is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#secret_string_template SecretsmanagerSecret#secret_string_template}

---

### SecretsmanagerSecretReplicaRegions <a name="SecretsmanagerSecretReplicaRegions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagersecret"

&secretsmanagersecret.SecretsmanagerSecretReplicaRegions {
	KmsKeyId: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The ARN, key ID, or alias of the KMS key to encrypt the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions.property.region">Region</a></code> | <code>*string</code> | A string that represents a ``Region``, for example "us-east-1". |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The ARN, key ID, or alias of the KMS key to encrypt the secret.

If you don't include this field, Secrets Manager uses `aws/secretsmanager`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions.property.region"></a>

```go
Region *string
```

- *Type:* *string

A string that represents a ``Region``, for example "us-east-1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#region SecretsmanagerSecret#region}

---

### SecretsmanagerSecretTags <a name="SecretsmanagerSecretTags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagersecret"

&secretsmanagersecret.SecretsmanagerSecretTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags.property.key">Key</a></code> | <code>*string</code> | The key identifier, or name, of the tag. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags.property.value">Value</a></code> | <code>*string</code> | The string value associated with the key of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key identifier, or name, of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#key SecretsmanagerSecret#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The string value associated with the key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/secretsmanager_secret#value SecretsmanagerSecret#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecretsmanagerSecretGenerateSecretStringOutputReference <a name="SecretsmanagerSecretGenerateSecretStringOutputReference" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagersecret"

secretsmanagersecret.NewSecretsmanagerSecretGenerateSecretStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecretsmanagerSecretGenerateSecretStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeCharacters">ResetExcludeCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeLowercase">ResetExcludeLowercase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeNumbers">ResetExcludeNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludePunctuation">ResetExcludePunctuation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeUppercase">ResetExcludeUppercase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetGenerateStringKey">ResetGenerateStringKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetIncludeSpace">ResetIncludeSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetPasswordLength">ResetPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetRequireEachIncludedType">ResetRequireEachIncludedType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetSecretStringTemplate">ResetSecretStringTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeCharacters` <a name="ResetExcludeCharacters" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeCharacters"></a>

```go
func ResetExcludeCharacters()
```

##### `ResetExcludeLowercase` <a name="ResetExcludeLowercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeLowercase"></a>

```go
func ResetExcludeLowercase()
```

##### `ResetExcludeNumbers` <a name="ResetExcludeNumbers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeNumbers"></a>

```go
func ResetExcludeNumbers()
```

##### `ResetExcludePunctuation` <a name="ResetExcludePunctuation" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludePunctuation"></a>

```go
func ResetExcludePunctuation()
```

##### `ResetExcludeUppercase` <a name="ResetExcludeUppercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeUppercase"></a>

```go
func ResetExcludeUppercase()
```

##### `ResetGenerateStringKey` <a name="ResetGenerateStringKey" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetGenerateStringKey"></a>

```go
func ResetGenerateStringKey()
```

##### `ResetIncludeSpace` <a name="ResetIncludeSpace" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetIncludeSpace"></a>

```go
func ResetIncludeSpace()
```

##### `ResetPasswordLength` <a name="ResetPasswordLength" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetPasswordLength"></a>

```go
func ResetPasswordLength()
```

##### `ResetRequireEachIncludedType` <a name="ResetRequireEachIncludedType" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetRequireEachIncludedType"></a>

```go
func ResetRequireEachIncludedType()
```

##### `ResetSecretStringTemplate` <a name="ResetSecretStringTemplate" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetSecretStringTemplate"></a>

```go
func ResetSecretStringTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeCharactersInput">ExcludeCharactersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeLowercaseInput">ExcludeLowercaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeNumbersInput">ExcludeNumbersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludePunctuationInput">ExcludePunctuationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeUppercaseInput">ExcludeUppercaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.generateStringKeyInput">GenerateStringKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.includeSpaceInput">IncludeSpaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.passwordLengthInput">PasswordLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.requireEachIncludedTypeInput">RequireEachIncludedTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.secretStringTemplateInput">SecretStringTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeCharacters">ExcludeCharacters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeLowercase">ExcludeLowercase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeNumbers">ExcludeNumbers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludePunctuation">ExcludePunctuation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeUppercase">ExcludeUppercase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.generateStringKey">GenerateStringKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.includeSpace">IncludeSpace</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.passwordLength">PasswordLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.requireEachIncludedType">RequireEachIncludedType</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.secretStringTemplate">SecretStringTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeCharactersInput`<sup>Optional</sup> <a name="ExcludeCharactersInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeCharactersInput"></a>

```go
func ExcludeCharactersInput() *string
```

- *Type:* *string

---

##### `ExcludeLowercaseInput`<sup>Optional</sup> <a name="ExcludeLowercaseInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeLowercaseInput"></a>

```go
func ExcludeLowercaseInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeNumbersInput`<sup>Optional</sup> <a name="ExcludeNumbersInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeNumbersInput"></a>

```go
func ExcludeNumbersInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludePunctuationInput`<sup>Optional</sup> <a name="ExcludePunctuationInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludePunctuationInput"></a>

```go
func ExcludePunctuationInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeUppercaseInput`<sup>Optional</sup> <a name="ExcludeUppercaseInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeUppercaseInput"></a>

```go
func ExcludeUppercaseInput() interface{}
```

- *Type:* interface{}

---

##### `GenerateStringKeyInput`<sup>Optional</sup> <a name="GenerateStringKeyInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.generateStringKeyInput"></a>

```go
func GenerateStringKeyInput() *string
```

- *Type:* *string

---

##### `IncludeSpaceInput`<sup>Optional</sup> <a name="IncludeSpaceInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.includeSpaceInput"></a>

```go
func IncludeSpaceInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordLengthInput`<sup>Optional</sup> <a name="PasswordLengthInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.passwordLengthInput"></a>

```go
func PasswordLengthInput() *f64
```

- *Type:* *f64

---

##### `RequireEachIncludedTypeInput`<sup>Optional</sup> <a name="RequireEachIncludedTypeInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.requireEachIncludedTypeInput"></a>

```go
func RequireEachIncludedTypeInput() interface{}
```

- *Type:* interface{}

---

##### `SecretStringTemplateInput`<sup>Optional</sup> <a name="SecretStringTemplateInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.secretStringTemplateInput"></a>

```go
func SecretStringTemplateInput() *string
```

- *Type:* *string

---

##### `ExcludeCharacters`<sup>Required</sup> <a name="ExcludeCharacters" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeCharacters"></a>

```go
func ExcludeCharacters() *string
```

- *Type:* *string

---

##### `ExcludeLowercase`<sup>Required</sup> <a name="ExcludeLowercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeLowercase"></a>

```go
func ExcludeLowercase() interface{}
```

- *Type:* interface{}

---

##### `ExcludeNumbers`<sup>Required</sup> <a name="ExcludeNumbers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeNumbers"></a>

```go
func ExcludeNumbers() interface{}
```

- *Type:* interface{}

---

##### `ExcludePunctuation`<sup>Required</sup> <a name="ExcludePunctuation" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludePunctuation"></a>

```go
func ExcludePunctuation() interface{}
```

- *Type:* interface{}

---

##### `ExcludeUppercase`<sup>Required</sup> <a name="ExcludeUppercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeUppercase"></a>

```go
func ExcludeUppercase() interface{}
```

- *Type:* interface{}

---

##### `GenerateStringKey`<sup>Required</sup> <a name="GenerateStringKey" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.generateStringKey"></a>

```go
func GenerateStringKey() *string
```

- *Type:* *string

---

##### `IncludeSpace`<sup>Required</sup> <a name="IncludeSpace" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.includeSpace"></a>

```go
func IncludeSpace() interface{}
```

- *Type:* interface{}

---

##### `PasswordLength`<sup>Required</sup> <a name="PasswordLength" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.passwordLength"></a>

```go
func PasswordLength() *f64
```

- *Type:* *f64

---

##### `RequireEachIncludedType`<sup>Required</sup> <a name="RequireEachIncludedType" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.requireEachIncludedType"></a>

```go
func RequireEachIncludedType() interface{}
```

- *Type:* interface{}

---

##### `SecretStringTemplate`<sup>Required</sup> <a name="SecretStringTemplate" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.secretStringTemplate"></a>

```go
func SecretStringTemplate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecretsmanagerSecretReplicaRegionsList <a name="SecretsmanagerSecretReplicaRegionsList" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagersecret"

secretsmanagersecret.NewSecretsmanagerSecretReplicaRegionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecretsmanagerSecretReplicaRegionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.get"></a>

```go
func Get(index *f64) SecretsmanagerSecretReplicaRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecretsmanagerSecretReplicaRegionsOutputReference <a name="SecretsmanagerSecretReplicaRegionsOutputReference" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagersecret"

secretsmanagersecret.NewSecretsmanagerSecretReplicaRegionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecretsmanagerSecretReplicaRegionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecretsmanagerSecretTagsList <a name="SecretsmanagerSecretTagsList" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagersecret"

secretsmanagersecret.NewSecretsmanagerSecretTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecretsmanagerSecretTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.get"></a>

```go
func Get(index *f64) SecretsmanagerSecretTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecretsmanagerSecretTagsOutputReference <a name="SecretsmanagerSecretTagsOutputReference" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/secretsmanagersecret"

secretsmanagersecret.NewSecretsmanagerSecretTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecretsmanagerSecretTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




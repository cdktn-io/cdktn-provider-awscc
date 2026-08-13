# `kmsKey` Submodule <a name="`kmsKey` Submodule" id="@cdktn/provider-awscc.kmsKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsKey <a name="KmsKey" id="@cdktn/provider-awscc.kmsKey.KmsKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kms_key awscc_kms_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kmsKey.KmsKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kmskey"

kmskey.NewKmsKey(scope Construct, id *string, config KmsKeyConfig) KmsKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig">KmsKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kmsKey.KmsKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kmsKey.KmsKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.kmsKey.KmsKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig">KmsKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.resetBypassPolicyLockoutSafetyCheck">ResetBypassPolicyLockoutSafetyCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.resetEnableKeyRotation">ResetEnableKeyRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.resetKeyPolicy">ResetKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.resetKeySpec">ResetKeySpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.resetKeyUsage">ResetKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.resetMultiRegion">ResetMultiRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.resetOrigin">ResetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.resetPendingWindowInDays">ResetPendingWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.resetRotationPeriodInDays">ResetRotationPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kmsKey.KmsKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.kmsKey.KmsKey.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kmsKey.KmsKey.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.kmsKey.KmsKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kmsKey.KmsKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kmsKey.KmsKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.kmsKey.KmsKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kmsKey.KmsKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.kmsKey.KmsKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.kmsKey.KmsKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.kmsKey.KmsKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.kmsKey.KmsKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.kmsKey.KmsKey.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kmsKey.KmsKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.kmsKey.KmsKey.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.kmsKey.KmsKey.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kmsKey.KmsKey.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kmsKey.KmsKey.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.kmsKey.KmsKey.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kmsKey.KmsKey.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.kmsKey.KmsKey.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kmsKey.KmsKey.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kmsKey.KmsKey.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.kmsKey.KmsKey.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kmsKey.KmsKey.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.kmsKey.KmsKey.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kmsKey.KmsKey.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBypassPolicyLockoutSafetyCheck` <a name="ResetBypassPolicyLockoutSafetyCheck" id="@cdktn/provider-awscc.kmsKey.KmsKey.resetBypassPolicyLockoutSafetyCheck"></a>

```go
func ResetBypassPolicyLockoutSafetyCheck()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.kmsKey.KmsKey.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.kmsKey.KmsKey.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEnableKeyRotation` <a name="ResetEnableKeyRotation" id="@cdktn/provider-awscc.kmsKey.KmsKey.resetEnableKeyRotation"></a>

```go
func ResetEnableKeyRotation()
```

##### `ResetKeyPolicy` <a name="ResetKeyPolicy" id="@cdktn/provider-awscc.kmsKey.KmsKey.resetKeyPolicy"></a>

```go
func ResetKeyPolicy()
```

##### `ResetKeySpec` <a name="ResetKeySpec" id="@cdktn/provider-awscc.kmsKey.KmsKey.resetKeySpec"></a>

```go
func ResetKeySpec()
```

##### `ResetKeyUsage` <a name="ResetKeyUsage" id="@cdktn/provider-awscc.kmsKey.KmsKey.resetKeyUsage"></a>

```go
func ResetKeyUsage()
```

##### `ResetMultiRegion` <a name="ResetMultiRegion" id="@cdktn/provider-awscc.kmsKey.KmsKey.resetMultiRegion"></a>

```go
func ResetMultiRegion()
```

##### `ResetOrigin` <a name="ResetOrigin" id="@cdktn/provider-awscc.kmsKey.KmsKey.resetOrigin"></a>

```go
func ResetOrigin()
```

##### `ResetPendingWindowInDays` <a name="ResetPendingWindowInDays" id="@cdktn/provider-awscc.kmsKey.KmsKey.resetPendingWindowInDays"></a>

```go
func ResetPendingWindowInDays()
```

##### `ResetRotationPeriodInDays` <a name="ResetRotationPeriodInDays" id="@cdktn/provider-awscc.kmsKey.KmsKey.resetRotationPeriodInDays"></a>

```go
func ResetRotationPeriodInDays()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.kmsKey.KmsKey.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KmsKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.kmsKey.KmsKey.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kmskey"

kmskey.KmsKey_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kmsKey.KmsKey.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.kmsKey.KmsKey.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kmskey"

kmskey.KmsKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kmsKey.KmsKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.kmsKey.KmsKey.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kmskey"

kmskey.KmsKey_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kmsKey.KmsKey.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.kmsKey.KmsKey.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kmskey"

kmskey.KmsKey_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a KmsKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kmsKey.KmsKey.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kmsKey.KmsKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KmsKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kmsKey.KmsKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KmsKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kms_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kmsKey.KmsKey.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the KmsKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsList">KmsKeyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.bypassPolicyLockoutSafetyCheckInput">BypassPolicyLockoutSafetyCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.enableKeyRotationInput">EnableKeyRotationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.keyPolicyInput">KeyPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.keySpecInput">KeySpecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.keyUsageInput">KeyUsageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.multiRegionInput">MultiRegionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.originInput">OriginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.pendingWindowInDaysInput">PendingWindowInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.rotationPeriodInDaysInput">RotationPeriodInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.bypassPolicyLockoutSafetyCheck">BypassPolicyLockoutSafetyCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.enableKeyRotation">EnableKeyRotation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.keyPolicy">KeyPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.keySpec">KeySpec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.keyUsage">KeyUsage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.multiRegion">MultiRegion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.origin">Origin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.pendingWindowInDays">PendingWindowInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.rotationPeriodInDays">RotationPeriodInDays</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.tags"></a>

```go
func Tags() KmsKeyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsList">KmsKeyTagsList</a>

---

##### `BypassPolicyLockoutSafetyCheckInput`<sup>Optional</sup> <a name="BypassPolicyLockoutSafetyCheckInput" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.bypassPolicyLockoutSafetyCheckInput"></a>

```go
func BypassPolicyLockoutSafetyCheckInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnableKeyRotationInput`<sup>Optional</sup> <a name="EnableKeyRotationInput" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.enableKeyRotationInput"></a>

```go
func EnableKeyRotationInput() interface{}
```

- *Type:* interface{}

---

##### `KeyPolicyInput`<sup>Optional</sup> <a name="KeyPolicyInput" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.keyPolicyInput"></a>

```go
func KeyPolicyInput() *string
```

- *Type:* *string

---

##### `KeySpecInput`<sup>Optional</sup> <a name="KeySpecInput" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.keySpecInput"></a>

```go
func KeySpecInput() *string
```

- *Type:* *string

---

##### `KeyUsageInput`<sup>Optional</sup> <a name="KeyUsageInput" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.keyUsageInput"></a>

```go
func KeyUsageInput() *string
```

- *Type:* *string

---

##### `MultiRegionInput`<sup>Optional</sup> <a name="MultiRegionInput" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.multiRegionInput"></a>

```go
func MultiRegionInput() interface{}
```

- *Type:* interface{}

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.originInput"></a>

```go
func OriginInput() *string
```

- *Type:* *string

---

##### `PendingWindowInDaysInput`<sup>Optional</sup> <a name="PendingWindowInDaysInput" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.pendingWindowInDaysInput"></a>

```go
func PendingWindowInDaysInput() *f64
```

- *Type:* *f64

---

##### `RotationPeriodInDaysInput`<sup>Optional</sup> <a name="RotationPeriodInDaysInput" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.rotationPeriodInDaysInput"></a>

```go
func RotationPeriodInDaysInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `BypassPolicyLockoutSafetyCheck`<sup>Required</sup> <a name="BypassPolicyLockoutSafetyCheck" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.bypassPolicyLockoutSafetyCheck"></a>

```go
func BypassPolicyLockoutSafetyCheck() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EnableKeyRotation`<sup>Required</sup> <a name="EnableKeyRotation" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.enableKeyRotation"></a>

```go
func EnableKeyRotation() interface{}
```

- *Type:* interface{}

---

##### `KeyPolicy`<sup>Required</sup> <a name="KeyPolicy" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.keyPolicy"></a>

```go
func KeyPolicy() *string
```

- *Type:* *string

---

##### `KeySpec`<sup>Required</sup> <a name="KeySpec" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.keySpec"></a>

```go
func KeySpec() *string
```

- *Type:* *string

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.keyUsage"></a>

```go
func KeyUsage() *string
```

- *Type:* *string

---

##### `MultiRegion`<sup>Required</sup> <a name="MultiRegion" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.multiRegion"></a>

```go
func MultiRegion() interface{}
```

- *Type:* interface{}

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.origin"></a>

```go
func Origin() *string
```

- *Type:* *string

---

##### `PendingWindowInDays`<sup>Required</sup> <a name="PendingWindowInDays" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.pendingWindowInDays"></a>

```go
func PendingWindowInDays() *f64
```

- *Type:* *f64

---

##### `RotationPeriodInDays`<sup>Required</sup> <a name="RotationPeriodInDays" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.rotationPeriodInDays"></a>

```go
func RotationPeriodInDays() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.kmsKey.KmsKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsKeyConfig <a name="KmsKeyConfig" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kmskey"

&kmskey.KmsKeyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BypassPolicyLockoutSafetyCheck: interface{},
	Description: *string,
	Enabled: interface{},
	EnableKeyRotation: interface{},
	KeyPolicy: *string,
	KeySpec: *string,
	KeyUsage: *string,
	MultiRegion: interface{},
	Origin: *string,
	PendingWindowInDays: *f64,
	RotationPeriodInDays: *f64,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.bypassPolicyLockoutSafetyCheck">BypassPolicyLockoutSafetyCheck</a></code> | <code>interface{}</code> | Skips ("bypasses") the key policy lockout safety check. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.description">Description</a></code> | <code>*string</code> | A description of the KMS key. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether the KMS key is enabled. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.enableKeyRotation">EnableKeyRotation</a></code> | <code>interface{}</code> | Enables automatic rotation of the key material for the specified KMS key. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.keyPolicy">KeyPolicy</a></code> | <code>*string</code> | The key policy to attach to the KMS key. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.keySpec">KeySpec</a></code> | <code>*string</code> | Specifies the type of KMS key to create. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.keyUsage">KeyUsage</a></code> | <code>*string</code> | Determines the [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations) for which you can use the KMS key. The default value is ``ENCRYPT_DECRYPT``. This property is required for asymmetric KMS keys and HMAC KMS keys. You can't change the ``KeyUsage`` value after the KMS key is created.   If you change the value of the ``KeyUsage`` property on an existing KMS key, the update request fails, regardless of the value of the [UpdateReplacePolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html). This prevents you from accidentally deleting a KMS key by changing an immutable property value.   Select only one valid value.   +  For symmetric encryption KMS keys, omit the parameter or specify ``ENCRYPT_DECRYPT``.   +  For HMAC KMS keys (symmetric), specify ``GENERATE_VERIFY_MAC``.   +  For asymmetric KMS keys with RSA key pairs, specify ``ENCRYPT_DECRYPT`` or ``SIGN_VERIFY``.   +  For asymmetric KMS keys with NIST-recommended elliptic curve key pairs, specify ``SIGN_VERIFY`` or ``KEY_AGREEMENT``.   +  For asymmetric KMS keys with ``ECC_SECG_P256K1`` key pairs, specify ``SIGN_VERIFY``.   +  For asymmetric KMS keys with ML-DSA key pairs, specify ``SIGN_VERIFY``.   +  For asymmetric KMS keys with SM2 key pairs (China Regions only), specify ``ENCRYPT_DECRYPT``, ``SIGN_VERIFY``, or ``KEY_AGREEMENT``. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.multiRegion">MultiRegion</a></code> | <code>interface{}</code> | Creates a multi-Region primary key that you can replicate in other AWS-Regions. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.origin">Origin</a></code> | <code>*string</code> | The source of the key material for the KMS key. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.pendingWindowInDays">PendingWindowInDays</a></code> | <code>*f64</code> | Specifies the number of days in the waiting period before KMS deletes a KMS key that has been removed from a CloudFormation stack. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.rotationPeriodInDays">RotationPeriodInDays</a></code> | <code>*f64</code> | Specifies a custom period of time between each rotation date. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Assigns one or more tags to the replica key. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BypassPolicyLockoutSafetyCheck`<sup>Optional</sup> <a name="BypassPolicyLockoutSafetyCheck" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.bypassPolicyLockoutSafetyCheck"></a>

```go
BypassPolicyLockoutSafetyCheck interface{}
```

- *Type:* interface{}

Skips ("bypasses") the key policy lockout safety check.

The default value is false.
Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not set this value to true indiscriminately.
For more information, see [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-default.html#prevent-unmanageable-key) in the *Developer Guide*.
Use this parameter only when you intend to prevent the principal that is making the request from making a subsequent [PutKeyPolicy](https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html) request on the KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kms_key#bypass_policy_lockout_safety_check KmsKey#bypass_policy_lockout_safety_check}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the KMS key.

Use a description that helps you to distinguish this KMS key from others in the account, such as its intended use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kms_key#description KmsKey#description}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether the KMS key is enabled.

Disabled KMS keys cannot be used in cryptographic operations.
When `Enabled` is `true`, the *key state* of the KMS key is `Enabled`. When `Enabled` is `false`, the key state of the KMS key is `Disabled`. The default value is `true`.
The actual key state of the KMS key might be affected by actions taken outside of CloudFormation, such as running the [EnableKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKey.html), [DisableKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_DisableKey.html), or [ScheduleKeyDeletion](https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html) operations.
For information about the key states of a KMS key, see [Key state: Effect on your KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kms_key#enabled KmsKey#enabled}

---

##### `EnableKeyRotation`<sup>Optional</sup> <a name="EnableKeyRotation" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.enableKeyRotation"></a>

```go
EnableKeyRotation interface{}
```

- *Type:* interface{}

Enables automatic rotation of the key material for the specified KMS key.

By default, automatic key rotation is not enabled.
KMS supports automatic rotation only for symmetric encryption KMS keys (`KeySpec` = `SYMMETRIC_DEFAULT`). For asymmetric KMS keys, HMAC KMS keys, and KMS keys with Origin `EXTERNAL`, omit the `EnableKeyRotation` property or set it to `false`.
To enable automatic key rotation of the key material for a multi-Region KMS key, set `EnableKeyRotation` to `true` on the primary key (created by using `AWS::KMS::Key`). KMS copies the rotation status to all replica keys. For details, see [Rotating multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-manage.html#multi-region-rotate) in the *Developer Guide*.
When you enable automatic rotation, KMS automatically creates new key material for the KMS key one year after the enable date and every year thereafter. KMS retains all key material until you delete the KMS key. For detailed information about automatic key rotation, see [Rotating KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kms_key#enable_key_rotation KmsKey#enable_key_rotation}

---

##### `KeyPolicy`<sup>Optional</sup> <a name="KeyPolicy" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.keyPolicy"></a>

```go
KeyPolicy *string
```

- *Type:* *string

The key policy to attach to the KMS key.

If you provide a key policy, it must meet the following criteria:

* The key policy must allow the caller to make a subsequent [PutKeyPolicy](https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html) request on the KMS key. This reduces the risk that the KMS key becomes unmanageable. For more information, see [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam) in the *Developer Guide*. (To omit this condition, set `BypassPolicyLockoutSafetyCheck` to true.)
* Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to KMS. When you create a new AWS principal (for example, an IAM user or role), you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to KMS. For more information, see [Changes that I make are not always immediately visible](https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency) in the *User Guide*.

If you do not provide a key policy, KMS attaches a default key policy to the KMS key. For more information, see [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default) in the *Developer Guide*.
A key policy document can include only the following characters:

* Printable ASCII characters
* Printable characters in the Basic Latin and Latin-1 Supplement character set
* The tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`) special characters

*Minimum*: `1`
*Maximum*: `32768`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kms_key#key_policy KmsKey#key_policy}

---

##### `KeySpec`<sup>Optional</sup> <a name="KeySpec" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.keySpec"></a>

```go
KeySpec *string
```

- *Type:* *string

Specifies the type of KMS key to create.

The default value, `SYMMETRIC_DEFAULT`, creates a KMS key with a 256-bit symmetric key for encryption and decryption. In China Regions, `SYMMETRIC_DEFAULT` creates a 128-bit symmetric key that uses SM4 encryption. You can't change the `KeySpec` value after the KMS key is created. For help choosing a key spec for your KMS key, see [Choosing a KMS key type](https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-choose.html) in the *Developer Guide*.
The `KeySpec` property determines the type of key material in the KMS key and the algorithms that the KMS key supports. To further restrict the algorithms that can be used with the KMS key, use a condition key in its key policy or IAM policy. For more information, see [condition keys](https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms) in the *Developer Guide*.
If you change the value of the `KeySpec` property on an existing KMS key, the update request fails, regardless of the value of the [UpdateReplacePolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html). This prevents you from accidentally deleting a KMS key by changing an immutable property value.
[services that are integrated with](https://docs.aws.amazon.com/kms/features/#AWS_Service_Integration) use symmetric encryption KMS keys to protect your data. These services do not support encryption with asymmetric KMS keys. For help determining whether a KMS key is asymmetric, see [Identifying asymmetric KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/find-symm-asymm.html) in the *Developer Guide*.
KMS supports the following key specs for KMS keys:

* Symmetric encryption key (default)
* `SYMMETRIC_DEFAULT` (AES-256-GCM)
* HMAC keys (symmetric)
* `HMAC_224`
* `HMAC_256`
* `HMAC_384`
* `HMAC_512`
* Asymmetric RSA key pairs (encryption and decryption *or* signing and verification)
* `RSA_2048`
* `RSA_3072`
* `RSA_4096`
* Asymmetric NIST-recommended elliptic curve key pairs (signing and verification *or* deriving shared secrets)
* `ECC_NIST_P256` (secp256r1)
* `ECC_NIST_P384` (secp384r1)
* `ECC_NIST_P521` (secp521r1)
* `ECC_NIST_EDWARDS25519` (ed25519) - signing and verification only
* *Note:* For ECC_NIST_EDWARDS25519 KMS keys, the ED25519_SHA_512 signing algorithm requires [MessageType:RAW](https://docs.aws.amazon.com/kms/latest/APIReference/API_Sign.html#KMS-Sign-request-MessageType), while ED25519_PH_SHA_512 requires [MessageType:DIGEST](https://docs.aws.amazon.com/kms/latest/APIReference/API_Sign.html#KMS-Sign-request-MessageType). These message types cannot be used interchangeably.
* Other asymmetric elliptic curve key pairs (signing and verification)
* `ECC_SECG_P256K1` (secp256k1), commonly used for cryptocurrencies.
* Asymmetric ML-DSA key pairs (signing and verification)
* `ML_DSA_44`
* `ML_DSA_65`
* `ML_DSA_87`
* SM2 key pairs (encryption and decryption *or* signing and verification *or* deriving shared secrets)
* `SM2` (China Regions only)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kms_key#key_spec KmsKey#key_spec}

---

##### `KeyUsage`<sup>Optional</sup> <a name="KeyUsage" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.keyUsage"></a>

```go
KeyUsage *string
```

- *Type:* *string

Determines the [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations) for which you can use the KMS key. The default value is ``ENCRYPT_DECRYPT``. This property is required for asymmetric KMS keys and HMAC KMS keys. You can't change the ``KeyUsage`` value after the KMS key is created.   If you change the value of the ``KeyUsage`` property on an existing KMS key, the update request fails, regardless of the value of the [UpdateReplacePolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html). This prevents you from accidentally deleting a KMS key by changing an immutable property value.   Select only one valid value.   +  For symmetric encryption KMS keys, omit the parameter or specify ``ENCRYPT_DECRYPT``.   +  For HMAC KMS keys (symmetric), specify ``GENERATE_VERIFY_MAC``.   +  For asymmetric KMS keys with RSA key pairs, specify ``ENCRYPT_DECRYPT`` or ``SIGN_VERIFY``.   +  For asymmetric KMS keys with NIST-recommended elliptic curve key pairs, specify ``SIGN_VERIFY`` or ``KEY_AGREEMENT``.   +  For asymmetric KMS keys with ``ECC_SECG_P256K1`` key pairs, specify ``SIGN_VERIFY``.   +  For asymmetric KMS keys with ML-DSA key pairs, specify ``SIGN_VERIFY``.   +  For asymmetric KMS keys with SM2 key pairs (China Regions only), specify ``ENCRYPT_DECRYPT``, ``SIGN_VERIFY``, or ``KEY_AGREEMENT``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kms_key#key_usage KmsKey#key_usage}

---

##### `MultiRegion`<sup>Optional</sup> <a name="MultiRegion" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.multiRegion"></a>

```go
MultiRegion interface{}
```

- *Type:* interface{}

Creates a multi-Region primary key that you can replicate in other AWS-Regions.

You can't change the `MultiRegion` value after the KMS key is created.
For a list of AWS-Regions in which multi-Region keys are supported, see [Multi-Region keys in](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the **.
If you change the value of the `MultiRegion` property on an existing KMS key, the update request fails, regardless of the value of the [UpdateReplacePolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html). This prevents you from accidentally deleting a KMS key by changing an immutable property value.
For a multi-Region key, set to this property to `true`. For a single-Region key, omit this property or set it to `false`. The default value is `false`.
*Multi-Region keys* are an KMS feature that lets you create multiple interoperable KMS keys in different AWS-Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them to encrypt data in one AWS-Region and decrypt it in a different AWS-Region without making a cross-Region call or exposing the plaintext data. For more information, see [Multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the *Developer Guide*.
You can create a symmetric encryption, HMAC, or asymmetric multi-Region KMS key, and you can create a multi-Region key with imported key material. However, you cannot create a multi-Region key in a custom key store.
To create a replica of this primary key in a different AWS-Region , create an [AWS::KMS::ReplicaKey](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html) resource in a CloudFormation stack in the replica Region. Specify the key ARN of this primary key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kms_key#multi_region KmsKey#multi_region}

---

##### `Origin`<sup>Optional</sup> <a name="Origin" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.origin"></a>

```go
Origin *string
```

- *Type:* *string

The source of the key material for the KMS key.

You cannot change the origin after you create the KMS key. The default is `AWS_KMS`, which means that KMS creates the key material.
To [create a KMS key with no key material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-create-cmk.html) (for imported key material), set this value to `EXTERNAL`. For more information about importing key material into KMS, see [Importing Key Material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html) in the *Developer Guide*.
You can ignore `ENABLED` when Origin is `EXTERNAL`. When a KMS key with Origin `EXTERNAL` is created, the key state is `PENDING_IMPORT` and `ENABLED` is `false`. After you import the key material, `ENABLED` updated to `true`. The KMS key can then be used for Cryptographic Operations.

* CFN doesn't support creating an `Origin` parameter of the `AWS_CLOUDHSM` or `EXTERNAL_KEY_STORE` values.
* `EXTERNAL` is not supported for ML-DSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kms_key#origin KmsKey#origin}

---

##### `PendingWindowInDays`<sup>Optional</sup> <a name="PendingWindowInDays" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.pendingWindowInDays"></a>

```go
PendingWindowInDays *f64
```

- *Type:* *f64

Specifies the number of days in the waiting period before KMS deletes a KMS key that has been removed from a CloudFormation stack.

Enter a value between 7 and 30 days. The default value is 30 days.
When you remove a KMS key from a CloudFormation stack, KMS schedules the KMS key for deletion and starts the mandatory waiting period. The `PendingWindowInDays` property determines the length of waiting period. During the waiting period, the key state of KMS key is `Pending Deletion` or `Pending Replica Deletion`, which prevents the KMS key from being used in cryptographic operations. When the waiting period expires, KMS permanently deletes the KMS key.
KMS will not delete a [multi-Region primary key](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) that has replica keys. If you remove a multi-Region primary key from a CloudFormation stack, its key state changes to `PendingReplicaDeletion` so it cannot be replicated or used in cryptographic operations. This state can persist indefinitely. When the last of its replica keys is deleted, the key state of the primary key changes to `PendingDeletion` and the waiting period specified by `PendingWindowInDays` begins. When this waiting period expires, KMS deletes the primary key. For details, see [Deleting multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-delete.html) in the *Developer Guide*.
You cannot use a CloudFormation template to cancel deletion of the KMS key after you remove it from the stack, regardless of the waiting period. If you specify a KMS key in your template, even one with the same name, CloudFormation creates a new KMS key. To cancel deletion of a KMS key, use the KMS console or the [CancelKeyDeletion](https://docs.aws.amazon.com/kms/latest/APIReference/API_CancelKeyDeletion.html) operation.
For information about the `Pending Deletion` and `Pending Replica Deletion` key states, see [Key state: Effect on your KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Developer Guide*. For more information about deleting KMS keys, see the [ScheduleKeyDeletion](https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html) operation in the *API Reference* and [Deleting KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kms_key#pending_window_in_days KmsKey#pending_window_in_days}

---

##### `RotationPeriodInDays`<sup>Optional</sup> <a name="RotationPeriodInDays" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.rotationPeriodInDays"></a>

```go
RotationPeriodInDays *f64
```

- *Type:* *f64

Specifies a custom period of time between each rotation date.

If no value is specified, the default value is 365 days.
The rotation period defines the number of days after you enable automatic key rotation that KMS will rotate your key material, and the number of days between each automatic rotation thereafter.
You can use the [kms:RotationPeriodInDays](https://docs.aws.amazon.com/kms/latest/developerguide/conditions-kms.html#conditions-kms-rotation-period-in-days) condition key to further constrain the values that principals can specify in the `RotationPeriodInDays` parameter.
For more information about rotating KMS keys and automatic rotation, see [Rotating keys](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html) in the *Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kms_key#rotation_period_in_days KmsKey#rotation_period_in_days}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.kmsKey.KmsKeyConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Assigns one or more tags to the replica key.

Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see [ABAC for](https://docs.aws.amazon.com/kms/latest/developerguide/abac.html) in the *Developer Guide*.
For information about tags in KMS, see [Tagging keys](https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html) in the *Developer Guide*. For information about tags in CloudFormation, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kms_key#tags KmsKey#tags}

---

### KmsKeyTags <a name="KmsKeyTags" id="@cdktn/provider-awscc.kmsKey.KmsKeyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kmsKey.KmsKeyTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kmskey"

&kmskey.KmsKeyTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.kmsKey.KmsKeyTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with `aws:`. digits, whitespace, `_`, `.`, `:`, `/`, `=`, `+`, `@`, `-`, and `"`.
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kms_key#key KmsKey#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.kmsKey.KmsKeyTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/kms_key#value KmsKey#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KmsKeyTagsList <a name="KmsKeyTagsList" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kmskey"

kmskey.NewKmsKeyTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KmsKeyTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.get"></a>

```go
func Get(index *f64) KmsKeyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### KmsKeyTagsOutputReference <a name="KmsKeyTagsOutputReference" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/kmskey"

kmskey.NewKmsKeyTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KmsKeyTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kmsKey.KmsKeyTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




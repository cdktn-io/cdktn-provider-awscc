# `resiliencehubv2Policy` Submodule <a name="`resiliencehubv2Policy` Submodule" id="@cdktn/provider-awscc.resiliencehubv2Policy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resiliencehubv2Policy <a name="Resiliencehubv2Policy" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy awscc_resiliencehubv2_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubv2policy"

resiliencehubv2policy.NewResiliencehubv2Policy(scope Construct, id *string, config Resiliencehubv2PolicyConfig) Resiliencehubv2Policy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig">Resiliencehubv2PolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig">Resiliencehubv2PolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putAvailabilitySlo">PutAvailabilitySlo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putDataRecovery">PutDataRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiAz">PutMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiRegion">PutMultiRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetAvailabilitySlo">ResetAvailabilitySlo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetDataRecovery">ResetDataRecovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetMultiAz">ResetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetMultiRegion">ResetMultiRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAvailabilitySlo` <a name="PutAvailabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putAvailabilitySlo"></a>

```go
func PutAvailabilitySlo(value Resiliencehubv2PolicyAvailabilitySlo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putAvailabilitySlo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>

---

##### `PutDataRecovery` <a name="PutDataRecovery" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putDataRecovery"></a>

```go
func PutDataRecovery(value Resiliencehubv2PolicyDataRecovery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putDataRecovery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>

---

##### `PutMultiAz` <a name="PutMultiAz" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiAz"></a>

```go
func PutMultiAz(value Resiliencehubv2PolicyMultiAz)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiAz.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>

---

##### `PutMultiRegion` <a name="PutMultiRegion" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiRegion"></a>

```go
func PutMultiRegion(value Resiliencehubv2PolicyMultiRegion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putMultiRegion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilitySlo` <a name="ResetAvailabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetAvailabilitySlo"></a>

```go
func ResetAvailabilitySlo()
```

##### `ResetDataRecovery` <a name="ResetDataRecovery" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetDataRecovery"></a>

```go
func ResetDataRecovery()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetMultiAz` <a name="ResetMultiAz" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetMultiAz"></a>

```go
func ResetMultiAz()
```

##### `ResetMultiRegion` <a name="ResetMultiRegion" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetMultiRegion"></a>

```go
func ResetMultiRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Resiliencehubv2Policy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubv2policy"

resiliencehubv2policy.Resiliencehubv2Policy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubv2policy"

resiliencehubv2policy.Resiliencehubv2Policy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubv2policy"

resiliencehubv2policy.Resiliencehubv2Policy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubv2policy"

resiliencehubv2policy.Resiliencehubv2Policy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Resiliencehubv2Policy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Resiliencehubv2Policy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Resiliencehubv2Policy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Resiliencehubv2Policy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.associatedServiceCount">AssociatedServiceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.availabilitySlo">AvailabilitySlo</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference">Resiliencehubv2PolicyAvailabilitySloOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.dataRecovery">DataRecovery</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference">Resiliencehubv2PolicyDataRecoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiAz">MultiAz</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference">Resiliencehubv2PolicyMultiAzOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiRegion">MultiRegion</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference">Resiliencehubv2PolicyMultiRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.policyArn">PolicyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList">Resiliencehubv2PolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.availabilitySloInput">AvailabilitySloInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.dataRecoveryInput">DataRecoveryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiAzInput">MultiAzInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiRegionInput">MultiRegionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociatedServiceCount`<sup>Required</sup> <a name="AssociatedServiceCount" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.associatedServiceCount"></a>

```go
func AssociatedServiceCount() *f64
```

- *Type:* *f64

---

##### `AvailabilitySlo`<sup>Required</sup> <a name="AvailabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.availabilitySlo"></a>

```go
func AvailabilitySlo() Resiliencehubv2PolicyAvailabilitySloOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference">Resiliencehubv2PolicyAvailabilitySloOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DataRecovery`<sup>Required</sup> <a name="DataRecovery" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.dataRecovery"></a>

```go
func DataRecovery() Resiliencehubv2PolicyDataRecoveryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference">Resiliencehubv2PolicyDataRecoveryOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiAz"></a>

```go
func MultiAz() Resiliencehubv2PolicyMultiAzOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference">Resiliencehubv2PolicyMultiAzOutputReference</a>

---

##### `MultiRegion`<sup>Required</sup> <a name="MultiRegion" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiRegion"></a>

```go
func MultiRegion() Resiliencehubv2PolicyMultiRegionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference">Resiliencehubv2PolicyMultiRegionOutputReference</a>

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.policyArn"></a>

```go
func PolicyArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.tags"></a>

```go
func Tags() Resiliencehubv2PolicyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList">Resiliencehubv2PolicyTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AvailabilitySloInput`<sup>Optional</sup> <a name="AvailabilitySloInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.availabilitySloInput"></a>

```go
func AvailabilitySloInput() interface{}
```

- *Type:* interface{}

---

##### `DataRecoveryInput`<sup>Optional</sup> <a name="DataRecoveryInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.dataRecoveryInput"></a>

```go
func DataRecoveryInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `MultiAzInput`<sup>Optional</sup> <a name="MultiAzInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiAzInput"></a>

```go
func MultiAzInput() interface{}
```

- *Type:* interface{}

---

##### `MultiRegionInput`<sup>Optional</sup> <a name="MultiRegionInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.multiRegionInput"></a>

```go
func MultiRegionInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2Policy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Resiliencehubv2PolicyAvailabilitySlo <a name="Resiliencehubv2PolicyAvailabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubv2policy"

&resiliencehubv2policy.Resiliencehubv2PolicyAvailabilitySlo {
	Target: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo.property.target">Target</a></code> | <code>*f64</code> | Availability target percentage. |

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo.property.target"></a>

```go
Target *f64
```

- *Type:* *f64

Availability target percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#target Resiliencehubv2Policy#target}

---

### Resiliencehubv2PolicyConfig <a name="Resiliencehubv2PolicyConfig" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubv2policy"

&resiliencehubv2policy.Resiliencehubv2PolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AvailabilitySlo: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo,
	DataRecovery: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery,
	Description: *string,
	KmsKeyId: *string,
	MultiAz: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz,
	MultiRegion: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.name">Name</a></code> | <code>*string</code> | The name of the policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.availabilitySlo">AvailabilitySlo</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#availability_slo Resiliencehubv2Policy#availability_slo}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.dataRecovery">DataRecovery</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#data_recovery Resiliencehubv2Policy#data_recovery}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.description">Description</a></code> | <code>*string</code> | The description of the policy. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The KMS key ID for encrypting policy data. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.multiAz">MultiAz</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#multi_az Resiliencehubv2Policy#multi_az}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.multiRegion">MultiRegion</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#multi_region Resiliencehubv2Policy#multi_region}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags assigned to the policy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#name Resiliencehubv2Policy#name}

---

##### `AvailabilitySlo`<sup>Optional</sup> <a name="AvailabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.availabilitySlo"></a>

```go
AvailabilitySlo Resiliencehubv2PolicyAvailabilitySlo
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySlo">Resiliencehubv2PolicyAvailabilitySlo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#availability_slo Resiliencehubv2Policy#availability_slo}.

---

##### `DataRecovery`<sup>Optional</sup> <a name="DataRecovery" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.dataRecovery"></a>

```go
DataRecovery Resiliencehubv2PolicyDataRecovery
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery">Resiliencehubv2PolicyDataRecovery</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#data_recovery Resiliencehubv2Policy#data_recovery}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#description Resiliencehubv2Policy#description}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The KMS key ID for encrypting policy data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#kms_key_id Resiliencehubv2Policy#kms_key_id}

---

##### `MultiAz`<sup>Optional</sup> <a name="MultiAz" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.multiAz"></a>

```go
MultiAz Resiliencehubv2PolicyMultiAz
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz">Resiliencehubv2PolicyMultiAz</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#multi_az Resiliencehubv2Policy#multi_az}.

---

##### `MultiRegion`<sup>Optional</sup> <a name="MultiRegion" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.multiRegion"></a>

```go
MultiRegion Resiliencehubv2PolicyMultiRegion
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion">Resiliencehubv2PolicyMultiRegion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#multi_region Resiliencehubv2Policy#multi_region}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags assigned to the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#tags Resiliencehubv2Policy#tags}

---

### Resiliencehubv2PolicyDataRecovery <a name="Resiliencehubv2PolicyDataRecovery" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubv2policy"

&resiliencehubv2policy.Resiliencehubv2PolicyDataRecovery {
	TimeBetweenBackupsInMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery.property.timeBetweenBackupsInMinutes">TimeBetweenBackupsInMinutes</a></code> | <code>*f64</code> | Time between backups in minutes. |

---

##### `TimeBetweenBackupsInMinutes`<sup>Optional</sup> <a name="TimeBetweenBackupsInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecovery.property.timeBetweenBackupsInMinutes"></a>

```go
TimeBetweenBackupsInMinutes *f64
```

- *Type:* *f64

Time between backups in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#time_between_backups_in_minutes Resiliencehubv2Policy#time_between_backups_in_minutes}

---

### Resiliencehubv2PolicyMultiAz <a name="Resiliencehubv2PolicyMultiAz" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubv2policy"

&resiliencehubv2policy.Resiliencehubv2PolicyMultiAz {
	DisasterRecoveryApproach: *string,
	RpoInMinutes: *f64,
	RtoInMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.disasterRecoveryApproach">DisasterRecoveryApproach</a></code> | <code>*string</code> | Multi-AZ disaster recovery approach. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.rpoInMinutes">RpoInMinutes</a></code> | <code>*f64</code> | Recovery Point Objective in minutes. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.rtoInMinutes">RtoInMinutes</a></code> | <code>*f64</code> | Recovery Time Objective in minutes. |

---

##### `DisasterRecoveryApproach`<sup>Optional</sup> <a name="DisasterRecoveryApproach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.disasterRecoveryApproach"></a>

```go
DisasterRecoveryApproach *string
```

- *Type:* *string

Multi-AZ disaster recovery approach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#disaster_recovery_approach Resiliencehubv2Policy#disaster_recovery_approach}

---

##### `RpoInMinutes`<sup>Optional</sup> <a name="RpoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.rpoInMinutes"></a>

```go
RpoInMinutes *f64
```

- *Type:* *f64

Recovery Point Objective in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#rpo_in_minutes Resiliencehubv2Policy#rpo_in_minutes}

---

##### `RtoInMinutes`<sup>Optional</sup> <a name="RtoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAz.property.rtoInMinutes"></a>

```go
RtoInMinutes *f64
```

- *Type:* *f64

Recovery Time Objective in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#rto_in_minutes Resiliencehubv2Policy#rto_in_minutes}

---

### Resiliencehubv2PolicyMultiRegion <a name="Resiliencehubv2PolicyMultiRegion" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubv2policy"

&resiliencehubv2policy.Resiliencehubv2PolicyMultiRegion {
	DisasterRecoveryApproach: *string,
	RpoInMinutes: *f64,
	RtoInMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.disasterRecoveryApproach">DisasterRecoveryApproach</a></code> | <code>*string</code> | Multi-Region disaster recovery approach. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.rpoInMinutes">RpoInMinutes</a></code> | <code>*f64</code> | Recovery Point Objective in minutes. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.rtoInMinutes">RtoInMinutes</a></code> | <code>*f64</code> | Recovery Time Objective in minutes. |

---

##### `DisasterRecoveryApproach`<sup>Optional</sup> <a name="DisasterRecoveryApproach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.disasterRecoveryApproach"></a>

```go
DisasterRecoveryApproach *string
```

- *Type:* *string

Multi-Region disaster recovery approach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#disaster_recovery_approach Resiliencehubv2Policy#disaster_recovery_approach}

---

##### `RpoInMinutes`<sup>Optional</sup> <a name="RpoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.rpoInMinutes"></a>

```go
RpoInMinutes *f64
```

- *Type:* *f64

Recovery Point Objective in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#rpo_in_minutes Resiliencehubv2Policy#rpo_in_minutes}

---

##### `RtoInMinutes`<sup>Optional</sup> <a name="RtoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegion.property.rtoInMinutes"></a>

```go
RtoInMinutes *f64
```

- *Type:* *f64

Recovery Time Objective in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#rto_in_minutes Resiliencehubv2Policy#rto_in_minutes}

---

### Resiliencehubv2PolicyTags <a name="Resiliencehubv2PolicyTags" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubv2policy"

&resiliencehubv2policy.Resiliencehubv2PolicyTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags.property.key">Key</a></code> | <code>*string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags.property.value">Value</a></code> | <code>*string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#key Resiliencehubv2Policy#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/resiliencehubv2_policy#value Resiliencehubv2Policy#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Resiliencehubv2PolicyAvailabilitySloOutputReference <a name="Resiliencehubv2PolicyAvailabilitySloOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubv2policy"

resiliencehubv2policy.NewResiliencehubv2PolicyAvailabilitySloOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Resiliencehubv2PolicyAvailabilitySloOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.resetTarget"></a>

```go
func ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.targetInput">TargetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.target">Target</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.targetInput"></a>

```go
func TargetInput() *f64
```

- *Type:* *f64

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.target"></a>

```go
func Target() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyAvailabilitySloOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Resiliencehubv2PolicyDataRecoveryOutputReference <a name="Resiliencehubv2PolicyDataRecoveryOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubv2policy"

resiliencehubv2policy.NewResiliencehubv2PolicyDataRecoveryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Resiliencehubv2PolicyDataRecoveryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resetTimeBetweenBackupsInMinutes">ResetTimeBetweenBackupsInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeBetweenBackupsInMinutes` <a name="ResetTimeBetweenBackupsInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.resetTimeBetweenBackupsInMinutes"></a>

```go
func ResetTimeBetweenBackupsInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutesInput">TimeBetweenBackupsInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutes">TimeBetweenBackupsInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeBetweenBackupsInMinutesInput`<sup>Optional</sup> <a name="TimeBetweenBackupsInMinutesInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutesInput"></a>

```go
func TimeBetweenBackupsInMinutesInput() *f64
```

- *Type:* *f64

---

##### `TimeBetweenBackupsInMinutes`<sup>Required</sup> <a name="TimeBetweenBackupsInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutes"></a>

```go
func TimeBetweenBackupsInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyDataRecoveryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Resiliencehubv2PolicyMultiAzOutputReference <a name="Resiliencehubv2PolicyMultiAzOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubv2policy"

resiliencehubv2policy.NewResiliencehubv2PolicyMultiAzOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Resiliencehubv2PolicyMultiAzOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetDisasterRecoveryApproach">ResetDisasterRecoveryApproach</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetRpoInMinutes">ResetRpoInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetRtoInMinutes">ResetRtoInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisasterRecoveryApproach` <a name="ResetDisasterRecoveryApproach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetDisasterRecoveryApproach"></a>

```go
func ResetDisasterRecoveryApproach()
```

##### `ResetRpoInMinutes` <a name="ResetRpoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetRpoInMinutes"></a>

```go
func ResetRpoInMinutes()
```

##### `ResetRtoInMinutes` <a name="ResetRtoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.resetRtoInMinutes"></a>

```go
func ResetRtoInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproachInput">DisasterRecoveryApproachInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutesInput">RpoInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutesInput">RtoInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproach">DisasterRecoveryApproach</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutes">RpoInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutes">RtoInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisasterRecoveryApproachInput`<sup>Optional</sup> <a name="DisasterRecoveryApproachInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproachInput"></a>

```go
func DisasterRecoveryApproachInput() *string
```

- *Type:* *string

---

##### `RpoInMinutesInput`<sup>Optional</sup> <a name="RpoInMinutesInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutesInput"></a>

```go
func RpoInMinutesInput() *f64
```

- *Type:* *f64

---

##### `RtoInMinutesInput`<sup>Optional</sup> <a name="RtoInMinutesInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutesInput"></a>

```go
func RtoInMinutesInput() *f64
```

- *Type:* *f64

---

##### `DisasterRecoveryApproach`<sup>Required</sup> <a name="DisasterRecoveryApproach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproach"></a>

```go
func DisasterRecoveryApproach() *string
```

- *Type:* *string

---

##### `RpoInMinutes`<sup>Required</sup> <a name="RpoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutes"></a>

```go
func RpoInMinutes() *f64
```

- *Type:* *f64

---

##### `RtoInMinutes`<sup>Required</sup> <a name="RtoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutes"></a>

```go
func RtoInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiAzOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Resiliencehubv2PolicyMultiRegionOutputReference <a name="Resiliencehubv2PolicyMultiRegionOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubv2policy"

resiliencehubv2policy.NewResiliencehubv2PolicyMultiRegionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Resiliencehubv2PolicyMultiRegionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetDisasterRecoveryApproach">ResetDisasterRecoveryApproach</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetRpoInMinutes">ResetRpoInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetRtoInMinutes">ResetRtoInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisasterRecoveryApproach` <a name="ResetDisasterRecoveryApproach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetDisasterRecoveryApproach"></a>

```go
func ResetDisasterRecoveryApproach()
```

##### `ResetRpoInMinutes` <a name="ResetRpoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetRpoInMinutes"></a>

```go
func ResetRpoInMinutes()
```

##### `ResetRtoInMinutes` <a name="ResetRtoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.resetRtoInMinutes"></a>

```go
func ResetRtoInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproachInput">DisasterRecoveryApproachInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutesInput">RpoInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutesInput">RtoInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproach">DisasterRecoveryApproach</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutes">RpoInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutes">RtoInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisasterRecoveryApproachInput`<sup>Optional</sup> <a name="DisasterRecoveryApproachInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproachInput"></a>

```go
func DisasterRecoveryApproachInput() *string
```

- *Type:* *string

---

##### `RpoInMinutesInput`<sup>Optional</sup> <a name="RpoInMinutesInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutesInput"></a>

```go
func RpoInMinutesInput() *f64
```

- *Type:* *f64

---

##### `RtoInMinutesInput`<sup>Optional</sup> <a name="RtoInMinutesInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutesInput"></a>

```go
func RtoInMinutesInput() *f64
```

- *Type:* *f64

---

##### `DisasterRecoveryApproach`<sup>Required</sup> <a name="DisasterRecoveryApproach" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproach"></a>

```go
func DisasterRecoveryApproach() *string
```

- *Type:* *string

---

##### `RpoInMinutes`<sup>Required</sup> <a name="RpoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutes"></a>

```go
func RpoInMinutes() *f64
```

- *Type:* *f64

---

##### `RtoInMinutes`<sup>Required</sup> <a name="RtoInMinutes" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutes"></a>

```go
func RtoInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyMultiRegionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Resiliencehubv2PolicyTagsList <a name="Resiliencehubv2PolicyTagsList" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubv2policy"

resiliencehubv2policy.NewResiliencehubv2PolicyTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Resiliencehubv2PolicyTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.get"></a>

```go
func Get(index *f64) Resiliencehubv2PolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Resiliencehubv2PolicyTagsOutputReference <a name="Resiliencehubv2PolicyTagsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/resiliencehubv2policy"

resiliencehubv2policy.NewResiliencehubv2PolicyTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Resiliencehubv2PolicyTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Policy.Resiliencehubv2PolicyTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




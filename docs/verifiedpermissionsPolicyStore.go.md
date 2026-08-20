# `verifiedpermissionsPolicyStore` Submodule <a name="`verifiedpermissionsPolicyStore` Submodule" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedpermissionsPolicyStore <a name="VerifiedpermissionsPolicyStore" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store awscc_verifiedpermissions_policy_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

verifiedpermissionspolicystore.NewVerifiedpermissionsPolicyStore(scope Construct, id *string, config VerifiedpermissionsPolicyStoreConfig) VerifiedpermissionsPolicyStore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig">VerifiedpermissionsPolicyStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig">VerifiedpermissionsPolicyStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putDeletionProtection">PutDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putEncryptionSettings">PutEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putValidationSettings">PutValidationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetEncryptionSettings">ResetEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeletionProtection` <a name="PutDeletionProtection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putDeletionProtection"></a>

```go
func PutDeletionProtection(value VerifiedpermissionsPolicyStoreDeletionProtection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putDeletionProtection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection">VerifiedpermissionsPolicyStoreDeletionProtection</a>

---

##### `PutEncryptionSettings` <a name="PutEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putEncryptionSettings"></a>

```go
func PutEncryptionSettings(value VerifiedpermissionsPolicyStoreEncryptionSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putEncryptionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettings</a>

---

##### `PutSchema` <a name="PutSchema" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putSchema"></a>

```go
func PutSchema(value VerifiedpermissionsPolicyStoreSchema)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema">VerifiedpermissionsPolicyStoreSchema</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutValidationSettings` <a name="PutValidationSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putValidationSettings"></a>

```go
func PutValidationSettings(value VerifiedpermissionsPolicyStoreValidationSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putValidationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a>

---

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryptionSettings` <a name="ResetEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetEncryptionSettings"></a>

```go
func ResetEncryptionSettings()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetSchema"></a>

```go
func ResetSchema()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VerifiedpermissionsPolicyStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

verifiedpermissionspolicystore.VerifiedpermissionsPolicyStore_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

verifiedpermissionspolicystore.VerifiedpermissionsPolicyStore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

verifiedpermissionspolicystore.VerifiedpermissionsPolicyStore_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

verifiedpermissionspolicystore.VerifiedpermissionsPolicyStore_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a VerifiedpermissionsPolicyStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VerifiedpermissionsPolicyStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VerifiedpermissionsPolicyStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the VerifiedpermissionsPolicyStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.deletionProtection">DeletionProtection</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference">VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.encryptionSettings">EncryptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference">VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.encryptionState">EncryptionState</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference">VerifiedpermissionsPolicyStoreEncryptionStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.policyStoreId">PolicyStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference">VerifiedpermissionsPolicyStoreSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList">VerifiedpermissionsPolicyStoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.validationSettings">ValidationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference">VerifiedpermissionsPolicyStoreValidationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.encryptionSettingsInput">EncryptionSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.schemaInput">SchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.validationSettingsInput">ValidationSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.description">Description</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.deletionProtection"></a>

```go
func DeletionProtection() VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference">VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference</a>

---

##### `EncryptionSettings`<sup>Required</sup> <a name="EncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.encryptionSettings"></a>

```go
func EncryptionSettings() VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference">VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference</a>

---

##### `EncryptionState`<sup>Required</sup> <a name="EncryptionState" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.encryptionState"></a>

```go
func EncryptionState() VerifiedpermissionsPolicyStoreEncryptionStateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference">VerifiedpermissionsPolicyStoreEncryptionStateOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyStoreId`<sup>Required</sup> <a name="PolicyStoreId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.policyStoreId"></a>

```go
func PolicyStoreId() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.schema"></a>

```go
func Schema() VerifiedpermissionsPolicyStoreSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference">VerifiedpermissionsPolicyStoreSchemaOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.tags"></a>

```go
func Tags() VerifiedpermissionsPolicyStoreTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList">VerifiedpermissionsPolicyStoreTagsList</a>

---

##### `ValidationSettings`<sup>Required</sup> <a name="ValidationSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.validationSettings"></a>

```go
func ValidationSettings() VerifiedpermissionsPolicyStoreValidationSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference">VerifiedpermissionsPolicyStoreValidationSettingsOutputReference</a>

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EncryptionSettingsInput`<sup>Optional</sup> <a name="EncryptionSettingsInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.encryptionSettingsInput"></a>

```go
func EncryptionSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.schemaInput"></a>

```go
func SchemaInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ValidationSettingsInput`<sup>Optional</sup> <a name="ValidationSettingsInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.validationSettingsInput"></a>

```go
func ValidationSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedpermissionsPolicyStoreConfig <a name="VerifiedpermissionsPolicyStoreConfig" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

&verifiedpermissionspolicystore.VerifiedpermissionsPolicyStoreConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ValidationSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings,
	DeletionProtection: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection,
	Description: *string,
	EncryptionSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings,
	Schema: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.validationSettings">ValidationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#validation_settings VerifiedpermissionsPolicyStore#validation_settings}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.deletionProtection">DeletionProtection</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection">VerifiedpermissionsPolicyStoreDeletionProtection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#deletion_protection VerifiedpermissionsPolicyStore#deletion_protection}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#description VerifiedpermissionsPolicyStore#description}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.encryptionSettings">EncryptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#encryption_settings VerifiedpermissionsPolicyStore#encryption_settings}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema">VerifiedpermissionsPolicyStoreSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#schema VerifiedpermissionsPolicyStore#schema}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags to add to the policy store. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ValidationSettings`<sup>Required</sup> <a name="ValidationSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.validationSettings"></a>

```go
ValidationSettings VerifiedpermissionsPolicyStoreValidationSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#validation_settings VerifiedpermissionsPolicyStore#validation_settings}.

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.deletionProtection"></a>

```go
DeletionProtection VerifiedpermissionsPolicyStoreDeletionProtection
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection">VerifiedpermissionsPolicyStoreDeletionProtection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#deletion_protection VerifiedpermissionsPolicyStore#deletion_protection}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#description VerifiedpermissionsPolicyStore#description}.

---

##### `EncryptionSettings`<sup>Optional</sup> <a name="EncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.encryptionSettings"></a>

```go
EncryptionSettings VerifiedpermissionsPolicyStoreEncryptionSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#encryption_settings VerifiedpermissionsPolicyStore#encryption_settings}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.schema"></a>

```go
Schema VerifiedpermissionsPolicyStoreSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema">VerifiedpermissionsPolicyStoreSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#schema VerifiedpermissionsPolicyStore#schema}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags to add to the policy store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#tags VerifiedpermissionsPolicyStore#tags}

---

### VerifiedpermissionsPolicyStoreDeletionProtection <a name="VerifiedpermissionsPolicyStoreDeletionProtection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

&verifiedpermissionspolicystore.VerifiedpermissionsPolicyStoreDeletionProtection {
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#mode VerifiedpermissionsPolicyStore#mode}. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#mode VerifiedpermissionsPolicyStore#mode}.

---

### VerifiedpermissionsPolicyStoreEncryptionSettings <a name="VerifiedpermissionsPolicyStoreEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

&verifiedpermissionspolicystore.VerifiedpermissionsPolicyStoreEncryptionSettings {
	Default: *string,
	KmsEncryptionSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#default VerifiedpermissionsPolicyStore#default}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings.property.kmsEncryptionSettings">KmsEncryptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#kms_encryption_settings VerifiedpermissionsPolicyStore#kms_encryption_settings}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#default VerifiedpermissionsPolicyStore#default}.

---

##### `KmsEncryptionSettings`<sup>Optional</sup> <a name="KmsEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings.property.kmsEncryptionSettings"></a>

```go
KmsEncryptionSettings VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#kms_encryption_settings VerifiedpermissionsPolicyStore#kms_encryption_settings}.

---

### VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings <a name="VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

&verifiedpermissionspolicystore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings {
	EncryptionContext: *map[string]*string,
	Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings.property.encryptionContext">EncryptionContext</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#encryption_context VerifiedpermissionsPolicyStore#encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#key VerifiedpermissionsPolicyStore#key}. |

---

##### `EncryptionContext`<sup>Optional</sup> <a name="EncryptionContext" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings.property.encryptionContext"></a>

```go
EncryptionContext *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#encryption_context VerifiedpermissionsPolicyStore#encryption_context}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#key VerifiedpermissionsPolicyStore#key}.

---

### VerifiedpermissionsPolicyStoreEncryptionState <a name="VerifiedpermissionsPolicyStoreEncryptionState" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionState.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

&verifiedpermissionspolicystore.VerifiedpermissionsPolicyStoreEncryptionState {

}
```


### VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState <a name="VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

&verifiedpermissionspolicystore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState {

}
```


### VerifiedpermissionsPolicyStoreSchema <a name="VerifiedpermissionsPolicyStoreSchema" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

&verifiedpermissionspolicystore.VerifiedpermissionsPolicyStoreSchema {
	CedarJson: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema.property.cedarJson">CedarJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#cedar_json VerifiedpermissionsPolicyStore#cedar_json}. |

---

##### `CedarJson`<sup>Optional</sup> <a name="CedarJson" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema.property.cedarJson"></a>

```go
CedarJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#cedar_json VerifiedpermissionsPolicyStore#cedar_json}.

---

### VerifiedpermissionsPolicyStoreTags <a name="VerifiedpermissionsPolicyStoreTags" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

&verifiedpermissionspolicystore.VerifiedpermissionsPolicyStoreTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#key VerifiedpermissionsPolicyStore#key}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#value VerifiedpermissionsPolicyStore#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#key VerifiedpermissionsPolicyStore#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#value VerifiedpermissionsPolicyStore#value}.

---

### VerifiedpermissionsPolicyStoreValidationSettings <a name="VerifiedpermissionsPolicyStoreValidationSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

&verifiedpermissionspolicystore.VerifiedpermissionsPolicyStoreValidationSettings {
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#mode VerifiedpermissionsPolicyStore#mode}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/verifiedpermissions_policy_store#mode VerifiedpermissionsPolicyStore#mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference <a name="VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

verifiedpermissionspolicystore.NewVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference <a name="VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

verifiedpermissionspolicystore.NewVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resetEncryptionContext">ResetEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionContext` <a name="ResetEncryptionContext" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resetEncryptionContext"></a>

```go
func ResetEncryptionContext()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resetKey"></a>

```go
func ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.encryptionContextInput">EncryptionContextInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.encryptionContext">EncryptionContext</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionContextInput`<sup>Optional</sup> <a name="EncryptionContextInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.encryptionContextInput"></a>

```go
func EncryptionContextInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `EncryptionContext`<sup>Required</sup> <a name="EncryptionContext" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.encryptionContext"></a>

```go
func EncryptionContext() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference <a name="VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

verifiedpermissionspolicystore.NewVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.putKmsEncryptionSettings">PutKmsEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resetKmsEncryptionSettings">ResetKmsEncryptionSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKmsEncryptionSettings` <a name="PutKmsEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.putKmsEncryptionSettings"></a>

```go
func PutKmsEncryptionSettings(value VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.putKmsEncryptionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a>

---

##### `ResetDefault` <a name="ResetDefault" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetKmsEncryptionSettings` <a name="ResetKmsEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resetKmsEncryptionSettings"></a>

```go
func ResetKmsEncryptionSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.kmsEncryptionSettings">KmsEncryptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.kmsEncryptionSettingsInput">KmsEncryptionSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsEncryptionSettings`<sup>Required</sup> <a name="KmsEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.kmsEncryptionSettings"></a>

```go
func KmsEncryptionSettings() VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference</a>

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `KmsEncryptionSettingsInput`<sup>Optional</sup> <a name="KmsEncryptionSettingsInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.kmsEncryptionSettingsInput"></a>

```go
func KmsEncryptionSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference <a name="VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

verifiedpermissionspolicystore.NewVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.encryptionContext">EncryptionContext</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState">VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionContext`<sup>Required</sup> <a name="EncryptionContext" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.encryptionContext"></a>

```go
func EncryptionContext() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.internalValue"></a>

```go
func InternalValue() VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState">VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState</a>

---


### VerifiedpermissionsPolicyStoreEncryptionStateOutputReference <a name="VerifiedpermissionsPolicyStoreEncryptionStateOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

verifiedpermissionspolicystore.NewVerifiedpermissionsPolicyStoreEncryptionStateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedpermissionsPolicyStoreEncryptionStateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.kmsEncryptionState">KmsEncryptionState</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference">VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionState">VerifiedpermissionsPolicyStoreEncryptionState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `KmsEncryptionState`<sup>Required</sup> <a name="KmsEncryptionState" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.kmsEncryptionState"></a>

```go
func KmsEncryptionState() VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference">VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.internalValue"></a>

```go
func InternalValue() VerifiedpermissionsPolicyStoreEncryptionState
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionState">VerifiedpermissionsPolicyStoreEncryptionState</a>

---


### VerifiedpermissionsPolicyStoreSchemaOutputReference <a name="VerifiedpermissionsPolicyStoreSchemaOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

verifiedpermissionspolicystore.NewVerifiedpermissionsPolicyStoreSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedpermissionsPolicyStoreSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.resetCedarJson">ResetCedarJson</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCedarJson` <a name="ResetCedarJson" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.resetCedarJson"></a>

```go
func ResetCedarJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.cedarJsonInput">CedarJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.cedarJson">CedarJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CedarJsonInput`<sup>Optional</sup> <a name="CedarJsonInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.cedarJsonInput"></a>

```go
func CedarJsonInput() *string
```

- *Type:* *string

---

##### `CedarJson`<sup>Required</sup> <a name="CedarJson" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.cedarJson"></a>

```go
func CedarJson() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsPolicyStoreTagsList <a name="VerifiedpermissionsPolicyStoreTagsList" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

verifiedpermissionspolicystore.NewVerifiedpermissionsPolicyStoreTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VerifiedpermissionsPolicyStoreTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.get"></a>

```go
func Get(index *f64) VerifiedpermissionsPolicyStoreTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsPolicyStoreTagsOutputReference <a name="VerifiedpermissionsPolicyStoreTagsOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

verifiedpermissionspolicystore.NewVerifiedpermissionsPolicyStoreTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VerifiedpermissionsPolicyStoreTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VerifiedpermissionsPolicyStoreValidationSettingsOutputReference <a name="VerifiedpermissionsPolicyStoreValidationSettingsOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/verifiedpermissionspolicystore"

verifiedpermissionspolicystore.NewVerifiedpermissionsPolicyStoreValidationSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VerifiedpermissionsPolicyStoreValidationSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




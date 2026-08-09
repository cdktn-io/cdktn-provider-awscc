# `qbusinessApplication` Submodule <a name="`qbusinessApplication` Submodule" id="@cdktn/provider-awscc.qbusinessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QbusinessApplication <a name="QbusinessApplication" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application awscc_qbusiness_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

qbusinessapplication.NewQbusinessApplication(scope Construct, id *string, config QbusinessApplicationConfig) QbusinessApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig">QbusinessApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig">QbusinessApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putAttachmentsConfiguration">PutAttachmentsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putAutoSubscriptionConfiguration">PutAutoSubscriptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putPersonalizationConfiguration">PutPersonalizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putQAppsConfiguration">PutQAppsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putQuickSightConfiguration">PutQuickSightConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetAttachmentsConfiguration">ResetAttachmentsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetAutoSubscriptionConfiguration">ResetAutoSubscriptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetClientIdsForOidc">ResetClientIdsForOidc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetIamIdentityProviderArn">ResetIamIdentityProviderArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetIdentityCenterInstanceArn">ResetIdentityCenterInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetIdentityType">ResetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetPersonalizationConfiguration">ResetPersonalizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetQAppsConfiguration">ResetQAppsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetQuickSightConfiguration">ResetQuickSightConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttachmentsConfiguration` <a name="PutAttachmentsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putAttachmentsConfiguration"></a>

```go
func PutAttachmentsConfiguration(value QbusinessApplicationAttachmentsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putAttachmentsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration">QbusinessApplicationAttachmentsConfiguration</a>

---

##### `PutAutoSubscriptionConfiguration` <a name="PutAutoSubscriptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putAutoSubscriptionConfiguration"></a>

```go
func PutAutoSubscriptionConfiguration(value QbusinessApplicationAutoSubscriptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putAutoSubscriptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration">QbusinessApplicationAutoSubscriptionConfiguration</a>

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value QbusinessApplicationEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration">QbusinessApplicationEncryptionConfiguration</a>

---

##### `PutPersonalizationConfiguration` <a name="PutPersonalizationConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putPersonalizationConfiguration"></a>

```go
func PutPersonalizationConfiguration(value QbusinessApplicationPersonalizationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putPersonalizationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration">QbusinessApplicationPersonalizationConfiguration</a>

---

##### `PutQAppsConfiguration` <a name="PutQAppsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putQAppsConfiguration"></a>

```go
func PutQAppsConfiguration(value QbusinessApplicationQAppsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putQAppsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration">QbusinessApplicationQAppsConfiguration</a>

---

##### `PutQuickSightConfiguration` <a name="PutQuickSightConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putQuickSightConfiguration"></a>

```go
func PutQuickSightConfiguration(value QbusinessApplicationQuickSightConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putQuickSightConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration">QbusinessApplicationQuickSightConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAttachmentsConfiguration` <a name="ResetAttachmentsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetAttachmentsConfiguration"></a>

```go
func ResetAttachmentsConfiguration()
```

##### `ResetAutoSubscriptionConfiguration` <a name="ResetAutoSubscriptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetAutoSubscriptionConfiguration"></a>

```go
func ResetAutoSubscriptionConfiguration()
```

##### `ResetClientIdsForOidc` <a name="ResetClientIdsForOidc" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetClientIdsForOidc"></a>

```go
func ResetClientIdsForOidc()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```

##### `ResetIamIdentityProviderArn` <a name="ResetIamIdentityProviderArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetIamIdentityProviderArn"></a>

```go
func ResetIamIdentityProviderArn()
```

##### `ResetIdentityCenterInstanceArn` <a name="ResetIdentityCenterInstanceArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetIdentityCenterInstanceArn"></a>

```go
func ResetIdentityCenterInstanceArn()
```

##### `ResetIdentityType` <a name="ResetIdentityType" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetIdentityType"></a>

```go
func ResetIdentityType()
```

##### `ResetPersonalizationConfiguration` <a name="ResetPersonalizationConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetPersonalizationConfiguration"></a>

```go
func ResetPersonalizationConfiguration()
```

##### `ResetQAppsConfiguration` <a name="ResetQAppsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetQAppsConfiguration"></a>

```go
func ResetQAppsConfiguration()
```

##### `ResetQuickSightConfiguration` <a name="ResetQuickSightConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetQuickSightConfiguration"></a>

```go
func ResetQuickSightConfiguration()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QbusinessApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

qbusinessapplication.QbusinessApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

qbusinessapplication.QbusinessApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

qbusinessapplication.QbusinessApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

qbusinessapplication.QbusinessApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a QbusinessApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QbusinessApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QbusinessApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the QbusinessApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.applicationArn">ApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.attachmentsConfiguration">AttachmentsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference">QbusinessApplicationAttachmentsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.autoSubscriptionConfiguration">AutoSubscriptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference">QbusinessApplicationAutoSubscriptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference">QbusinessApplicationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityCenterApplicationArn">IdentityCenterApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.personalizationConfiguration">PersonalizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference">QbusinessApplicationPersonalizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.qAppsConfiguration">QAppsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference">QbusinessApplicationQAppsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.quickSightConfiguration">QuickSightConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference">QbusinessApplicationQuickSightConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList">QbusinessApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.attachmentsConfigurationInput">AttachmentsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.autoSubscriptionConfigurationInput">AutoSubscriptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.clientIdsForOidcInput">ClientIdsForOidcInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.iamIdentityProviderArnInput">IamIdentityProviderArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityCenterInstanceArnInput">IdentityCenterInstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityTypeInput">IdentityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.personalizationConfigurationInput">PersonalizationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.qAppsConfigurationInput">QAppsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.quickSightConfigurationInput">QuickSightConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.clientIdsForOidc">ClientIdsForOidc</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.iamIdentityProviderArn">IamIdentityProviderArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityCenterInstanceArn">IdentityCenterInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityType">IdentityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.applicationArn"></a>

```go
func ApplicationArn() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `AttachmentsConfiguration`<sup>Required</sup> <a name="AttachmentsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.attachmentsConfiguration"></a>

```go
func AttachmentsConfiguration() QbusinessApplicationAttachmentsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference">QbusinessApplicationAttachmentsConfigurationOutputReference</a>

---

##### `AutoSubscriptionConfiguration`<sup>Required</sup> <a name="AutoSubscriptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.autoSubscriptionConfiguration"></a>

```go
func AutoSubscriptionConfiguration() QbusinessApplicationAutoSubscriptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference">QbusinessApplicationAutoSubscriptionConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() QbusinessApplicationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference">QbusinessApplicationEncryptionConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityCenterApplicationArn`<sup>Required</sup> <a name="IdentityCenterApplicationArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityCenterApplicationArn"></a>

```go
func IdentityCenterApplicationArn() *string
```

- *Type:* *string

---

##### `PersonalizationConfiguration`<sup>Required</sup> <a name="PersonalizationConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.personalizationConfiguration"></a>

```go
func PersonalizationConfiguration() QbusinessApplicationPersonalizationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference">QbusinessApplicationPersonalizationConfigurationOutputReference</a>

---

##### `QAppsConfiguration`<sup>Required</sup> <a name="QAppsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.qAppsConfiguration"></a>

```go
func QAppsConfiguration() QbusinessApplicationQAppsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference">QbusinessApplicationQAppsConfigurationOutputReference</a>

---

##### `QuickSightConfiguration`<sup>Required</sup> <a name="QuickSightConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.quickSightConfiguration"></a>

```go
func QuickSightConfiguration() QbusinessApplicationQuickSightConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference">QbusinessApplicationQuickSightConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.tags"></a>

```go
func Tags() QbusinessApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList">QbusinessApplicationTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AttachmentsConfigurationInput`<sup>Optional</sup> <a name="AttachmentsConfigurationInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.attachmentsConfigurationInput"></a>

```go
func AttachmentsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `AutoSubscriptionConfigurationInput`<sup>Optional</sup> <a name="AutoSubscriptionConfigurationInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.autoSubscriptionConfigurationInput"></a>

```go
func AutoSubscriptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ClientIdsForOidcInput`<sup>Optional</sup> <a name="ClientIdsForOidcInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.clientIdsForOidcInput"></a>

```go
func ClientIdsForOidcInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `IamIdentityProviderArnInput`<sup>Optional</sup> <a name="IamIdentityProviderArnInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.iamIdentityProviderArnInput"></a>

```go
func IamIdentityProviderArnInput() *string
```

- *Type:* *string

---

##### `IdentityCenterInstanceArnInput`<sup>Optional</sup> <a name="IdentityCenterInstanceArnInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityCenterInstanceArnInput"></a>

```go
func IdentityCenterInstanceArnInput() *string
```

- *Type:* *string

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityTypeInput"></a>

```go
func IdentityTypeInput() *string
```

- *Type:* *string

---

##### `PersonalizationConfigurationInput`<sup>Optional</sup> <a name="PersonalizationConfigurationInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.personalizationConfigurationInput"></a>

```go
func PersonalizationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `QAppsConfigurationInput`<sup>Optional</sup> <a name="QAppsConfigurationInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.qAppsConfigurationInput"></a>

```go
func QAppsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `QuickSightConfigurationInput`<sup>Optional</sup> <a name="QuickSightConfigurationInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.quickSightConfigurationInput"></a>

```go
func QuickSightConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ClientIdsForOidc`<sup>Required</sup> <a name="ClientIdsForOidc" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.clientIdsForOidc"></a>

```go
func ClientIdsForOidc() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `IamIdentityProviderArn`<sup>Required</sup> <a name="IamIdentityProviderArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.iamIdentityProviderArn"></a>

```go
func IamIdentityProviderArn() *string
```

- *Type:* *string

---

##### `IdentityCenterInstanceArn`<sup>Required</sup> <a name="IdentityCenterInstanceArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityCenterInstanceArn"></a>

```go
func IdentityCenterInstanceArn() *string
```

- *Type:* *string

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.identityType"></a>

```go
func IdentityType() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QbusinessApplicationAttachmentsConfiguration <a name="QbusinessApplicationAttachmentsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

&qbusinessapplication.QbusinessApplicationAttachmentsConfiguration {
	AttachmentsControlMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration.property.attachmentsControlMode">AttachmentsControlMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#attachments_control_mode QbusinessApplication#attachments_control_mode}. |

---

##### `AttachmentsControlMode`<sup>Optional</sup> <a name="AttachmentsControlMode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration.property.attachmentsControlMode"></a>

```go
AttachmentsControlMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#attachments_control_mode QbusinessApplication#attachments_control_mode}.

---

### QbusinessApplicationAutoSubscriptionConfiguration <a name="QbusinessApplicationAutoSubscriptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

&qbusinessapplication.QbusinessApplicationAutoSubscriptionConfiguration {
	AutoSubscribe: *string,
	DefaultSubscriptionType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration.property.autoSubscribe">AutoSubscribe</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#auto_subscribe QbusinessApplication#auto_subscribe}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration.property.defaultSubscriptionType">DefaultSubscriptionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#default_subscription_type QbusinessApplication#default_subscription_type}. |

---

##### `AutoSubscribe`<sup>Optional</sup> <a name="AutoSubscribe" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration.property.autoSubscribe"></a>

```go
AutoSubscribe *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#auto_subscribe QbusinessApplication#auto_subscribe}.

---

##### `DefaultSubscriptionType`<sup>Optional</sup> <a name="DefaultSubscriptionType" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration.property.defaultSubscriptionType"></a>

```go
DefaultSubscriptionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#default_subscription_type QbusinessApplication#default_subscription_type}.

---

### QbusinessApplicationConfig <a name="QbusinessApplicationConfig" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

&qbusinessapplication.QbusinessApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	AttachmentsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration,
	AutoSubscriptionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration,
	ClientIdsForOidc: *[]*string,
	Description: *string,
	EncryptionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration,
	IamIdentityProviderArn: *string,
	IdentityCenterInstanceArn: *string,
	IdentityType: *string,
	PersonalizationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration,
	QAppsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration,
	QuickSightConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration,
	RoleArn: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#display_name QbusinessApplication#display_name}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.attachmentsConfiguration">AttachmentsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration">QbusinessApplicationAttachmentsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#attachments_configuration QbusinessApplication#attachments_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.autoSubscriptionConfiguration">AutoSubscriptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration">QbusinessApplicationAutoSubscriptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#auto_subscription_configuration QbusinessApplication#auto_subscription_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.clientIdsForOidc">ClientIdsForOidc</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#client_ids_for_oidc QbusinessApplication#client_ids_for_oidc}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#description QbusinessApplication#description}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration">QbusinessApplicationEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#encryption_configuration QbusinessApplication#encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.iamIdentityProviderArn">IamIdentityProviderArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#iam_identity_provider_arn QbusinessApplication#iam_identity_provider_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.identityCenterInstanceArn">IdentityCenterInstanceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#identity_center_instance_arn QbusinessApplication#identity_center_instance_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.identityType">IdentityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#identity_type QbusinessApplication#identity_type}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.personalizationConfiguration">PersonalizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration">QbusinessApplicationPersonalizationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#personalization_configuration QbusinessApplication#personalization_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.qAppsConfiguration">QAppsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration">QbusinessApplicationQAppsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#q_apps_configuration QbusinessApplication#q_apps_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.quickSightConfiguration">QuickSightConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration">QbusinessApplicationQuickSightConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#quick_sight_configuration QbusinessApplication#quick_sight_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#role_arn QbusinessApplication#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#tags QbusinessApplication#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#display_name QbusinessApplication#display_name}.

---

##### `AttachmentsConfiguration`<sup>Optional</sup> <a name="AttachmentsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.attachmentsConfiguration"></a>

```go
AttachmentsConfiguration QbusinessApplicationAttachmentsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfiguration">QbusinessApplicationAttachmentsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#attachments_configuration QbusinessApplication#attachments_configuration}.

---

##### `AutoSubscriptionConfiguration`<sup>Optional</sup> <a name="AutoSubscriptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.autoSubscriptionConfiguration"></a>

```go
AutoSubscriptionConfiguration QbusinessApplicationAutoSubscriptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfiguration">QbusinessApplicationAutoSubscriptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#auto_subscription_configuration QbusinessApplication#auto_subscription_configuration}.

---

##### `ClientIdsForOidc`<sup>Optional</sup> <a name="ClientIdsForOidc" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.clientIdsForOidc"></a>

```go
ClientIdsForOidc *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#client_ids_for_oidc QbusinessApplication#client_ids_for_oidc}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#description QbusinessApplication#description}.

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration QbusinessApplicationEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration">QbusinessApplicationEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#encryption_configuration QbusinessApplication#encryption_configuration}.

---

##### `IamIdentityProviderArn`<sup>Optional</sup> <a name="IamIdentityProviderArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.iamIdentityProviderArn"></a>

```go
IamIdentityProviderArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#iam_identity_provider_arn QbusinessApplication#iam_identity_provider_arn}.

---

##### `IdentityCenterInstanceArn`<sup>Optional</sup> <a name="IdentityCenterInstanceArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.identityCenterInstanceArn"></a>

```go
IdentityCenterInstanceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#identity_center_instance_arn QbusinessApplication#identity_center_instance_arn}.

---

##### `IdentityType`<sup>Optional</sup> <a name="IdentityType" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.identityType"></a>

```go
IdentityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#identity_type QbusinessApplication#identity_type}.

---

##### `PersonalizationConfiguration`<sup>Optional</sup> <a name="PersonalizationConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.personalizationConfiguration"></a>

```go
PersonalizationConfiguration QbusinessApplicationPersonalizationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration">QbusinessApplicationPersonalizationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#personalization_configuration QbusinessApplication#personalization_configuration}.

---

##### `QAppsConfiguration`<sup>Optional</sup> <a name="QAppsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.qAppsConfiguration"></a>

```go
QAppsConfiguration QbusinessApplicationQAppsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration">QbusinessApplicationQAppsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#q_apps_configuration QbusinessApplication#q_apps_configuration}.

---

##### `QuickSightConfiguration`<sup>Optional</sup> <a name="QuickSightConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.quickSightConfiguration"></a>

```go
QuickSightConfiguration QbusinessApplicationQuickSightConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration">QbusinessApplicationQuickSightConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#quick_sight_configuration QbusinessApplication#quick_sight_configuration}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#role_arn QbusinessApplication#role_arn}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#tags QbusinessApplication#tags}.

---

### QbusinessApplicationEncryptionConfiguration <a name="QbusinessApplicationEncryptionConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

&qbusinessapplication.QbusinessApplicationEncryptionConfiguration {
	KmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#kms_key_id QbusinessApplication#kms_key_id}. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfiguration.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#kms_key_id QbusinessApplication#kms_key_id}.

---

### QbusinessApplicationPersonalizationConfiguration <a name="QbusinessApplicationPersonalizationConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

&qbusinessapplication.QbusinessApplicationPersonalizationConfiguration {
	PersonalizationControlMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration.property.personalizationControlMode">PersonalizationControlMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#personalization_control_mode QbusinessApplication#personalization_control_mode}. |

---

##### `PersonalizationControlMode`<sup>Optional</sup> <a name="PersonalizationControlMode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfiguration.property.personalizationControlMode"></a>

```go
PersonalizationControlMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#personalization_control_mode QbusinessApplication#personalization_control_mode}.

---

### QbusinessApplicationQAppsConfiguration <a name="QbusinessApplicationQAppsConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

&qbusinessapplication.QbusinessApplicationQAppsConfiguration {
	QAppsControlMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration.property.qAppsControlMode">QAppsControlMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#q_apps_control_mode QbusinessApplication#q_apps_control_mode}. |

---

##### `QAppsControlMode`<sup>Optional</sup> <a name="QAppsControlMode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfiguration.property.qAppsControlMode"></a>

```go
QAppsControlMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#q_apps_control_mode QbusinessApplication#q_apps_control_mode}.

---

### QbusinessApplicationQuickSightConfiguration <a name="QbusinessApplicationQuickSightConfiguration" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

&qbusinessapplication.QbusinessApplicationQuickSightConfiguration {
	ClientNamespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration.property.clientNamespace">ClientNamespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#client_namespace QbusinessApplication#client_namespace}. |

---

##### `ClientNamespace`<sup>Optional</sup> <a name="ClientNamespace" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfiguration.property.clientNamespace"></a>

```go
ClientNamespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#client_namespace QbusinessApplication#client_namespace}.

---

### QbusinessApplicationTags <a name="QbusinessApplicationTags" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

&qbusinessapplication.QbusinessApplicationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#key QbusinessApplication#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#value QbusinessApplication#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#key QbusinessApplication#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_application#value QbusinessApplication#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QbusinessApplicationAttachmentsConfigurationOutputReference <a name="QbusinessApplicationAttachmentsConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

qbusinessapplication.NewQbusinessApplicationAttachmentsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessApplicationAttachmentsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.resetAttachmentsControlMode">ResetAttachmentsControlMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttachmentsControlMode` <a name="ResetAttachmentsControlMode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.resetAttachmentsControlMode"></a>

```go
func ResetAttachmentsControlMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.attachmentsControlModeInput">AttachmentsControlModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.attachmentsControlMode">AttachmentsControlMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachmentsControlModeInput`<sup>Optional</sup> <a name="AttachmentsControlModeInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.attachmentsControlModeInput"></a>

```go
func AttachmentsControlModeInput() *string
```

- *Type:* *string

---

##### `AttachmentsControlMode`<sup>Required</sup> <a name="AttachmentsControlMode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.attachmentsControlMode"></a>

```go
func AttachmentsControlMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAttachmentsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessApplicationAutoSubscriptionConfigurationOutputReference <a name="QbusinessApplicationAutoSubscriptionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

qbusinessapplication.NewQbusinessApplicationAutoSubscriptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessApplicationAutoSubscriptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resetAutoSubscribe">ResetAutoSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resetDefaultSubscriptionType">ResetDefaultSubscriptionType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoSubscribe` <a name="ResetAutoSubscribe" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resetAutoSubscribe"></a>

```go
func ResetAutoSubscribe()
```

##### `ResetDefaultSubscriptionType` <a name="ResetDefaultSubscriptionType" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.resetDefaultSubscriptionType"></a>

```go
func ResetDefaultSubscriptionType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.autoSubscribeInput">AutoSubscribeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.defaultSubscriptionTypeInput">DefaultSubscriptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.autoSubscribe">AutoSubscribe</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.defaultSubscriptionType">DefaultSubscriptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoSubscribeInput`<sup>Optional</sup> <a name="AutoSubscribeInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.autoSubscribeInput"></a>

```go
func AutoSubscribeInput() *string
```

- *Type:* *string

---

##### `DefaultSubscriptionTypeInput`<sup>Optional</sup> <a name="DefaultSubscriptionTypeInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.defaultSubscriptionTypeInput"></a>

```go
func DefaultSubscriptionTypeInput() *string
```

- *Type:* *string

---

##### `AutoSubscribe`<sup>Required</sup> <a name="AutoSubscribe" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.autoSubscribe"></a>

```go
func AutoSubscribe() *string
```

- *Type:* *string

---

##### `DefaultSubscriptionType`<sup>Required</sup> <a name="DefaultSubscriptionType" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.defaultSubscriptionType"></a>

```go
func DefaultSubscriptionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationAutoSubscriptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessApplicationEncryptionConfigurationOutputReference <a name="QbusinessApplicationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

qbusinessapplication.NewQbusinessApplicationEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessApplicationEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessApplicationPersonalizationConfigurationOutputReference <a name="QbusinessApplicationPersonalizationConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

qbusinessapplication.NewQbusinessApplicationPersonalizationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessApplicationPersonalizationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.resetPersonalizationControlMode">ResetPersonalizationControlMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPersonalizationControlMode` <a name="ResetPersonalizationControlMode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.resetPersonalizationControlMode"></a>

```go
func ResetPersonalizationControlMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.personalizationControlModeInput">PersonalizationControlModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.personalizationControlMode">PersonalizationControlMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PersonalizationControlModeInput`<sup>Optional</sup> <a name="PersonalizationControlModeInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.personalizationControlModeInput"></a>

```go
func PersonalizationControlModeInput() *string
```

- *Type:* *string

---

##### `PersonalizationControlMode`<sup>Required</sup> <a name="PersonalizationControlMode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.personalizationControlMode"></a>

```go
func PersonalizationControlMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationPersonalizationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessApplicationQAppsConfigurationOutputReference <a name="QbusinessApplicationQAppsConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

qbusinessapplication.NewQbusinessApplicationQAppsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessApplicationQAppsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.resetQAppsControlMode">ResetQAppsControlMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQAppsControlMode` <a name="ResetQAppsControlMode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.resetQAppsControlMode"></a>

```go
func ResetQAppsControlMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.qAppsControlModeInput">QAppsControlModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.qAppsControlMode">QAppsControlMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QAppsControlModeInput`<sup>Optional</sup> <a name="QAppsControlModeInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.qAppsControlModeInput"></a>

```go
func QAppsControlModeInput() *string
```

- *Type:* *string

---

##### `QAppsControlMode`<sup>Required</sup> <a name="QAppsControlMode" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.qAppsControlMode"></a>

```go
func QAppsControlMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQAppsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessApplicationQuickSightConfigurationOutputReference <a name="QbusinessApplicationQuickSightConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

qbusinessapplication.NewQbusinessApplicationQuickSightConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QbusinessApplicationQuickSightConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.resetClientNamespace">ResetClientNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientNamespace` <a name="ResetClientNamespace" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.resetClientNamespace"></a>

```go
func ResetClientNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.clientNamespaceInput">ClientNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.clientNamespace">ClientNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientNamespaceInput`<sup>Optional</sup> <a name="ClientNamespaceInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.clientNamespaceInput"></a>

```go
func ClientNamespaceInput() *string
```

- *Type:* *string

---

##### `ClientNamespace`<sup>Required</sup> <a name="ClientNamespace" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.clientNamespace"></a>

```go
func ClientNamespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationQuickSightConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessApplicationTagsList <a name="QbusinessApplicationTagsList" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

qbusinessapplication.NewQbusinessApplicationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QbusinessApplicationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.get"></a>

```go
func Get(index *f64) QbusinessApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QbusinessApplicationTagsOutputReference <a name="QbusinessApplicationTagsOutputReference" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/qbusinessapplication"

qbusinessapplication.NewQbusinessApplicationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QbusinessApplicationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.qbusinessApplication.QbusinessApplicationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




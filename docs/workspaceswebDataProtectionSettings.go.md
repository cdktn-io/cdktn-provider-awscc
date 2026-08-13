# `workspaceswebDataProtectionSettings` Submodule <a name="`workspaceswebDataProtectionSettings` Submodule" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebDataProtectionSettings <a name="WorkspaceswebDataProtectionSettings" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings awscc_workspacesweb_data_protection_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.NewWorkspaceswebDataProtectionSettings(scope Construct, id *string, config WorkspaceswebDataProtectionSettingsConfig) WorkspaceswebDataProtectionSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig">WorkspaceswebDataProtectionSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig">WorkspaceswebDataProtectionSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.putInlineRedactionConfiguration">PutInlineRedactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetAdditionalEncryptionContext">ResetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetCustomerManagedKey">ResetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetInlineRedactionConfiguration">ResetInlineRedactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInlineRedactionConfiguration` <a name="PutInlineRedactionConfiguration" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.putInlineRedactionConfiguration"></a>

```go
func PutInlineRedactionConfiguration(value WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.putInlineRedactionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration">WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalEncryptionContext` <a name="ResetAdditionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetAdditionalEncryptionContext"></a>

```go
func ResetAdditionalEncryptionContext()
```

##### `ResetCustomerManagedKey` <a name="ResetCustomerManagedKey" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetCustomerManagedKey"></a>

```go
func ResetCustomerManagedKey()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetInlineRedactionConfiguration` <a name="ResetInlineRedactionConfiguration" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetInlineRedactionConfiguration"></a>

```go
func ResetInlineRedactionConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspaceswebDataProtectionSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.WorkspaceswebDataProtectionSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.WorkspaceswebDataProtectionSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.WorkspaceswebDataProtectionSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.WorkspaceswebDataProtectionSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WorkspaceswebDataProtectionSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WorkspaceswebDataProtectionSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WorkspaceswebDataProtectionSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceswebDataProtectionSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.associatedPortalArns">AssociatedPortalArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.dataProtectionSettingsArn">DataProtectionSettingsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.inlineRedactionConfiguration">InlineRedactionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList">WorkspaceswebDataProtectionSettingsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.additionalEncryptionContextInput">AdditionalEncryptionContextInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.customerManagedKeyInput">CustomerManagedKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.inlineRedactionConfigurationInput">InlineRedactionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.customerManagedKey">CustomerManagedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociatedPortalArns`<sup>Required</sup> <a name="AssociatedPortalArns" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.associatedPortalArns"></a>

```go
func AssociatedPortalArns() *[]*string
```

- *Type:* *[]*string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `DataProtectionSettingsArn`<sup>Required</sup> <a name="DataProtectionSettingsArn" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.dataProtectionSettingsArn"></a>

```go
func DataProtectionSettingsArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InlineRedactionConfiguration`<sup>Required</sup> <a name="InlineRedactionConfiguration" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.inlineRedactionConfiguration"></a>

```go
func InlineRedactionConfiguration() WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tags"></a>

```go
func Tags() WorkspaceswebDataProtectionSettingsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList">WorkspaceswebDataProtectionSettingsTagsList</a>

---

##### `AdditionalEncryptionContextInput`<sup>Optional</sup> <a name="AdditionalEncryptionContextInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.additionalEncryptionContextInput"></a>

```go
func AdditionalEncryptionContextInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CustomerManagedKeyInput`<sup>Optional</sup> <a name="CustomerManagedKeyInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.customerManagedKeyInput"></a>

```go
func CustomerManagedKeyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `InlineRedactionConfigurationInput`<sup>Optional</sup> <a name="InlineRedactionConfigurationInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.inlineRedactionConfigurationInput"></a>

```go
func InlineRedactionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalEncryptionContext`<sup>Required</sup> <a name="AdditionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.additionalEncryptionContext"></a>

```go
func AdditionalEncryptionContext() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.customerManagedKey"></a>

```go
func CustomerManagedKey() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebDataProtectionSettingsConfig <a name="WorkspaceswebDataProtectionSettingsConfig" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebdataprotectionsettings"

&workspaceswebdataprotectionsettings.WorkspaceswebDataProtectionSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AdditionalEncryptionContext: *map[string]*string,
	CustomerManagedKey: *string,
	Description: *string,
	DisplayName: *string,
	InlineRedactionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#additional_encryption_context WorkspaceswebDataProtectionSettings#additional_encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.customerManagedKey">CustomerManagedKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#customer_managed_key WorkspaceswebDataProtectionSettings#customer_managed_key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#description WorkspaceswebDataProtectionSettings#description}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#display_name WorkspaceswebDataProtectionSettings#display_name}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.inlineRedactionConfiguration">InlineRedactionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration">WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#inline_redaction_configuration WorkspaceswebDataProtectionSettings#inline_redaction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#tags WorkspaceswebDataProtectionSettings#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalEncryptionContext`<sup>Optional</sup> <a name="AdditionalEncryptionContext" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.additionalEncryptionContext"></a>

```go
AdditionalEncryptionContext *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#additional_encryption_context WorkspaceswebDataProtectionSettings#additional_encryption_context}.

---

##### `CustomerManagedKey`<sup>Optional</sup> <a name="CustomerManagedKey" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.customerManagedKey"></a>

```go
CustomerManagedKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#customer_managed_key WorkspaceswebDataProtectionSettings#customer_managed_key}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#description WorkspaceswebDataProtectionSettings#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#display_name WorkspaceswebDataProtectionSettings#display_name}.

---

##### `InlineRedactionConfiguration`<sup>Optional</sup> <a name="InlineRedactionConfiguration" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.inlineRedactionConfiguration"></a>

```go
InlineRedactionConfiguration WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration">WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#inline_redaction_configuration WorkspaceswebDataProtectionSettings#inline_redaction_configuration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#tags WorkspaceswebDataProtectionSettings#tags}.

---

### WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebdataprotectionsettings"

&workspaceswebdataprotectionsettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration {
	GlobalConfidenceLevel: *f64,
	GlobalEnforcedUrls: *[]*string,
	GlobalExemptUrls: *[]*string,
	InlineRedactionPatterns: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.globalConfidenceLevel">GlobalConfidenceLevel</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#global_confidence_level WorkspaceswebDataProtectionSettings#global_confidence_level}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.globalEnforcedUrls">GlobalEnforcedUrls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#global_enforced_urls WorkspaceswebDataProtectionSettings#global_enforced_urls}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.globalExemptUrls">GlobalExemptUrls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#global_exempt_urls WorkspaceswebDataProtectionSettings#global_exempt_urls}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.inlineRedactionPatterns">InlineRedactionPatterns</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#inline_redaction_patterns WorkspaceswebDataProtectionSettings#inline_redaction_patterns}. |

---

##### `GlobalConfidenceLevel`<sup>Optional</sup> <a name="GlobalConfidenceLevel" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.globalConfidenceLevel"></a>

```go
GlobalConfidenceLevel *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#global_confidence_level WorkspaceswebDataProtectionSettings#global_confidence_level}.

---

##### `GlobalEnforcedUrls`<sup>Optional</sup> <a name="GlobalEnforcedUrls" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.globalEnforcedUrls"></a>

```go
GlobalEnforcedUrls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#global_enforced_urls WorkspaceswebDataProtectionSettings#global_enforced_urls}.

---

##### `GlobalExemptUrls`<sup>Optional</sup> <a name="GlobalExemptUrls" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.globalExemptUrls"></a>

```go
GlobalExemptUrls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#global_exempt_urls WorkspaceswebDataProtectionSettings#global_exempt_urls}.

---

##### `InlineRedactionPatterns`<sup>Optional</sup> <a name="InlineRedactionPatterns" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.inlineRedactionPatterns"></a>

```go
InlineRedactionPatterns interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#inline_redaction_patterns WorkspaceswebDataProtectionSettings#inline_redaction_patterns}.

---

### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebdataprotectionsettings"

&workspaceswebdataprotectionsettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns {
	BuiltInPatternId: *string,
	ConfidenceLevel: *f64,
	CustomPattern: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern,
	EnforcedUrls: *[]*string,
	ExemptUrls: *[]*string,
	RedactionPlaceHolder: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns.property.builtInPatternId">BuiltInPatternId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#built_in_pattern_id WorkspaceswebDataProtectionSettings#built_in_pattern_id}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns.property.confidenceLevel">ConfidenceLevel</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#confidence_level WorkspaceswebDataProtectionSettings#confidence_level}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns.property.customPattern">CustomPattern</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#custom_pattern WorkspaceswebDataProtectionSettings#custom_pattern}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns.property.enforcedUrls">EnforcedUrls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#enforced_urls WorkspaceswebDataProtectionSettings#enforced_urls}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns.property.exemptUrls">ExemptUrls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#exempt_urls WorkspaceswebDataProtectionSettings#exempt_urls}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns.property.redactionPlaceHolder">RedactionPlaceHolder</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder WorkspaceswebDataProtectionSettings#redaction_place_holder}. |

---

##### `BuiltInPatternId`<sup>Optional</sup> <a name="BuiltInPatternId" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns.property.builtInPatternId"></a>

```go
BuiltInPatternId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#built_in_pattern_id WorkspaceswebDataProtectionSettings#built_in_pattern_id}.

---

##### `ConfidenceLevel`<sup>Optional</sup> <a name="ConfidenceLevel" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns.property.confidenceLevel"></a>

```go
ConfidenceLevel *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#confidence_level WorkspaceswebDataProtectionSettings#confidence_level}.

---

##### `CustomPattern`<sup>Optional</sup> <a name="CustomPattern" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns.property.customPattern"></a>

```go
CustomPattern WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#custom_pattern WorkspaceswebDataProtectionSettings#custom_pattern}.

---

##### `EnforcedUrls`<sup>Optional</sup> <a name="EnforcedUrls" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns.property.enforcedUrls"></a>

```go
EnforcedUrls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#enforced_urls WorkspaceswebDataProtectionSettings#enforced_urls}.

---

##### `ExemptUrls`<sup>Optional</sup> <a name="ExemptUrls" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns.property.exemptUrls"></a>

```go
ExemptUrls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#exempt_urls WorkspaceswebDataProtectionSettings#exempt_urls}.

---

##### `RedactionPlaceHolder`<sup>Optional</sup> <a name="RedactionPlaceHolder" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatterns.property.redactionPlaceHolder"></a>

```go
RedactionPlaceHolder WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder WorkspaceswebDataProtectionSettings#redaction_place_holder}.

---

### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebdataprotectionsettings"

&workspaceswebdataprotectionsettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern {
	KeywordRegex: *string,
	PatternDescription: *string,
	PatternName: *string,
	PatternRegex: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern.property.keywordRegex">KeywordRegex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#keyword_regex WorkspaceswebDataProtectionSettings#keyword_regex}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern.property.patternDescription">PatternDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#pattern_description WorkspaceswebDataProtectionSettings#pattern_description}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern.property.patternName">PatternName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#pattern_name WorkspaceswebDataProtectionSettings#pattern_name}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern.property.patternRegex">PatternRegex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#pattern_regex WorkspaceswebDataProtectionSettings#pattern_regex}. |

---

##### `KeywordRegex`<sup>Optional</sup> <a name="KeywordRegex" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern.property.keywordRegex"></a>

```go
KeywordRegex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#keyword_regex WorkspaceswebDataProtectionSettings#keyword_regex}.

---

##### `PatternDescription`<sup>Optional</sup> <a name="PatternDescription" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern.property.patternDescription"></a>

```go
PatternDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#pattern_description WorkspaceswebDataProtectionSettings#pattern_description}.

---

##### `PatternName`<sup>Optional</sup> <a name="PatternName" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern.property.patternName"></a>

```go
PatternName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#pattern_name WorkspaceswebDataProtectionSettings#pattern_name}.

---

##### `PatternRegex`<sup>Optional</sup> <a name="PatternRegex" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern.property.patternRegex"></a>

```go
PatternRegex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#pattern_regex WorkspaceswebDataProtectionSettings#pattern_regex}.

---

### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebdataprotectionsettings"

&workspaceswebdataprotectionsettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder {
	RedactionPlaceHolderText: *string,
	RedactionPlaceHolderType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder.property.redactionPlaceHolderText">RedactionPlaceHolderText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder_text WorkspaceswebDataProtectionSettings#redaction_place_holder_text}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder.property.redactionPlaceHolderType">RedactionPlaceHolderType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder_type WorkspaceswebDataProtectionSettings#redaction_place_holder_type}. |

---

##### `RedactionPlaceHolderText`<sup>Optional</sup> <a name="RedactionPlaceHolderText" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder.property.redactionPlaceHolderText"></a>

```go
RedactionPlaceHolderText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder_text WorkspaceswebDataProtectionSettings#redaction_place_holder_text}.

---

##### `RedactionPlaceHolderType`<sup>Optional</sup> <a name="RedactionPlaceHolderType" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder.property.redactionPlaceHolderType"></a>

```go
RedactionPlaceHolderType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder_type WorkspaceswebDataProtectionSettings#redaction_place_holder_type}.

---

### WorkspaceswebDataProtectionSettingsTags <a name="WorkspaceswebDataProtectionSettingsTags" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebdataprotectionsettings"

&workspaceswebdataprotectionsettings.WorkspaceswebDataProtectionSettingsTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#key WorkspaceswebDataProtectionSettings#key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#value WorkspaceswebDataProtectionSettings#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#key WorkspaceswebDataProtectionSettings#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/workspacesweb_data_protection_settings#value WorkspaceswebDataProtectionSettings#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.NewWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.resetKeywordRegex">ResetKeywordRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.resetPatternDescription">ResetPatternDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.resetPatternName">ResetPatternName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.resetPatternRegex">ResetPatternRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeywordRegex` <a name="ResetKeywordRegex" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.resetKeywordRegex"></a>

```go
func ResetKeywordRegex()
```

##### `ResetPatternDescription` <a name="ResetPatternDescription" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.resetPatternDescription"></a>

```go
func ResetPatternDescription()
```

##### `ResetPatternName` <a name="ResetPatternName" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.resetPatternName"></a>

```go
func ResetPatternName()
```

##### `ResetPatternRegex` <a name="ResetPatternRegex" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.resetPatternRegex"></a>

```go
func ResetPatternRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.keywordRegexInput">KeywordRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternDescriptionInput">PatternDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternNameInput">PatternNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternRegexInput">PatternRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.keywordRegex">KeywordRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternDescription">PatternDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternName">PatternName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternRegex">PatternRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeywordRegexInput`<sup>Optional</sup> <a name="KeywordRegexInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.keywordRegexInput"></a>

```go
func KeywordRegexInput() *string
```

- *Type:* *string

---

##### `PatternDescriptionInput`<sup>Optional</sup> <a name="PatternDescriptionInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternDescriptionInput"></a>

```go
func PatternDescriptionInput() *string
```

- *Type:* *string

---

##### `PatternNameInput`<sup>Optional</sup> <a name="PatternNameInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternNameInput"></a>

```go
func PatternNameInput() *string
```

- *Type:* *string

---

##### `PatternRegexInput`<sup>Optional</sup> <a name="PatternRegexInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternRegexInput"></a>

```go
func PatternRegexInput() *string
```

- *Type:* *string

---

##### `KeywordRegex`<sup>Required</sup> <a name="KeywordRegex" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.keywordRegex"></a>

```go
func KeywordRegex() *string
```

- *Type:* *string

---

##### `PatternDescription`<sup>Required</sup> <a name="PatternDescription" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternDescription"></a>

```go
func PatternDescription() *string
```

- *Type:* *string

---

##### `PatternName`<sup>Required</sup> <a name="PatternName" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternName"></a>

```go
func PatternName() *string
```

- *Type:* *string

---

##### `PatternRegex`<sup>Required</sup> <a name="PatternRegex" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.patternRegex"></a>

```go
func PatternRegex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.NewWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.get"></a>

```go
func Get(index *f64) WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.NewWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.putCustomPattern">PutCustomPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.putRedactionPlaceHolder">PutRedactionPlaceHolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resetBuiltInPatternId">ResetBuiltInPatternId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resetConfidenceLevel">ResetConfidenceLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resetCustomPattern">ResetCustomPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resetEnforcedUrls">ResetEnforcedUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resetExemptUrls">ResetExemptUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resetRedactionPlaceHolder">ResetRedactionPlaceHolder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomPattern` <a name="PutCustomPattern" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.putCustomPattern"></a>

```go
func PutCustomPattern(value WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.putCustomPattern.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPattern</a>

---

##### `PutRedactionPlaceHolder` <a name="PutRedactionPlaceHolder" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.putRedactionPlaceHolder"></a>

```go
func PutRedactionPlaceHolder(value WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.putRedactionPlaceHolder.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolder</a>

---

##### `ResetBuiltInPatternId` <a name="ResetBuiltInPatternId" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resetBuiltInPatternId"></a>

```go
func ResetBuiltInPatternId()
```

##### `ResetConfidenceLevel` <a name="ResetConfidenceLevel" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resetConfidenceLevel"></a>

```go
func ResetConfidenceLevel()
```

##### `ResetCustomPattern` <a name="ResetCustomPattern" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resetCustomPattern"></a>

```go
func ResetCustomPattern()
```

##### `ResetEnforcedUrls` <a name="ResetEnforcedUrls" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resetEnforcedUrls"></a>

```go
func ResetEnforcedUrls()
```

##### `ResetExemptUrls` <a name="ResetExemptUrls" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resetExemptUrls"></a>

```go
func ResetExemptUrls()
```

##### `ResetRedactionPlaceHolder` <a name="ResetRedactionPlaceHolder" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.resetRedactionPlaceHolder"></a>

```go
func ResetRedactionPlaceHolder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.customPattern">CustomPattern</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.redactionPlaceHolder">RedactionPlaceHolder</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.builtInPatternIdInput">BuiltInPatternIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.confidenceLevelInput">ConfidenceLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.customPatternInput">CustomPatternInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.enforcedUrlsInput">EnforcedUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.exemptUrlsInput">ExemptUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.redactionPlaceHolderInput">RedactionPlaceHolderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.builtInPatternId">BuiltInPatternId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.confidenceLevel">ConfidenceLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.enforcedUrls">EnforcedUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.exemptUrls">ExemptUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomPattern`<sup>Required</sup> <a name="CustomPattern" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.customPattern"></a>

```go
func CustomPattern() WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsCustomPatternOutputReference</a>

---

##### `RedactionPlaceHolder`<sup>Required</sup> <a name="RedactionPlaceHolder" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.redactionPlaceHolder"></a>

```go
func RedactionPlaceHolder() WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference</a>

---

##### `BuiltInPatternIdInput`<sup>Optional</sup> <a name="BuiltInPatternIdInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.builtInPatternIdInput"></a>

```go
func BuiltInPatternIdInput() *string
```

- *Type:* *string

---

##### `ConfidenceLevelInput`<sup>Optional</sup> <a name="ConfidenceLevelInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.confidenceLevelInput"></a>

```go
func ConfidenceLevelInput() *f64
```

- *Type:* *f64

---

##### `CustomPatternInput`<sup>Optional</sup> <a name="CustomPatternInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.customPatternInput"></a>

```go
func CustomPatternInput() interface{}
```

- *Type:* interface{}

---

##### `EnforcedUrlsInput`<sup>Optional</sup> <a name="EnforcedUrlsInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.enforcedUrlsInput"></a>

```go
func EnforcedUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExemptUrlsInput`<sup>Optional</sup> <a name="ExemptUrlsInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.exemptUrlsInput"></a>

```go
func ExemptUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RedactionPlaceHolderInput`<sup>Optional</sup> <a name="RedactionPlaceHolderInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.redactionPlaceHolderInput"></a>

```go
func RedactionPlaceHolderInput() interface{}
```

- *Type:* interface{}

---

##### `BuiltInPatternId`<sup>Required</sup> <a name="BuiltInPatternId" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.builtInPatternId"></a>

```go
func BuiltInPatternId() *string
```

- *Type:* *string

---

##### `ConfidenceLevel`<sup>Required</sup> <a name="ConfidenceLevel" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.confidenceLevel"></a>

```go
func ConfidenceLevel() *f64
```

- *Type:* *f64

---

##### `EnforcedUrls`<sup>Required</sup> <a name="EnforcedUrls" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.enforcedUrls"></a>

```go
func EnforcedUrls() *[]*string
```

- *Type:* *[]*string

---

##### `ExemptUrls`<sup>Required</sup> <a name="ExemptUrls" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.exemptUrls"></a>

```go
func ExemptUrls() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.NewWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.resetRedactionPlaceHolderText">ResetRedactionPlaceHolderText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.resetRedactionPlaceHolderType">ResetRedactionPlaceHolderType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRedactionPlaceHolderText` <a name="ResetRedactionPlaceHolderText" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.resetRedactionPlaceHolderText"></a>

```go
func ResetRedactionPlaceHolderText()
```

##### `ResetRedactionPlaceHolderType` <a name="ResetRedactionPlaceHolderType" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.resetRedactionPlaceHolderType"></a>

```go
func ResetRedactionPlaceHolderType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.redactionPlaceHolderTextInput">RedactionPlaceHolderTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.redactionPlaceHolderTypeInput">RedactionPlaceHolderTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.redactionPlaceHolderText">RedactionPlaceHolderText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.redactionPlaceHolderType">RedactionPlaceHolderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RedactionPlaceHolderTextInput`<sup>Optional</sup> <a name="RedactionPlaceHolderTextInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.redactionPlaceHolderTextInput"></a>

```go
func RedactionPlaceHolderTextInput() *string
```

- *Type:* *string

---

##### `RedactionPlaceHolderTypeInput`<sup>Optional</sup> <a name="RedactionPlaceHolderTypeInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.redactionPlaceHolderTypeInput"></a>

```go
func RedactionPlaceHolderTypeInput() *string
```

- *Type:* *string

---

##### `RedactionPlaceHolderText`<sup>Required</sup> <a name="RedactionPlaceHolderText" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.redactionPlaceHolderText"></a>

```go
func RedactionPlaceHolderText() *string
```

- *Type:* *string

---

##### `RedactionPlaceHolderType`<sup>Required</sup> <a name="RedactionPlaceHolderType" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.redactionPlaceHolderType"></a>

```go
func RedactionPlaceHolderType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsRedactionPlaceHolderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.NewWorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.putInlineRedactionPatterns">PutInlineRedactionPatterns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetGlobalConfidenceLevel">ResetGlobalConfidenceLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetGlobalEnforcedUrls">ResetGlobalEnforcedUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetGlobalExemptUrls">ResetGlobalExemptUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetInlineRedactionPatterns">ResetInlineRedactionPatterns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInlineRedactionPatterns` <a name="PutInlineRedactionPatterns" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.putInlineRedactionPatterns"></a>

```go
func PutInlineRedactionPatterns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.putInlineRedactionPatterns.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGlobalConfidenceLevel` <a name="ResetGlobalConfidenceLevel" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetGlobalConfidenceLevel"></a>

```go
func ResetGlobalConfidenceLevel()
```

##### `ResetGlobalEnforcedUrls` <a name="ResetGlobalEnforcedUrls" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetGlobalEnforcedUrls"></a>

```go
func ResetGlobalEnforcedUrls()
```

##### `ResetGlobalExemptUrls` <a name="ResetGlobalExemptUrls" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetGlobalExemptUrls"></a>

```go
func ResetGlobalExemptUrls()
```

##### `ResetInlineRedactionPatterns` <a name="ResetInlineRedactionPatterns" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetInlineRedactionPatterns"></a>

```go
func ResetInlineRedactionPatterns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.inlineRedactionPatterns">InlineRedactionPatterns</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalConfidenceLevelInput">GlobalConfidenceLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalEnforcedUrlsInput">GlobalEnforcedUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalExemptUrlsInput">GlobalExemptUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.inlineRedactionPatternsInput">InlineRedactionPatternsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalConfidenceLevel">GlobalConfidenceLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalEnforcedUrls">GlobalEnforcedUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalExemptUrls">GlobalExemptUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InlineRedactionPatterns`<sup>Required</sup> <a name="InlineRedactionPatterns" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.inlineRedactionPatterns"></a>

```go
func InlineRedactionPatterns() WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternsList</a>

---

##### `GlobalConfidenceLevelInput`<sup>Optional</sup> <a name="GlobalConfidenceLevelInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalConfidenceLevelInput"></a>

```go
func GlobalConfidenceLevelInput() *f64
```

- *Type:* *f64

---

##### `GlobalEnforcedUrlsInput`<sup>Optional</sup> <a name="GlobalEnforcedUrlsInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalEnforcedUrlsInput"></a>

```go
func GlobalEnforcedUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `GlobalExemptUrlsInput`<sup>Optional</sup> <a name="GlobalExemptUrlsInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalExemptUrlsInput"></a>

```go
func GlobalExemptUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InlineRedactionPatternsInput`<sup>Optional</sup> <a name="InlineRedactionPatternsInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.inlineRedactionPatternsInput"></a>

```go
func InlineRedactionPatternsInput() interface{}
```

- *Type:* interface{}

---

##### `GlobalConfidenceLevel`<sup>Required</sup> <a name="GlobalConfidenceLevel" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalConfidenceLevel"></a>

```go
func GlobalConfidenceLevel() *f64
```

- *Type:* *f64

---

##### `GlobalEnforcedUrls`<sup>Required</sup> <a name="GlobalEnforcedUrls" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalEnforcedUrls"></a>

```go
func GlobalEnforcedUrls() *[]*string
```

- *Type:* *[]*string

---

##### `GlobalExemptUrls`<sup>Required</sup> <a name="GlobalExemptUrls" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalExemptUrls"></a>

```go
func GlobalExemptUrls() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebDataProtectionSettingsTagsList <a name="WorkspaceswebDataProtectionSettingsTagsList" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.NewWorkspaceswebDataProtectionSettingsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WorkspaceswebDataProtectionSettingsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.get"></a>

```go
func Get(index *f64) WorkspaceswebDataProtectionSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WorkspaceswebDataProtectionSettingsTagsOutputReference <a name="WorkspaceswebDataProtectionSettingsTagsOutputReference" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/workspaceswebdataprotectionsettings"

workspaceswebdataprotectionsettings.NewWorkspaceswebDataProtectionSettingsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WorkspaceswebDataProtectionSettingsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




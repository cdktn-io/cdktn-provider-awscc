# `licensemanagerLicenseConfiguration` Submodule <a name="`licensemanagerLicenseConfiguration` Submodule" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerLicenseConfiguration <a name="LicensemanagerLicenseConfiguration" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration awscc_licensemanager_license_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerlicenseconfiguration"

licensemanagerlicenseconfiguration.NewLicensemanagerLicenseConfiguration(scope Construct, id *string, config LicensemanagerLicenseConfigurationConfig) LicensemanagerLicenseConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig">LicensemanagerLicenseConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig">LicensemanagerLicenseConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.putProductInformationList">PutProductInformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetDisassociateWhenNotFound">ResetDisassociateWhenNotFound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCount">ResetLicenseCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCountHardLimit">ResetLicenseCountHardLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseExpiry">ResetLicenseExpiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseRules">ResetLicenseRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetProductInformationList">ResetProductInformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProductInformationList` <a name="PutProductInformationList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.putProductInformationList"></a>

```go
func PutProductInformationList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.putProductInformationList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisassociateWhenNotFound` <a name="ResetDisassociateWhenNotFound" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetDisassociateWhenNotFound"></a>

```go
func ResetDisassociateWhenNotFound()
```

##### `ResetLicenseCount` <a name="ResetLicenseCount" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCount"></a>

```go
func ResetLicenseCount()
```

##### `ResetLicenseCountHardLimit` <a name="ResetLicenseCountHardLimit" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCountHardLimit"></a>

```go
func ResetLicenseCountHardLimit()
```

##### `ResetLicenseExpiry` <a name="ResetLicenseExpiry" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseExpiry"></a>

```go
func ResetLicenseExpiry()
```

##### `ResetLicenseRules` <a name="ResetLicenseRules" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseRules"></a>

```go
func ResetLicenseRules()
```

##### `ResetProductInformationList` <a name="ResetProductInformationList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetProductInformationList"></a>

```go
func ResetProductInformationList()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LicensemanagerLicenseConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerlicenseconfiguration"

licensemanagerlicenseconfiguration.LicensemanagerLicenseConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerlicenseconfiguration"

licensemanagerlicenseconfiguration.LicensemanagerLicenseConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerlicenseconfiguration"

licensemanagerlicenseconfiguration.LicensemanagerLicenseConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerlicenseconfiguration"

licensemanagerlicenseconfiguration.LicensemanagerLicenseConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LicensemanagerLicenseConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LicensemanagerLicenseConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LicensemanagerLicenseConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerLicenseConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseConfigurationArn">LicenseConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseConfigurationId">LicenseConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.ownerAccountId">OwnerAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.productInformationList">ProductInformationList</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList">LicensemanagerLicenseConfigurationProductInformationListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList">LicensemanagerLicenseConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.disassociateWhenNotFoundInput">DisassociateWhenNotFoundInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimitInput">LicenseCountHardLimitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingTypeInput">LicenseCountingTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountInput">LicenseCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseExpiryInput">LicenseExpiryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRulesInput">LicenseRulesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.productInformationListInput">ProductInformationListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.disassociateWhenNotFound">DisassociateWhenNotFound</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCount">LicenseCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimit">LicenseCountHardLimit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingType">LicenseCountingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseExpiry">LicenseExpiry</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRules">LicenseRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LicenseConfigurationArn`<sup>Required</sup> <a name="LicenseConfigurationArn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseConfigurationArn"></a>

```go
func LicenseConfigurationArn() *string
```

- *Type:* *string

---

##### `LicenseConfigurationId`<sup>Required</sup> <a name="LicenseConfigurationId" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseConfigurationId"></a>

```go
func LicenseConfigurationId() *string
```

- *Type:* *string

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.ownerAccountId"></a>

```go
func OwnerAccountId() *string
```

- *Type:* *string

---

##### `ProductInformationList`<sup>Required</sup> <a name="ProductInformationList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.productInformationList"></a>

```go
func ProductInformationList() LicensemanagerLicenseConfigurationProductInformationListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList">LicensemanagerLicenseConfigurationProductInformationListStructList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tags"></a>

```go
func Tags() LicensemanagerLicenseConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList">LicensemanagerLicenseConfigurationTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisassociateWhenNotFoundInput`<sup>Optional</sup> <a name="DisassociateWhenNotFoundInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.disassociateWhenNotFoundInput"></a>

```go
func DisassociateWhenNotFoundInput() interface{}
```

- *Type:* interface{}

---

##### `LicenseCountHardLimitInput`<sup>Optional</sup> <a name="LicenseCountHardLimitInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimitInput"></a>

```go
func LicenseCountHardLimitInput() interface{}
```

- *Type:* interface{}

---

##### `LicenseCountingTypeInput`<sup>Optional</sup> <a name="LicenseCountingTypeInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingTypeInput"></a>

```go
func LicenseCountingTypeInput() *string
```

- *Type:* *string

---

##### `LicenseCountInput`<sup>Optional</sup> <a name="LicenseCountInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountInput"></a>

```go
func LicenseCountInput() *f64
```

- *Type:* *f64

---

##### `LicenseExpiryInput`<sup>Optional</sup> <a name="LicenseExpiryInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseExpiryInput"></a>

```go
func LicenseExpiryInput() *f64
```

- *Type:* *f64

---

##### `LicenseRulesInput`<sup>Optional</sup> <a name="LicenseRulesInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRulesInput"></a>

```go
func LicenseRulesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProductInformationListInput`<sup>Optional</sup> <a name="ProductInformationListInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.productInformationListInput"></a>

```go
func ProductInformationListInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisassociateWhenNotFound`<sup>Required</sup> <a name="DisassociateWhenNotFound" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.disassociateWhenNotFound"></a>

```go
func DisassociateWhenNotFound() interface{}
```

- *Type:* interface{}

---

##### `LicenseCount`<sup>Required</sup> <a name="LicenseCount" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCount"></a>

```go
func LicenseCount() *f64
```

- *Type:* *f64

---

##### `LicenseCountHardLimit`<sup>Required</sup> <a name="LicenseCountHardLimit" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimit"></a>

```go
func LicenseCountHardLimit() interface{}
```

- *Type:* interface{}

---

##### `LicenseCountingType`<sup>Required</sup> <a name="LicenseCountingType" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingType"></a>

```go
func LicenseCountingType() *string
```

- *Type:* *string

---

##### `LicenseExpiry`<sup>Required</sup> <a name="LicenseExpiry" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseExpiry"></a>

```go
func LicenseExpiry() *f64
```

- *Type:* *f64

---

##### `LicenseRules`<sup>Required</sup> <a name="LicenseRules" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRules"></a>

```go
func LicenseRules() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerLicenseConfigurationConfig <a name="LicensemanagerLicenseConfigurationConfig" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerlicenseconfiguration"

&licensemanagerlicenseconfiguration.LicensemanagerLicenseConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	LicenseCountingType: *string,
	Name: *string,
	Description: *string,
	DisassociateWhenNotFound: interface{},
	LicenseCount: *f64,
	LicenseCountHardLimit: interface{},
	LicenseExpiry: *f64,
	LicenseRules: *[]*string,
	ProductInformationList: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountingType">LicenseCountingType</a></code> | <code>*string</code> | Dimension used to track the license inventory. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | Name of the license configuration. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.description">Description</a></code> | <code>*string</code> | Description of the license configuration. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.disassociateWhenNotFound">DisassociateWhenNotFound</a></code> | <code>interface{}</code> | When true, disassociates a resource when software is uninstalled. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCount">LicenseCount</a></code> | <code>*f64</code> | Number of licenses managed by the license configuration. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountHardLimit">LicenseCountHardLimit</a></code> | <code>interface{}</code> | Indicates whether hard or soft license enforcement is used. Exceeding a hard limit blocks the launch of new instances. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseExpiry">LicenseExpiry</a></code> | <code>*f64</code> | License configuration expiry as an epoch timestamp (seconds since 1970-01-01T00:00:00Z). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseRules">LicenseRules</a></code> | <code>*[]*string</code> | License rules. The syntax is #name=value (for example, #allowedTenancy=EC2-DedicatedHost). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.productInformationList">ProductInformationList</a></code> | <code>interface{}</code> | Product information. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags to add to the license configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LicenseCountingType`<sup>Required</sup> <a name="LicenseCountingType" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountingType"></a>

```go
LicenseCountingType *string
```

- *Type:* *string

Dimension used to track the license inventory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#license_counting_type LicensemanagerLicenseConfiguration#license_counting_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#name LicensemanagerLicenseConfiguration#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#description LicensemanagerLicenseConfiguration#description}

---

##### `DisassociateWhenNotFound`<sup>Optional</sup> <a name="DisassociateWhenNotFound" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.disassociateWhenNotFound"></a>

```go
DisassociateWhenNotFound interface{}
```

- *Type:* interface{}

When true, disassociates a resource when software is uninstalled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#disassociate_when_not_found LicensemanagerLicenseConfiguration#disassociate_when_not_found}

---

##### `LicenseCount`<sup>Optional</sup> <a name="LicenseCount" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCount"></a>

```go
LicenseCount *f64
```

- *Type:* *f64

Number of licenses managed by the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#license_count LicensemanagerLicenseConfiguration#license_count}

---

##### `LicenseCountHardLimit`<sup>Optional</sup> <a name="LicenseCountHardLimit" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountHardLimit"></a>

```go
LicenseCountHardLimit interface{}
```

- *Type:* interface{}

Indicates whether hard or soft license enforcement is used. Exceeding a hard limit blocks the launch of new instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#license_count_hard_limit LicensemanagerLicenseConfiguration#license_count_hard_limit}

---

##### `LicenseExpiry`<sup>Optional</sup> <a name="LicenseExpiry" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseExpiry"></a>

```go
LicenseExpiry *f64
```

- *Type:* *f64

License configuration expiry as an epoch timestamp (seconds since 1970-01-01T00:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#license_expiry LicensemanagerLicenseConfiguration#license_expiry}

---

##### `LicenseRules`<sup>Optional</sup> <a name="LicenseRules" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseRules"></a>

```go
LicenseRules *[]*string
```

- *Type:* *[]*string

License rules. The syntax is #name=value (for example, #allowedTenancy=EC2-DedicatedHost).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#license_rules LicensemanagerLicenseConfiguration#license_rules}

---

##### `ProductInformationList`<sup>Optional</sup> <a name="ProductInformationList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.productInformationList"></a>

```go
ProductInformationList interface{}
```

- *Type:* interface{}

Product information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#product_information_list LicensemanagerLicenseConfiguration#product_information_list}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags to add to the license configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#tags LicensemanagerLicenseConfiguration#tags}

---

### LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct <a name="LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerlicenseconfiguration"

&licensemanagerlicenseconfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct {
	ProductInformationFilterComparator: *string,
	ProductInformationFilterName: *string,
	ProductInformationFilterValue: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.property.productInformationFilterComparator">ProductInformationFilterComparator</a></code> | <code>*string</code> | Logical operator. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.property.productInformationFilterName">ProductInformationFilterName</a></code> | <code>*string</code> | Filter name. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.property.productInformationFilterValue">ProductInformationFilterValue</a></code> | <code>*[]*string</code> | Filter value. |

---

##### `ProductInformationFilterComparator`<sup>Optional</sup> <a name="ProductInformationFilterComparator" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.property.productInformationFilterComparator"></a>

```go
ProductInformationFilterComparator *string
```

- *Type:* *string

Logical operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#product_information_filter_comparator LicensemanagerLicenseConfiguration#product_information_filter_comparator}

---

##### `ProductInformationFilterName`<sup>Optional</sup> <a name="ProductInformationFilterName" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.property.productInformationFilterName"></a>

```go
ProductInformationFilterName *string
```

- *Type:* *string

Filter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#product_information_filter_name LicensemanagerLicenseConfiguration#product_information_filter_name}

---

##### `ProductInformationFilterValue`<sup>Optional</sup> <a name="ProductInformationFilterValue" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStruct.property.productInformationFilterValue"></a>

```go
ProductInformationFilterValue *[]*string
```

- *Type:* *[]*string

Filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#product_information_filter_value LicensemanagerLicenseConfiguration#product_information_filter_value}

---

### LicensemanagerLicenseConfigurationProductInformationListStruct <a name="LicensemanagerLicenseConfigurationProductInformationListStruct" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerlicenseconfiguration"

&licensemanagerlicenseconfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct {
	ProductInformationFilterList: interface{},
	ResourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct.property.productInformationFilterList">ProductInformationFilterList</a></code> | <code>interface{}</code> | A product information filter list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct.property.resourceType">ResourceType</a></code> | <code>*string</code> | Resource type. The possible values are SSM_MANAGED \| RDS. |

---

##### `ProductInformationFilterList`<sup>Optional</sup> <a name="ProductInformationFilterList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct.property.productInformationFilterList"></a>

```go
ProductInformationFilterList interface{}
```

- *Type:* interface{}

A product information filter list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#product_information_filter_list LicensemanagerLicenseConfiguration#product_information_filter_list}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStruct.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Resource type. The possible values are SSM_MANAGED | RDS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#resource_type LicensemanagerLicenseConfiguration#resource_type}

---

### LicensemanagerLicenseConfigurationTags <a name="LicensemanagerLicenseConfigurationTags" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerlicenseconfiguration"

&licensemanagerlicenseconfiguration.LicensemanagerLicenseConfigurationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#key LicensemanagerLicenseConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#value LicensemanagerLicenseConfiguration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#key LicensemanagerLicenseConfiguration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanager_license_configuration#value LicensemanagerLicenseConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList <a name="LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerlicenseconfiguration"

licensemanagerlicenseconfiguration.NewLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.get"></a>

```go
func Get(index *f64) LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference <a name="LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerlicenseconfiguration"

licensemanagerlicenseconfiguration.NewLicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resetProductInformationFilterComparator">ResetProductInformationFilterComparator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resetProductInformationFilterName">ResetProductInformationFilterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resetProductInformationFilterValue">ResetProductInformationFilterValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProductInformationFilterComparator` <a name="ResetProductInformationFilterComparator" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resetProductInformationFilterComparator"></a>

```go
func ResetProductInformationFilterComparator()
```

##### `ResetProductInformationFilterName` <a name="ResetProductInformationFilterName" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resetProductInformationFilterName"></a>

```go
func ResetProductInformationFilterName()
```

##### `ResetProductInformationFilterValue` <a name="ResetProductInformationFilterValue" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.resetProductInformationFilterValue"></a>

```go
func ResetProductInformationFilterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterComparatorInput">ProductInformationFilterComparatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterNameInput">ProductInformationFilterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterValueInput">ProductInformationFilterValueInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterComparator">ProductInformationFilterComparator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterName">ProductInformationFilterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterValue">ProductInformationFilterValue</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProductInformationFilterComparatorInput`<sup>Optional</sup> <a name="ProductInformationFilterComparatorInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterComparatorInput"></a>

```go
func ProductInformationFilterComparatorInput() *string
```

- *Type:* *string

---

##### `ProductInformationFilterNameInput`<sup>Optional</sup> <a name="ProductInformationFilterNameInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterNameInput"></a>

```go
func ProductInformationFilterNameInput() *string
```

- *Type:* *string

---

##### `ProductInformationFilterValueInput`<sup>Optional</sup> <a name="ProductInformationFilterValueInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterValueInput"></a>

```go
func ProductInformationFilterValueInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProductInformationFilterComparator`<sup>Required</sup> <a name="ProductInformationFilterComparator" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterComparator"></a>

```go
func ProductInformationFilterComparator() *string
```

- *Type:* *string

---

##### `ProductInformationFilterName`<sup>Required</sup> <a name="ProductInformationFilterName" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterName"></a>

```go
func ProductInformationFilterName() *string
```

- *Type:* *string

---

##### `ProductInformationFilterValue`<sup>Required</sup> <a name="ProductInformationFilterValue" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.productInformationFilterValue"></a>

```go
func ProductInformationFilterValue() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseConfigurationProductInformationListStructList <a name="LicensemanagerLicenseConfigurationProductInformationListStructList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerlicenseconfiguration"

licensemanagerlicenseconfiguration.NewLicensemanagerLicenseConfigurationProductInformationListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LicensemanagerLicenseConfigurationProductInformationListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.get"></a>

```go
func Get(index *f64) LicensemanagerLicenseConfigurationProductInformationListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseConfigurationProductInformationListStructOutputReference <a name="LicensemanagerLicenseConfigurationProductInformationListStructOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerlicenseconfiguration"

licensemanagerlicenseconfiguration.NewLicensemanagerLicenseConfigurationProductInformationListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LicensemanagerLicenseConfigurationProductInformationListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.putProductInformationFilterList">PutProductInformationFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resetProductInformationFilterList">ResetProductInformationFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProductInformationFilterList` <a name="PutProductInformationFilterList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.putProductInformationFilterList"></a>

```go
func PutProductInformationFilterList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.putProductInformationFilterList.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProductInformationFilterList` <a name="ResetProductInformationFilterList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resetProductInformationFilterList"></a>

```go
func ResetProductInformationFilterList()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.resetResourceType"></a>

```go
func ResetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.productInformationFilterList">ProductInformationFilterList</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.productInformationFilterListInput">ProductInformationFilterListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProductInformationFilterList`<sup>Required</sup> <a name="ProductInformationFilterList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.productInformationFilterList"></a>

```go
func ProductInformationFilterList() LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList">LicensemanagerLicenseConfigurationProductInformationListProductInformationFilterListStructList</a>

---

##### `ProductInformationFilterListInput`<sup>Optional</sup> <a name="ProductInformationFilterListInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.productInformationFilterListInput"></a>

```go
func ProductInformationFilterListInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationProductInformationListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseConfigurationTagsList <a name="LicensemanagerLicenseConfigurationTagsList" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerlicenseconfiguration"

licensemanagerlicenseconfiguration.NewLicensemanagerLicenseConfigurationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LicensemanagerLicenseConfigurationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.get"></a>

```go
func Get(index *f64) LicensemanagerLicenseConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseConfigurationTagsOutputReference <a name="LicensemanagerLicenseConfigurationTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerlicenseconfiguration"

licensemanagerlicenseconfiguration.NewLicensemanagerLicenseConfigurationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LicensemanagerLicenseConfigurationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




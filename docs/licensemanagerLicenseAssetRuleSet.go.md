# `licensemanagerLicenseAssetRuleSet` Submodule <a name="`licensemanagerLicenseAssetRuleSet` Submodule" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerLicenseAssetRuleSet <a name="LicensemanagerLicenseAssetRuleSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set awscc_licensemanager_license_asset_rule_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSet(scope Construct, id *string, config LicensemanagerLicenseAssetRuleSetConfig) LicensemanagerLicenseAssetRuleSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig">LicensemanagerLicenseAssetRuleSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig">LicensemanagerLicenseAssetRuleSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LicensemanagerLicenseAssetRuleSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LicensemanagerLicenseAssetRuleSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LicensemanagerLicenseAssetRuleSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LicensemanagerLicenseAssetRuleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerLicenseAssetRuleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.licenseAssetRulesetArn">LicenseAssetRulesetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList">LicensemanagerLicenseAssetRuleSetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList">LicensemanagerLicenseAssetRuleSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LicenseAssetRulesetArn`<sup>Required</sup> <a name="LicenseAssetRulesetArn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.licenseAssetRulesetArn"></a>

```go
func LicenseAssetRulesetArn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.rules"></a>

```go
func Rules() LicensemanagerLicenseAssetRuleSetRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList">LicensemanagerLicenseAssetRuleSetRulesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.tags"></a>

```go
func Tags() LicensemanagerLicenseAssetRuleSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList">LicensemanagerLicenseAssetRuleSetTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerLicenseAssetRuleSetConfig <a name="LicensemanagerLicenseAssetRuleSetConfig" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Rules: interface{},
	Description: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.name">Name</a></code> | <code>*string</code> | License asset ruleset name. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.rules">Rules</a></code> | <code>interface{}</code> | License asset rules. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.description">Description</a></code> | <code>*string</code> | License asset ruleset description. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags to add to the license asset ruleset. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

License asset ruleset name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#name LicensemanagerLicenseAssetRuleSet#name}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

License asset rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#rules LicensemanagerLicenseAssetRuleSet#rules}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

License asset ruleset description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#description LicensemanagerLicenseAssetRuleSet#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags to add to the license asset ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#tags LicensemanagerLicenseAssetRuleSet#tags}

---

### LicensemanagerLicenseAssetRuleSetRules <a name="LicensemanagerLicenseAssetRuleSetRules" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetRules {
	RuleStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules.property.ruleStatement">RuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatement</a></code> | Rule statement. Specify exactly one of InstanceRuleStatement, LicenseRuleStatement, or LicenseConfigurationRuleStatement. |

---

##### `RuleStatement`<sup>Required</sup> <a name="RuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRules.property.ruleStatement"></a>

```go
RuleStatement LicensemanagerLicenseAssetRuleSetRulesRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatement</a>

Rule statement. Specify exactly one of InstanceRuleStatement, LicenseRuleStatement, or LicenseConfigurationRuleStatement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#rule_statement LicensemanagerLicenseAssetRuleSet#rule_statement}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetRulesRuleStatement {
	InstanceRuleStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement,
	LicenseConfigurationRuleStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement,
	LicenseRuleStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.property.instanceRuleStatement">InstanceRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement</a></code> | Instance rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.property.licenseConfigurationRuleStatement">LicenseConfigurationRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement</a></code> | License configuration rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.property.licenseRuleStatement">LicenseRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement</a></code> | License rule statement. |

---

##### `InstanceRuleStatement`<sup>Optional</sup> <a name="InstanceRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.property.instanceRuleStatement"></a>

```go
InstanceRuleStatement LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement</a>

Instance rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#instance_rule_statement LicensemanagerLicenseAssetRuleSet#instance_rule_statement}

---

##### `LicenseConfigurationRuleStatement`<sup>Optional</sup> <a name="LicenseConfigurationRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.property.licenseConfigurationRuleStatement"></a>

```go
LicenseConfigurationRuleStatement LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement</a>

License configuration rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#license_configuration_rule_statement LicensemanagerLicenseAssetRuleSet#license_configuration_rule_statement}

---

##### `LicenseRuleStatement`<sup>Optional</sup> <a name="LicenseRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement.property.licenseRuleStatement"></a>

```go
LicenseRuleStatement LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement</a>

License rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#license_rule_statement LicensemanagerLicenseAssetRuleSet#license_rule_statement}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement {
	AndRuleStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement,
	MatchingRuleStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement,
	OrRuleStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.property.andRuleStatement">AndRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement</a></code> | AND rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.property.matchingRuleStatement">MatchingRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement</a></code> | Matching rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.property.orRuleStatement">OrRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement</a></code> | OR rule statement. |

---

##### `AndRuleStatement`<sup>Optional</sup> <a name="AndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.property.andRuleStatement"></a>

```go
AndRuleStatement LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement</a>

AND rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#and_rule_statement LicensemanagerLicenseAssetRuleSet#and_rule_statement}

---

##### `MatchingRuleStatement`<sup>Optional</sup> <a name="MatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.property.matchingRuleStatement"></a>

```go
MatchingRuleStatement LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement</a>

Matching rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statement LicensemanagerLicenseAssetRuleSet#matching_rule_statement}

---

##### `OrRuleStatement`<sup>Optional</sup> <a name="OrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement.property.orRuleStatement"></a>

```go
OrRuleStatement LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement</a>

OR rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#or_rule_statement LicensemanagerLicenseAssetRuleSet#or_rule_statement}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement {
	MatchingRuleStatements: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement.property.matchingRuleStatements">MatchingRuleStatements</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}. |

---

##### `MatchingRuleStatements`<sup>Optional</sup> <a name="MatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement.property.matchingRuleStatements"></a>

```go
MatchingRuleStatements interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements {
	Constraint: *string,
	KeyToMatch: *string,
	ValueToMatch: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.property.constraint">Constraint</a></code> | <code>*string</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | Values to match. |

---

##### `Constraint`<sup>Optional</sup> <a name="Constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.property.constraint"></a>

```go
Constraint *string
```

- *Type:* *string

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `KeyToMatch`<sup>Optional</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.property.keyToMatch"></a>

```go
KeyToMatch *string
```

- *Type:* *string

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `ValueToMatch`<sup>Optional</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatements.property.valueToMatch"></a>

```go
ValueToMatch *[]*string
```

- *Type:* *[]*string

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement {
	Constraint: *string,
	KeyToMatch: *string,
	ValueToMatch: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.property.constraint">Constraint</a></code> | <code>*string</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | Values to match. |

---

##### `Constraint`<sup>Optional</sup> <a name="Constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.property.constraint"></a>

```go
Constraint *string
```

- *Type:* *string

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `KeyToMatch`<sup>Optional</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.property.keyToMatch"></a>

```go
KeyToMatch *string
```

- *Type:* *string

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `ValueToMatch`<sup>Optional</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement.property.valueToMatch"></a>

```go
ValueToMatch *[]*string
```

- *Type:* *[]*string

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement {
	MatchingRuleStatements: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement.property.matchingRuleStatements">MatchingRuleStatements</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}. |

---

##### `MatchingRuleStatements`<sup>Optional</sup> <a name="MatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement.property.matchingRuleStatements"></a>

```go
MatchingRuleStatements interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements {
	Constraint: *string,
	KeyToMatch: *string,
	ValueToMatch: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.property.constraint">Constraint</a></code> | <code>*string</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | Values to match. |

---

##### `Constraint`<sup>Optional</sup> <a name="Constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.property.constraint"></a>

```go
Constraint *string
```

- *Type:* *string

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `KeyToMatch`<sup>Optional</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.property.keyToMatch"></a>

```go
KeyToMatch *string
```

- *Type:* *string

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `ValueToMatch`<sup>Optional</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatements.property.valueToMatch"></a>

```go
ValueToMatch *[]*string
```

- *Type:* *[]*string

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement {
	AndRuleStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement,
	MatchingRuleStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement,
	OrRuleStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.property.andRuleStatement">AndRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement</a></code> | AND rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.property.matchingRuleStatement">MatchingRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement</a></code> | Matching rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.property.orRuleStatement">OrRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement</a></code> | OR rule statement. |

---

##### `AndRuleStatement`<sup>Optional</sup> <a name="AndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.property.andRuleStatement"></a>

```go
AndRuleStatement LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement</a>

AND rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#and_rule_statement LicensemanagerLicenseAssetRuleSet#and_rule_statement}

---

##### `MatchingRuleStatement`<sup>Optional</sup> <a name="MatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.property.matchingRuleStatement"></a>

```go
MatchingRuleStatement LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement</a>

Matching rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statement LicensemanagerLicenseAssetRuleSet#matching_rule_statement}

---

##### `OrRuleStatement`<sup>Optional</sup> <a name="OrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement.property.orRuleStatement"></a>

```go
OrRuleStatement LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement</a>

OR rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#or_rule_statement LicensemanagerLicenseAssetRuleSet#or_rule_statement}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement {
	MatchingRuleStatements: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement.property.matchingRuleStatements">MatchingRuleStatements</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}. |

---

##### `MatchingRuleStatements`<sup>Optional</sup> <a name="MatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement.property.matchingRuleStatements"></a>

```go
MatchingRuleStatements interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements {
	Constraint: *string,
	KeyToMatch: *string,
	ValueToMatch: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.property.constraint">Constraint</a></code> | <code>*string</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | Values to match. |

---

##### `Constraint`<sup>Optional</sup> <a name="Constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.property.constraint"></a>

```go
Constraint *string
```

- *Type:* *string

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `KeyToMatch`<sup>Optional</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.property.keyToMatch"></a>

```go
KeyToMatch *string
```

- *Type:* *string

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `ValueToMatch`<sup>Optional</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatements.property.valueToMatch"></a>

```go
ValueToMatch *[]*string
```

- *Type:* *[]*string

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement {
	Constraint: *string,
	KeyToMatch: *string,
	ValueToMatch: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.property.constraint">Constraint</a></code> | <code>*string</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | Values to match. |

---

##### `Constraint`<sup>Optional</sup> <a name="Constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.property.constraint"></a>

```go
Constraint *string
```

- *Type:* *string

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `KeyToMatch`<sup>Optional</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.property.keyToMatch"></a>

```go
KeyToMatch *string
```

- *Type:* *string

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `ValueToMatch`<sup>Optional</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement.property.valueToMatch"></a>

```go
ValueToMatch *[]*string
```

- *Type:* *[]*string

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement {
	MatchingRuleStatements: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement.property.matchingRuleStatements">MatchingRuleStatements</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}. |

---

##### `MatchingRuleStatements`<sup>Optional</sup> <a name="MatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement.property.matchingRuleStatements"></a>

```go
MatchingRuleStatements interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements {
	Constraint: *string,
	KeyToMatch: *string,
	ValueToMatch: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.property.constraint">Constraint</a></code> | <code>*string</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | Values to match. |

---

##### `Constraint`<sup>Optional</sup> <a name="Constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.property.constraint"></a>

```go
Constraint *string
```

- *Type:* *string

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `KeyToMatch`<sup>Optional</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.property.keyToMatch"></a>

```go
KeyToMatch *string
```

- *Type:* *string

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `ValueToMatch`<sup>Optional</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatements.property.valueToMatch"></a>

```go
ValueToMatch *[]*string
```

- *Type:* *[]*string

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement {
	AndRuleStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement,
	MatchingRuleStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement,
	OrRuleStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.property.andRuleStatement">AndRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement</a></code> | AND rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.property.matchingRuleStatement">MatchingRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement</a></code> | Matching rule statement. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.property.orRuleStatement">OrRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement</a></code> | OR rule statement. |

---

##### `AndRuleStatement`<sup>Optional</sup> <a name="AndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.property.andRuleStatement"></a>

```go
AndRuleStatement LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement</a>

AND rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#and_rule_statement LicensemanagerLicenseAssetRuleSet#and_rule_statement}

---

##### `MatchingRuleStatement`<sup>Optional</sup> <a name="MatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.property.matchingRuleStatement"></a>

```go
MatchingRuleStatement LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement</a>

Matching rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statement LicensemanagerLicenseAssetRuleSet#matching_rule_statement}

---

##### `OrRuleStatement`<sup>Optional</sup> <a name="OrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement.property.orRuleStatement"></a>

```go
OrRuleStatement LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement</a>

OR rule statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#or_rule_statement LicensemanagerLicenseAssetRuleSet#or_rule_statement}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement {
	MatchingRuleStatements: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement.property.matchingRuleStatements">MatchingRuleStatements</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}. |

---

##### `MatchingRuleStatements`<sup>Optional</sup> <a name="MatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement.property.matchingRuleStatements"></a>

```go
MatchingRuleStatements interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements {
	Constraint: *string,
	KeyToMatch: *string,
	ValueToMatch: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.property.constraint">Constraint</a></code> | <code>*string</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | Values to match. |

---

##### `Constraint`<sup>Optional</sup> <a name="Constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.property.constraint"></a>

```go
Constraint *string
```

- *Type:* *string

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `KeyToMatch`<sup>Optional</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.property.keyToMatch"></a>

```go
KeyToMatch *string
```

- *Type:* *string

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `ValueToMatch`<sup>Optional</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatements.property.valueToMatch"></a>

```go
ValueToMatch *[]*string
```

- *Type:* *[]*string

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement {
	Constraint: *string,
	KeyToMatch: *string,
	ValueToMatch: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.property.constraint">Constraint</a></code> | <code>*string</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | Values to match. |

---

##### `Constraint`<sup>Optional</sup> <a name="Constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.property.constraint"></a>

```go
Constraint *string
```

- *Type:* *string

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `KeyToMatch`<sup>Optional</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.property.keyToMatch"></a>

```go
KeyToMatch *string
```

- *Type:* *string

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `ValueToMatch`<sup>Optional</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement.property.valueToMatch"></a>

```go
ValueToMatch *[]*string
```

- *Type:* *[]*string

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement {
	MatchingRuleStatements: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement.property.matchingRuleStatements">MatchingRuleStatements</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}. |

---

##### `MatchingRuleStatements`<sup>Optional</sup> <a name="MatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement.property.matchingRuleStatements"></a>

```go
MatchingRuleStatements interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#matching_rule_statements LicensemanagerLicenseAssetRuleSet#matching_rule_statements}.

---

### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements {
	Constraint: *string,
	KeyToMatch: *string,
	ValueToMatch: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.property.constraint">Constraint</a></code> | <code>*string</code> | Constraint (e.g. Equals, Not_Equals). |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | Key to match. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | Values to match. |

---

##### `Constraint`<sup>Optional</sup> <a name="Constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.property.constraint"></a>

```go
Constraint *string
```

- *Type:* *string

Constraint (e.g. Equals, Not_Equals).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#constraint LicensemanagerLicenseAssetRuleSet#constraint}

---

##### `KeyToMatch`<sup>Optional</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.property.keyToMatch"></a>

```go
KeyToMatch *string
```

- *Type:* *string

Key to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key_to_match LicensemanagerLicenseAssetRuleSet#key_to_match}

---

##### `ValueToMatch`<sup>Optional</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatements.property.valueToMatch"></a>

```go
ValueToMatch *[]*string
```

- *Type:* *[]*string

Values to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value_to_match LicensemanagerLicenseAssetRuleSet#value_to_match}

---

### LicensemanagerLicenseAssetRuleSetTags <a name="LicensemanagerLicenseAssetRuleSetTags" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

&licensemanagerlicenseassetruleset.LicensemanagerLicenseAssetRuleSetTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key LicensemanagerLicenseAssetRuleSet#key}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value LicensemanagerLicenseAssetRuleSet#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#key LicensemanagerLicenseAssetRuleSet#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/licensemanager_license_asset_rule_set#value LicensemanagerLicenseAssetRuleSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerLicenseAssetRuleSetRulesList <a name="LicensemanagerLicenseAssetRuleSetRulesList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LicensemanagerLicenseAssetRuleSetRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.get"></a>

```go
func Get(index *f64) LicensemanagerLicenseAssetRuleSetRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LicensemanagerLicenseAssetRuleSetRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.putRuleStatement">PutRuleStatement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRuleStatement` <a name="PutRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.putRuleStatement"></a>

```go
func PutRuleStatement(value LicensemanagerLicenseAssetRuleSetRulesRuleStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.putRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatement</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.ruleStatement">RuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.ruleStatementInput">RuleStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RuleStatement`<sup>Required</sup> <a name="RuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.ruleStatement"></a>

```go
func RuleStatement() LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference</a>

---

##### `RuleStatementInput`<sup>Optional</sup> <a name="RuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.ruleStatementInput"></a>

```go
func RuleStatementInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.get"></a>

```go
func Get(index *f64) LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetConstraint">ResetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch">ResetKeyToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch">ResetValueToMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConstraint` <a name="ResetConstraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetConstraint"></a>

```go
func ResetConstraint()
```

##### `ResetKeyToMatch` <a name="ResetKeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch"></a>

```go
func ResetKeyToMatch()
```

##### `ResetValueToMatch` <a name="ResetValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch"></a>

```go
func ResetValueToMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput">ConstraintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput">KeyToMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput">ValueToMatchInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstraintInput`<sup>Optional</sup> <a name="ConstraintInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput"></a>

```go
func ConstraintInput() *string
```

- *Type:* *string

---

##### `KeyToMatchInput`<sup>Optional</sup> <a name="KeyToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput"></a>

```go
func KeyToMatchInput() *string
```

- *Type:* *string

---

##### `ValueToMatchInput`<sup>Optional</sup> <a name="ValueToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput"></a>

```go
func ValueToMatchInput() *[]*string
```

- *Type:* *[]*string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `KeyToMatch`<sup>Required</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```go
func KeyToMatch() *string
```

- *Type:* *string

---

##### `ValueToMatch`<sup>Required</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```go
func ValueToMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements">PutMatchingRuleStatements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.resetMatchingRuleStatements">ResetMatchingRuleStatements</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchingRuleStatements` <a name="PutMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements"></a>

```go
func PutMatchingRuleStatements(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchingRuleStatements` <a name="ResetMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.resetMatchingRuleStatements"></a>

```go
func ResetMatchingRuleStatements()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements">MatchingRuleStatements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatementsInput">MatchingRuleStatementsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchingRuleStatements`<sup>Required</sup> <a name="MatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements"></a>

```go
func MatchingRuleStatements() LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementMatchingRuleStatementsList</a>

---

##### `MatchingRuleStatementsInput`<sup>Optional</sup> <a name="MatchingRuleStatementsInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatementsInput"></a>

```go
func MatchingRuleStatementsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resetConstraint">ResetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resetKeyToMatch">ResetKeyToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resetValueToMatch">ResetValueToMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConstraint` <a name="ResetConstraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resetConstraint"></a>

```go
func ResetConstraint()
```

##### `ResetKeyToMatch` <a name="ResetKeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resetKeyToMatch"></a>

```go
func ResetKeyToMatch()
```

##### `ResetValueToMatch` <a name="ResetValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.resetValueToMatch"></a>

```go
func ResetValueToMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.constraintInput">ConstraintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.keyToMatchInput">KeyToMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.valueToMatchInput">ValueToMatchInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstraintInput`<sup>Optional</sup> <a name="ConstraintInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.constraintInput"></a>

```go
func ConstraintInput() *string
```

- *Type:* *string

---

##### `KeyToMatchInput`<sup>Optional</sup> <a name="KeyToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.keyToMatchInput"></a>

```go
func KeyToMatchInput() *string
```

- *Type:* *string

---

##### `ValueToMatchInput`<sup>Optional</sup> <a name="ValueToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.valueToMatchInput"></a>

```go
func ValueToMatchInput() *[]*string
```

- *Type:* *[]*string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `KeyToMatch`<sup>Required</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch"></a>

```go
func KeyToMatch() *string
```

- *Type:* *string

---

##### `ValueToMatch`<sup>Required</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch"></a>

```go
func ValueToMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.get"></a>

```go
func Get(index *f64) LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetConstraint">ResetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch">ResetKeyToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch">ResetValueToMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConstraint` <a name="ResetConstraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetConstraint"></a>

```go
func ResetConstraint()
```

##### `ResetKeyToMatch` <a name="ResetKeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch"></a>

```go
func ResetKeyToMatch()
```

##### `ResetValueToMatch` <a name="ResetValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch"></a>

```go
func ResetValueToMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput">ConstraintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput">KeyToMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput">ValueToMatchInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstraintInput`<sup>Optional</sup> <a name="ConstraintInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput"></a>

```go
func ConstraintInput() *string
```

- *Type:* *string

---

##### `KeyToMatchInput`<sup>Optional</sup> <a name="KeyToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput"></a>

```go
func KeyToMatchInput() *string
```

- *Type:* *string

---

##### `ValueToMatchInput`<sup>Optional</sup> <a name="ValueToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput"></a>

```go
func ValueToMatchInput() *[]*string
```

- *Type:* *[]*string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `KeyToMatch`<sup>Required</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```go
func KeyToMatch() *string
```

- *Type:* *string

---

##### `ValueToMatch`<sup>Required</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```go
func ValueToMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements">PutMatchingRuleStatements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.resetMatchingRuleStatements">ResetMatchingRuleStatements</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchingRuleStatements` <a name="PutMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements"></a>

```go
func PutMatchingRuleStatements(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchingRuleStatements` <a name="ResetMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.resetMatchingRuleStatements"></a>

```go
func ResetMatchingRuleStatements()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements">MatchingRuleStatements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatementsInput">MatchingRuleStatementsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchingRuleStatements`<sup>Required</sup> <a name="MatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements"></a>

```go
func MatchingRuleStatements() LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementMatchingRuleStatementsList</a>

---

##### `MatchingRuleStatementsInput`<sup>Optional</sup> <a name="MatchingRuleStatementsInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatementsInput"></a>

```go
func MatchingRuleStatementsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putAndRuleStatement">PutAndRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putMatchingRuleStatement">PutMatchingRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putOrRuleStatement">PutOrRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resetAndRuleStatement">ResetAndRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resetMatchingRuleStatement">ResetMatchingRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resetOrRuleStatement">ResetOrRuleStatement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAndRuleStatement` <a name="PutAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putAndRuleStatement"></a>

```go
func PutAndRuleStatement(value LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putAndRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatement</a>

---

##### `PutMatchingRuleStatement` <a name="PutMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putMatchingRuleStatement"></a>

```go
func PutMatchingRuleStatement(value LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putMatchingRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatement</a>

---

##### `PutOrRuleStatement` <a name="PutOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putOrRuleStatement"></a>

```go
func PutOrRuleStatement(value LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.putOrRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatement</a>

---

##### `ResetAndRuleStatement` <a name="ResetAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resetAndRuleStatement"></a>

```go
func ResetAndRuleStatement()
```

##### `ResetMatchingRuleStatement` <a name="ResetMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resetMatchingRuleStatement"></a>

```go
func ResetMatchingRuleStatement()
```

##### `ResetOrRuleStatement` <a name="ResetOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.resetOrRuleStatement"></a>

```go
func ResetOrRuleStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.andRuleStatement">AndRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.matchingRuleStatement">MatchingRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.orRuleStatement">OrRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.andRuleStatementInput">AndRuleStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.matchingRuleStatementInput">MatchingRuleStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.orRuleStatementInput">OrRuleStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AndRuleStatement`<sup>Required</sup> <a name="AndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.andRuleStatement"></a>

```go
func AndRuleStatement() LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementAndRuleStatementOutputReference</a>

---

##### `MatchingRuleStatement`<sup>Required</sup> <a name="MatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.matchingRuleStatement"></a>

```go
func MatchingRuleStatement() LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementMatchingRuleStatementOutputReference</a>

---

##### `OrRuleStatement`<sup>Required</sup> <a name="OrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.orRuleStatement"></a>

```go
func OrRuleStatement() LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOrRuleStatementOutputReference</a>

---

##### `AndRuleStatementInput`<sup>Optional</sup> <a name="AndRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.andRuleStatementInput"></a>

```go
func AndRuleStatementInput() interface{}
```

- *Type:* interface{}

---

##### `MatchingRuleStatementInput`<sup>Optional</sup> <a name="MatchingRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.matchingRuleStatementInput"></a>

```go
func MatchingRuleStatementInput() interface{}
```

- *Type:* interface{}

---

##### `OrRuleStatementInput`<sup>Optional</sup> <a name="OrRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.orRuleStatementInput"></a>

```go
func OrRuleStatementInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.get"></a>

```go
func Get(index *f64) LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetConstraint">ResetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch">ResetKeyToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch">ResetValueToMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConstraint` <a name="ResetConstraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetConstraint"></a>

```go
func ResetConstraint()
```

##### `ResetKeyToMatch` <a name="ResetKeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch"></a>

```go
func ResetKeyToMatch()
```

##### `ResetValueToMatch` <a name="ResetValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch"></a>

```go
func ResetValueToMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput">ConstraintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput">KeyToMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput">ValueToMatchInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstraintInput`<sup>Optional</sup> <a name="ConstraintInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput"></a>

```go
func ConstraintInput() *string
```

- *Type:* *string

---

##### `KeyToMatchInput`<sup>Optional</sup> <a name="KeyToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput"></a>

```go
func KeyToMatchInput() *string
```

- *Type:* *string

---

##### `ValueToMatchInput`<sup>Optional</sup> <a name="ValueToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput"></a>

```go
func ValueToMatchInput() *[]*string
```

- *Type:* *[]*string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `KeyToMatch`<sup>Required</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```go
func KeyToMatch() *string
```

- *Type:* *string

---

##### `ValueToMatch`<sup>Required</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```go
func ValueToMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements">PutMatchingRuleStatements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.resetMatchingRuleStatements">ResetMatchingRuleStatements</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchingRuleStatements` <a name="PutMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements"></a>

```go
func PutMatchingRuleStatements(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchingRuleStatements` <a name="ResetMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.resetMatchingRuleStatements"></a>

```go
func ResetMatchingRuleStatements()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements">MatchingRuleStatements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatementsInput">MatchingRuleStatementsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchingRuleStatements`<sup>Required</sup> <a name="MatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements"></a>

```go
func MatchingRuleStatements() LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementMatchingRuleStatementsList</a>

---

##### `MatchingRuleStatementsInput`<sup>Optional</sup> <a name="MatchingRuleStatementsInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatementsInput"></a>

```go
func MatchingRuleStatementsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resetConstraint">ResetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resetKeyToMatch">ResetKeyToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resetValueToMatch">ResetValueToMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConstraint` <a name="ResetConstraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resetConstraint"></a>

```go
func ResetConstraint()
```

##### `ResetKeyToMatch` <a name="ResetKeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resetKeyToMatch"></a>

```go
func ResetKeyToMatch()
```

##### `ResetValueToMatch` <a name="ResetValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.resetValueToMatch"></a>

```go
func ResetValueToMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.constraintInput">ConstraintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.keyToMatchInput">KeyToMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.valueToMatchInput">ValueToMatchInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstraintInput`<sup>Optional</sup> <a name="ConstraintInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.constraintInput"></a>

```go
func ConstraintInput() *string
```

- *Type:* *string

---

##### `KeyToMatchInput`<sup>Optional</sup> <a name="KeyToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.keyToMatchInput"></a>

```go
func KeyToMatchInput() *string
```

- *Type:* *string

---

##### `ValueToMatchInput`<sup>Optional</sup> <a name="ValueToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.valueToMatchInput"></a>

```go
func ValueToMatchInput() *[]*string
```

- *Type:* *[]*string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `KeyToMatch`<sup>Required</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch"></a>

```go
func KeyToMatch() *string
```

- *Type:* *string

---

##### `ValueToMatch`<sup>Required</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch"></a>

```go
func ValueToMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.get"></a>

```go
func Get(index *f64) LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetConstraint">ResetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch">ResetKeyToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch">ResetValueToMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConstraint` <a name="ResetConstraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetConstraint"></a>

```go
func ResetConstraint()
```

##### `ResetKeyToMatch` <a name="ResetKeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch"></a>

```go
func ResetKeyToMatch()
```

##### `ResetValueToMatch` <a name="ResetValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch"></a>

```go
func ResetValueToMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput">ConstraintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput">KeyToMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput">ValueToMatchInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstraintInput`<sup>Optional</sup> <a name="ConstraintInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput"></a>

```go
func ConstraintInput() *string
```

- *Type:* *string

---

##### `KeyToMatchInput`<sup>Optional</sup> <a name="KeyToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput"></a>

```go
func KeyToMatchInput() *string
```

- *Type:* *string

---

##### `ValueToMatchInput`<sup>Optional</sup> <a name="ValueToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput"></a>

```go
func ValueToMatchInput() *[]*string
```

- *Type:* *[]*string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `KeyToMatch`<sup>Required</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```go
func KeyToMatch() *string
```

- *Type:* *string

---

##### `ValueToMatch`<sup>Required</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```go
func ValueToMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements">PutMatchingRuleStatements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.resetMatchingRuleStatements">ResetMatchingRuleStatements</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchingRuleStatements` <a name="PutMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements"></a>

```go
func PutMatchingRuleStatements(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchingRuleStatements` <a name="ResetMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.resetMatchingRuleStatements"></a>

```go
func ResetMatchingRuleStatements()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements">MatchingRuleStatements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatementsInput">MatchingRuleStatementsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchingRuleStatements`<sup>Required</sup> <a name="MatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements"></a>

```go
func MatchingRuleStatements() LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementMatchingRuleStatementsList</a>

---

##### `MatchingRuleStatementsInput`<sup>Optional</sup> <a name="MatchingRuleStatementsInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatementsInput"></a>

```go
func MatchingRuleStatementsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putAndRuleStatement">PutAndRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putMatchingRuleStatement">PutMatchingRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putOrRuleStatement">PutOrRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resetAndRuleStatement">ResetAndRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resetMatchingRuleStatement">ResetMatchingRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resetOrRuleStatement">ResetOrRuleStatement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAndRuleStatement` <a name="PutAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putAndRuleStatement"></a>

```go
func PutAndRuleStatement(value LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putAndRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatement</a>

---

##### `PutMatchingRuleStatement` <a name="PutMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putMatchingRuleStatement"></a>

```go
func PutMatchingRuleStatement(value LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putMatchingRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatement</a>

---

##### `PutOrRuleStatement` <a name="PutOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putOrRuleStatement"></a>

```go
func PutOrRuleStatement(value LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.putOrRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatement</a>

---

##### `ResetAndRuleStatement` <a name="ResetAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resetAndRuleStatement"></a>

```go
func ResetAndRuleStatement()
```

##### `ResetMatchingRuleStatement` <a name="ResetMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resetMatchingRuleStatement"></a>

```go
func ResetMatchingRuleStatement()
```

##### `ResetOrRuleStatement` <a name="ResetOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.resetOrRuleStatement"></a>

```go
func ResetOrRuleStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.andRuleStatement">AndRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.matchingRuleStatement">MatchingRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.orRuleStatement">OrRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.andRuleStatementInput">AndRuleStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.matchingRuleStatementInput">MatchingRuleStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.orRuleStatementInput">OrRuleStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AndRuleStatement`<sup>Required</sup> <a name="AndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.andRuleStatement"></a>

```go
func AndRuleStatement() LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementAndRuleStatementOutputReference</a>

---

##### `MatchingRuleStatement`<sup>Required</sup> <a name="MatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.matchingRuleStatement"></a>

```go
func MatchingRuleStatement() LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementMatchingRuleStatementOutputReference</a>

---

##### `OrRuleStatement`<sup>Required</sup> <a name="OrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.orRuleStatement"></a>

```go
func OrRuleStatement() LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOrRuleStatementOutputReference</a>

---

##### `AndRuleStatementInput`<sup>Optional</sup> <a name="AndRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.andRuleStatementInput"></a>

```go
func AndRuleStatementInput() interface{}
```

- *Type:* interface{}

---

##### `MatchingRuleStatementInput`<sup>Optional</sup> <a name="MatchingRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.matchingRuleStatementInput"></a>

```go
func MatchingRuleStatementInput() interface{}
```

- *Type:* interface{}

---

##### `OrRuleStatementInput`<sup>Optional</sup> <a name="OrRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.orRuleStatementInput"></a>

```go
func OrRuleStatementInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.get"></a>

```go
func Get(index *f64) LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetConstraint">ResetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch">ResetKeyToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch">ResetValueToMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConstraint` <a name="ResetConstraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetConstraint"></a>

```go
func ResetConstraint()
```

##### `ResetKeyToMatch` <a name="ResetKeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch"></a>

```go
func ResetKeyToMatch()
```

##### `ResetValueToMatch` <a name="ResetValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch"></a>

```go
func ResetValueToMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput">ConstraintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput">KeyToMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput">ValueToMatchInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstraintInput`<sup>Optional</sup> <a name="ConstraintInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput"></a>

```go
func ConstraintInput() *string
```

- *Type:* *string

---

##### `KeyToMatchInput`<sup>Optional</sup> <a name="KeyToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput"></a>

```go
func KeyToMatchInput() *string
```

- *Type:* *string

---

##### `ValueToMatchInput`<sup>Optional</sup> <a name="ValueToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput"></a>

```go
func ValueToMatchInput() *[]*string
```

- *Type:* *[]*string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `KeyToMatch`<sup>Required</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```go
func KeyToMatch() *string
```

- *Type:* *string

---

##### `ValueToMatch`<sup>Required</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```go
func ValueToMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements">PutMatchingRuleStatements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.resetMatchingRuleStatements">ResetMatchingRuleStatements</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchingRuleStatements` <a name="PutMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements"></a>

```go
func PutMatchingRuleStatements(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.putMatchingRuleStatements.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchingRuleStatements` <a name="ResetMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.resetMatchingRuleStatements"></a>

```go
func ResetMatchingRuleStatements()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements">MatchingRuleStatements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatementsInput">MatchingRuleStatementsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchingRuleStatements`<sup>Required</sup> <a name="MatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatements"></a>

```go
func MatchingRuleStatements() LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementMatchingRuleStatementsList</a>

---

##### `MatchingRuleStatementsInput`<sup>Optional</sup> <a name="MatchingRuleStatementsInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.matchingRuleStatementsInput"></a>

```go
func MatchingRuleStatementsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resetConstraint">ResetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resetKeyToMatch">ResetKeyToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resetValueToMatch">ResetValueToMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConstraint` <a name="ResetConstraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resetConstraint"></a>

```go
func ResetConstraint()
```

##### `ResetKeyToMatch` <a name="ResetKeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resetKeyToMatch"></a>

```go
func ResetKeyToMatch()
```

##### `ResetValueToMatch` <a name="ResetValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.resetValueToMatch"></a>

```go
func ResetValueToMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.constraintInput">ConstraintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.keyToMatchInput">KeyToMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.valueToMatchInput">ValueToMatchInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstraintInput`<sup>Optional</sup> <a name="ConstraintInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.constraintInput"></a>

```go
func ConstraintInput() *string
```

- *Type:* *string

---

##### `KeyToMatchInput`<sup>Optional</sup> <a name="KeyToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.keyToMatchInput"></a>

```go
func KeyToMatchInput() *string
```

- *Type:* *string

---

##### `ValueToMatchInput`<sup>Optional</sup> <a name="ValueToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.valueToMatchInput"></a>

```go
func ValueToMatchInput() *[]*string
```

- *Type:* *[]*string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `KeyToMatch`<sup>Required</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.keyToMatch"></a>

```go
func KeyToMatch() *string
```

- *Type:* *string

---

##### `ValueToMatch`<sup>Required</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.valueToMatch"></a>

```go
func ValueToMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.get"></a>

```go
func Get(index *f64) LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetConstraint">ResetConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch">ResetKeyToMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch">ResetValueToMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConstraint` <a name="ResetConstraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetConstraint"></a>

```go
func ResetConstraint()
```

##### `ResetKeyToMatch` <a name="ResetKeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetKeyToMatch"></a>

```go
func ResetKeyToMatch()
```

##### `ResetValueToMatch` <a name="ResetValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.resetValueToMatch"></a>

```go
func ResetValueToMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput">ConstraintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput">KeyToMatchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput">ValueToMatchInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch">KeyToMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch">ValueToMatch</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstraintInput`<sup>Optional</sup> <a name="ConstraintInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraintInput"></a>

```go
func ConstraintInput() *string
```

- *Type:* *string

---

##### `KeyToMatchInput`<sup>Optional</sup> <a name="KeyToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatchInput"></a>

```go
func KeyToMatchInput() *string
```

- *Type:* *string

---

##### `ValueToMatchInput`<sup>Optional</sup> <a name="ValueToMatchInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatchInput"></a>

```go
func ValueToMatchInput() *[]*string
```

- *Type:* *[]*string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `KeyToMatch`<sup>Required</sup> <a name="KeyToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.keyToMatch"></a>

```go
func KeyToMatch() *string
```

- *Type:* *string

---

##### `ValueToMatch`<sup>Required</sup> <a name="ValueToMatch" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.valueToMatch"></a>

```go
func ValueToMatch() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements">PutMatchingRuleStatements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.resetMatchingRuleStatements">ResetMatchingRuleStatements</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchingRuleStatements` <a name="PutMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements"></a>

```go
func PutMatchingRuleStatements(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.putMatchingRuleStatements.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMatchingRuleStatements` <a name="ResetMatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.resetMatchingRuleStatements"></a>

```go
func ResetMatchingRuleStatements()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements">MatchingRuleStatements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatementsInput">MatchingRuleStatementsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchingRuleStatements`<sup>Required</sup> <a name="MatchingRuleStatements" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatements"></a>

```go
func MatchingRuleStatements() LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementMatchingRuleStatementsList</a>

---

##### `MatchingRuleStatementsInput`<sup>Optional</sup> <a name="MatchingRuleStatementsInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.matchingRuleStatementsInput"></a>

```go
func MatchingRuleStatementsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putAndRuleStatement">PutAndRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putMatchingRuleStatement">PutMatchingRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putOrRuleStatement">PutOrRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resetAndRuleStatement">ResetAndRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resetMatchingRuleStatement">ResetMatchingRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resetOrRuleStatement">ResetOrRuleStatement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAndRuleStatement` <a name="PutAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putAndRuleStatement"></a>

```go
func PutAndRuleStatement(value LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putAndRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatement</a>

---

##### `PutMatchingRuleStatement` <a name="PutMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putMatchingRuleStatement"></a>

```go
func PutMatchingRuleStatement(value LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putMatchingRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatement</a>

---

##### `PutOrRuleStatement` <a name="PutOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putOrRuleStatement"></a>

```go
func PutOrRuleStatement(value LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.putOrRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatement</a>

---

##### `ResetAndRuleStatement` <a name="ResetAndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resetAndRuleStatement"></a>

```go
func ResetAndRuleStatement()
```

##### `ResetMatchingRuleStatement` <a name="ResetMatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resetMatchingRuleStatement"></a>

```go
func ResetMatchingRuleStatement()
```

##### `ResetOrRuleStatement` <a name="ResetOrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.resetOrRuleStatement"></a>

```go
func ResetOrRuleStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.andRuleStatement">AndRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.matchingRuleStatement">MatchingRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.orRuleStatement">OrRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.andRuleStatementInput">AndRuleStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.matchingRuleStatementInput">MatchingRuleStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.orRuleStatementInput">OrRuleStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AndRuleStatement`<sup>Required</sup> <a name="AndRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.andRuleStatement"></a>

```go
func AndRuleStatement() LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementAndRuleStatementOutputReference</a>

---

##### `MatchingRuleStatement`<sup>Required</sup> <a name="MatchingRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.matchingRuleStatement"></a>

```go
func MatchingRuleStatement() LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementMatchingRuleStatementOutputReference</a>

---

##### `OrRuleStatement`<sup>Required</sup> <a name="OrRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.orRuleStatement"></a>

```go
func OrRuleStatement() LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOrRuleStatementOutputReference</a>

---

##### `AndRuleStatementInput`<sup>Optional</sup> <a name="AndRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.andRuleStatementInput"></a>

```go
func AndRuleStatementInput() interface{}
```

- *Type:* interface{}

---

##### `MatchingRuleStatementInput`<sup>Optional</sup> <a name="MatchingRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.matchingRuleStatementInput"></a>

```go
func MatchingRuleStatementInput() interface{}
```

- *Type:* interface{}

---

##### `OrRuleStatementInput`<sup>Optional</sup> <a name="OrRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.orRuleStatementInput"></a>

```go
func OrRuleStatementInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference <a name="LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putInstanceRuleStatement">PutInstanceRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseConfigurationRuleStatement">PutLicenseConfigurationRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseRuleStatement">PutLicenseRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resetInstanceRuleStatement">ResetInstanceRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resetLicenseConfigurationRuleStatement">ResetLicenseConfigurationRuleStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resetLicenseRuleStatement">ResetLicenseRuleStatement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInstanceRuleStatement` <a name="PutInstanceRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putInstanceRuleStatement"></a>

```go
func PutInstanceRuleStatement(value LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putInstanceRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatement</a>

---

##### `PutLicenseConfigurationRuleStatement` <a name="PutLicenseConfigurationRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseConfigurationRuleStatement"></a>

```go
func PutLicenseConfigurationRuleStatement(value LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseConfigurationRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatement</a>

---

##### `PutLicenseRuleStatement` <a name="PutLicenseRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseRuleStatement"></a>

```go
func PutLicenseRuleStatement(value LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.putLicenseRuleStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatement</a>

---

##### `ResetInstanceRuleStatement` <a name="ResetInstanceRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resetInstanceRuleStatement"></a>

```go
func ResetInstanceRuleStatement()
```

##### `ResetLicenseConfigurationRuleStatement` <a name="ResetLicenseConfigurationRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resetLicenseConfigurationRuleStatement"></a>

```go
func ResetLicenseConfigurationRuleStatement()
```

##### `ResetLicenseRuleStatement` <a name="ResetLicenseRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.resetLicenseRuleStatement"></a>

```go
func ResetLicenseRuleStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.instanceRuleStatement">InstanceRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseConfigurationRuleStatement">LicenseConfigurationRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseRuleStatement">LicenseRuleStatement</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.instanceRuleStatementInput">InstanceRuleStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseConfigurationRuleStatementInput">LicenseConfigurationRuleStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseRuleStatementInput">LicenseRuleStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceRuleStatement`<sup>Required</sup> <a name="InstanceRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.instanceRuleStatement"></a>

```go
func InstanceRuleStatement() LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementInstanceRuleStatementOutputReference</a>

---

##### `LicenseConfigurationRuleStatement`<sup>Required</sup> <a name="LicenseConfigurationRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseConfigurationRuleStatement"></a>

```go
func LicenseConfigurationRuleStatement() LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseConfigurationRuleStatementOutputReference</a>

---

##### `LicenseRuleStatement`<sup>Required</sup> <a name="LicenseRuleStatement" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseRuleStatement"></a>

```go
func LicenseRuleStatement() LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference">LicensemanagerLicenseAssetRuleSetRulesRuleStatementLicenseRuleStatementOutputReference</a>

---

##### `InstanceRuleStatementInput`<sup>Optional</sup> <a name="InstanceRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.instanceRuleStatementInput"></a>

```go
func InstanceRuleStatementInput() interface{}
```

- *Type:* interface{}

---

##### `LicenseConfigurationRuleStatementInput`<sup>Optional</sup> <a name="LicenseConfigurationRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseConfigurationRuleStatementInput"></a>

```go
func LicenseConfigurationRuleStatementInput() interface{}
```

- *Type:* interface{}

---

##### `LicenseRuleStatementInput`<sup>Optional</sup> <a name="LicenseRuleStatementInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.licenseRuleStatementInput"></a>

```go
func LicenseRuleStatementInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetRulesRuleStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetTagsList <a name="LicensemanagerLicenseAssetRuleSetTagsList" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LicensemanagerLicenseAssetRuleSetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.get"></a>

```go
func Get(index *f64) LicensemanagerLicenseAssetRuleSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseAssetRuleSetTagsOutputReference <a name="LicensemanagerLicenseAssetRuleSetTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicenseassetruleset"

licensemanagerlicenseassetruleset.NewLicensemanagerLicenseAssetRuleSetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LicensemanagerLicenseAssetRuleSetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicenseAssetRuleSet.LicensemanagerLicenseAssetRuleSetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




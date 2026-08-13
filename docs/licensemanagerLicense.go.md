# `licensemanagerLicense` Submodule <a name="`licensemanagerLicense` Submodule" id="@cdktn/provider-awscc.licensemanagerLicense"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerLicense <a name="LicensemanagerLicense" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license awscc_licensemanager_license}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

licensemanagerlicense.NewLicensemanagerLicense(scope Construct, id *string, config LicensemanagerLicenseConfig) LicensemanagerLicense
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig">LicensemanagerLicenseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig">LicensemanagerLicenseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putConsumptionConfiguration">PutConsumptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putEntitlements">PutEntitlements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putIssuer">PutIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putLicenseMetadata">PutLicenseMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putValidity">PutValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetLicenseMetadata">ResetLicenseMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConsumptionConfiguration` <a name="PutConsumptionConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putConsumptionConfiguration"></a>

```go
func PutConsumptionConfiguration(value LicensemanagerLicenseConsumptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putConsumptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a>

---

##### `PutEntitlements` <a name="PutEntitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putEntitlements"></a>

```go
func PutEntitlements(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putEntitlements.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIssuer` <a name="PutIssuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putIssuer"></a>

```go
func PutIssuer(value LicensemanagerLicenseIssuer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putIssuer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a>

---

##### `PutLicenseMetadata` <a name="PutLicenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putLicenseMetadata"></a>

```go
func PutLicenseMetadata(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putLicenseMetadata.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutValidity` <a name="PutValidity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putValidity"></a>

```go
func PutValidity(value LicensemanagerLicenseValidity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.putValidity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a>

---

##### `ResetLicenseMetadata` <a name="ResetLicenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetLicenseMetadata"></a>

```go
func ResetLicenseMetadata()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LicensemanagerLicense resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

licensemanagerlicense.LicensemanagerLicense_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

licensemanagerlicense.LicensemanagerLicense_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

licensemanagerlicense.LicensemanagerLicense_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

licensemanagerlicense.LicensemanagerLicense_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LicensemanagerLicense resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LicensemanagerLicense to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LicensemanagerLicense that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerLicense to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.consumptionConfiguration">ConsumptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.entitlements">Entitlements</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList">LicensemanagerLicenseEntitlementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.issuer">Issuer</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference">LicensemanagerLicenseIssuerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseArn">LicenseArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseMetadata">LicenseMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList">LicensemanagerLicenseLicenseMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList">LicensemanagerLicenseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.validity">Validity</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference">LicensemanagerLicenseValidityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.beneficiaryInput">BeneficiaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.consumptionConfigurationInput">ConsumptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.entitlementsInput">EntitlementsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.homeRegionInput">HomeRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.issuerInput">IssuerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseMetadataInput">LicenseMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseNameInput">LicenseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productNameInput">ProductNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productSkuInput">ProductSkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.validityInput">ValidityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.beneficiary">Beneficiary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.homeRegion">HomeRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseName">LicenseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productName">ProductName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productSku">ProductSku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConsumptionConfiguration`<sup>Required</sup> <a name="ConsumptionConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.consumptionConfiguration"></a>

```go
func ConsumptionConfiguration() LicensemanagerLicenseConsumptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationOutputReference</a>

---

##### `Entitlements`<sup>Required</sup> <a name="Entitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.entitlements"></a>

```go
func Entitlements() LicensemanagerLicenseEntitlementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList">LicensemanagerLicenseEntitlementsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.issuer"></a>

```go
func Issuer() LicensemanagerLicenseIssuerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference">LicensemanagerLicenseIssuerOutputReference</a>

---

##### `LicenseArn`<sup>Required</sup> <a name="LicenseArn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseArn"></a>

```go
func LicenseArn() *string
```

- *Type:* *string

---

##### `LicenseMetadata`<sup>Required</sup> <a name="LicenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseMetadata"></a>

```go
func LicenseMetadata() LicensemanagerLicenseLicenseMetadataList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList">LicensemanagerLicenseLicenseMetadataList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tags"></a>

```go
func Tags() LicensemanagerLicenseTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList">LicensemanagerLicenseTagsList</a>

---

##### `Validity`<sup>Required</sup> <a name="Validity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.validity"></a>

```go
func Validity() LicensemanagerLicenseValidityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference">LicensemanagerLicenseValidityOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `BeneficiaryInput`<sup>Optional</sup> <a name="BeneficiaryInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.beneficiaryInput"></a>

```go
func BeneficiaryInput() *string
```

- *Type:* *string

---

##### `ConsumptionConfigurationInput`<sup>Optional</sup> <a name="ConsumptionConfigurationInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.consumptionConfigurationInput"></a>

```go
func ConsumptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EntitlementsInput`<sup>Optional</sup> <a name="EntitlementsInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.entitlementsInput"></a>

```go
func EntitlementsInput() interface{}
```

- *Type:* interface{}

---

##### `HomeRegionInput`<sup>Optional</sup> <a name="HomeRegionInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.homeRegionInput"></a>

```go
func HomeRegionInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.issuerInput"></a>

```go
func IssuerInput() interface{}
```

- *Type:* interface{}

---

##### `LicenseMetadataInput`<sup>Optional</sup> <a name="LicenseMetadataInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseMetadataInput"></a>

```go
func LicenseMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `LicenseNameInput`<sup>Optional</sup> <a name="LicenseNameInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseNameInput"></a>

```go
func LicenseNameInput() *string
```

- *Type:* *string

---

##### `ProductNameInput`<sup>Optional</sup> <a name="ProductNameInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productNameInput"></a>

```go
func ProductNameInput() *string
```

- *Type:* *string

---

##### `ProductSkuInput`<sup>Optional</sup> <a name="ProductSkuInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productSkuInput"></a>

```go
func ProductSkuInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ValidityInput`<sup>Optional</sup> <a name="ValidityInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.validityInput"></a>

```go
func ValidityInput() interface{}
```

- *Type:* interface{}

---

##### `Beneficiary`<sup>Required</sup> <a name="Beneficiary" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.beneficiary"></a>

```go
func Beneficiary() *string
```

- *Type:* *string

---

##### `HomeRegion`<sup>Required</sup> <a name="HomeRegion" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.homeRegion"></a>

```go
func HomeRegion() *string
```

- *Type:* *string

---

##### `LicenseName`<sup>Required</sup> <a name="LicenseName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.licenseName"></a>

```go
func LicenseName() *string
```

- *Type:* *string

---

##### `ProductName`<sup>Required</sup> <a name="ProductName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productName"></a>

```go
func ProductName() *string
```

- *Type:* *string

---

##### `ProductSku`<sup>Required</sup> <a name="ProductSku" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.productSku"></a>

```go
func ProductSku() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicense.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerLicenseConfig <a name="LicensemanagerLicenseConfig" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

&licensemanagerlicense.LicensemanagerLicenseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Beneficiary: *string,
	ConsumptionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration,
	Entitlements: interface{},
	HomeRegion: *string,
	Issuer: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.licensemanagerLicense.LicensemanagerLicenseIssuer,
	LicenseName: *string,
	ProductName: *string,
	ProductSku: *string,
	Validity: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.licensemanagerLicense.LicensemanagerLicenseValidity,
	LicenseMetadata: interface{},
	Status: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.beneficiary">Beneficiary</a></code> | <code>*string</code> | Beneficiary of the license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.consumptionConfiguration">ConsumptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#consumption_configuration LicensemanagerLicense#consumption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.entitlements">Entitlements</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#entitlements LicensemanagerLicense#entitlements}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.homeRegion">HomeRegion</a></code> | <code>*string</code> | Home region for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.issuer">Issuer</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#issuer LicensemanagerLicense#issuer}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.licenseName">LicenseName</a></code> | <code>*string</code> | Name for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.productName">ProductName</a></code> | <code>*string</code> | Product name for the created license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.productSku">ProductSku</a></code> | <code>*string</code> | ProductSKU of the license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.validity">Validity</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#validity LicensemanagerLicense#validity}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.licenseMetadata">LicenseMetadata</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#license_metadata LicensemanagerLicense#license_metadata}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#status LicensemanagerLicense#status}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of tags to attach. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Beneficiary`<sup>Required</sup> <a name="Beneficiary" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.beneficiary"></a>

```go
Beneficiary *string
```

- *Type:* *string

Beneficiary of the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#beneficiary LicensemanagerLicense#beneficiary}

---

##### `ConsumptionConfiguration`<sup>Required</sup> <a name="ConsumptionConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.consumptionConfiguration"></a>

```go
ConsumptionConfiguration LicensemanagerLicenseConsumptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration">LicensemanagerLicenseConsumptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#consumption_configuration LicensemanagerLicense#consumption_configuration}.

---

##### `Entitlements`<sup>Required</sup> <a name="Entitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.entitlements"></a>

```go
Entitlements interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#entitlements LicensemanagerLicense#entitlements}.

---

##### `HomeRegion`<sup>Required</sup> <a name="HomeRegion" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.homeRegion"></a>

```go
HomeRegion *string
```

- *Type:* *string

Home region for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#home_region LicensemanagerLicense#home_region}

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.issuer"></a>

```go
Issuer LicensemanagerLicenseIssuer
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer">LicensemanagerLicenseIssuer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#issuer LicensemanagerLicense#issuer}.

---

##### `LicenseName`<sup>Required</sup> <a name="LicenseName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.licenseName"></a>

```go
LicenseName *string
```

- *Type:* *string

Name for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#license_name LicensemanagerLicense#license_name}

---

##### `ProductName`<sup>Required</sup> <a name="ProductName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.productName"></a>

```go
ProductName *string
```

- *Type:* *string

Product name for the created license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#product_name LicensemanagerLicense#product_name}

---

##### `ProductSku`<sup>Required</sup> <a name="ProductSku" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.productSku"></a>

```go
ProductSku *string
```

- *Type:* *string

ProductSKU of the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#product_sku LicensemanagerLicense#product_sku}

---

##### `Validity`<sup>Required</sup> <a name="Validity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.validity"></a>

```go
Validity LicensemanagerLicenseValidity
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity">LicensemanagerLicenseValidity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#validity LicensemanagerLicense#validity}.

---

##### `LicenseMetadata`<sup>Optional</sup> <a name="LicenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.licenseMetadata"></a>

```go
LicenseMetadata interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#license_metadata LicensemanagerLicense#license_metadata}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#status LicensemanagerLicense#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of tags to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#tags LicensemanagerLicense#tags}

---

### LicensemanagerLicenseConsumptionConfiguration <a name="LicensemanagerLicenseConsumptionConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

&licensemanagerlicense.LicensemanagerLicenseConsumptionConfiguration {
	BorrowConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration,
	ProvisionalConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration,
	RenewType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.borrowConfiguration">BorrowConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#borrow_configuration LicensemanagerLicense#borrow_configuration}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.provisionalConfiguration">ProvisionalConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#provisional_configuration LicensemanagerLicense#provisional_configuration}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.renewType">RenewType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#renew_type LicensemanagerLicense#renew_type}. |

---

##### `BorrowConfiguration`<sup>Optional</sup> <a name="BorrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.borrowConfiguration"></a>

```go
BorrowConfiguration LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#borrow_configuration LicensemanagerLicense#borrow_configuration}.

---

##### `ProvisionalConfiguration`<sup>Optional</sup> <a name="ProvisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.provisionalConfiguration"></a>

```go
ProvisionalConfiguration LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#provisional_configuration LicensemanagerLicense#provisional_configuration}.

---

##### `RenewType`<sup>Optional</sup> <a name="RenewType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfiguration.property.renewType"></a>

```go
RenewType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#renew_type LicensemanagerLicense#renew_type}.

---

### LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration <a name="LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

&licensemanagerlicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration {
	AllowEarlyCheckIn: interface{},
	MaxTimeToLiveInMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.property.allowEarlyCheckIn">AllowEarlyCheckIn</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#allow_early_check_in LicensemanagerLicense#allow_early_check_in}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.property.maxTimeToLiveInMinutes">MaxTimeToLiveInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}. |

---

##### `AllowEarlyCheckIn`<sup>Optional</sup> <a name="AllowEarlyCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.property.allowEarlyCheckIn"></a>

```go
AllowEarlyCheckIn interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#allow_early_check_in LicensemanagerLicense#allow_early_check_in}.

---

##### `MaxTimeToLiveInMinutes`<sup>Optional</sup> <a name="MaxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration.property.maxTimeToLiveInMinutes"></a>

```go
MaxTimeToLiveInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}.

---

### LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration <a name="LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

&licensemanagerlicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration {
	MaxTimeToLiveInMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration.property.maxTimeToLiveInMinutes">MaxTimeToLiveInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}. |

---

##### `MaxTimeToLiveInMinutes`<sup>Optional</sup> <a name="MaxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration.property.maxTimeToLiveInMinutes"></a>

```go
MaxTimeToLiveInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}.

---

### LicensemanagerLicenseEntitlements <a name="LicensemanagerLicenseEntitlements" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

&licensemanagerlicense.LicensemanagerLicenseEntitlements {
	Name: *string,
	Unit: *string,
	AllowCheckIn: interface{},
	MaxCount: *f64,
	Overage: interface{},
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.unit">Unit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#unit LicensemanagerLicense#unit}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.allowCheckIn">AllowCheckIn</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#allow_check_in LicensemanagerLicense#allow_check_in}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.maxCount">MaxCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#max_count LicensemanagerLicense#max_count}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.overage">Overage</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#overage LicensemanagerLicense#overage}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}.

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#unit LicensemanagerLicense#unit}.

---

##### `AllowCheckIn`<sup>Optional</sup> <a name="AllowCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.allowCheckIn"></a>

```go
AllowCheckIn interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#allow_check_in LicensemanagerLicense#allow_check_in}.

---

##### `MaxCount`<sup>Optional</sup> <a name="MaxCount" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.maxCount"></a>

```go
MaxCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#max_count LicensemanagerLicense#max_count}.

---

##### `Overage`<sup>Optional</sup> <a name="Overage" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.overage"></a>

```go
Overage interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#overage LicensemanagerLicense#overage}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlements.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}.

---

### LicensemanagerLicenseIssuer <a name="LicensemanagerLicenseIssuer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

&licensemanagerlicense.LicensemanagerLicenseIssuer {
	Name: *string,
	SignKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.property.signKey">SignKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#sign_key LicensemanagerLicense#sign_key}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}.

---

##### `SignKey`<sup>Optional</sup> <a name="SignKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuer.property.signKey"></a>

```go
SignKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#sign_key LicensemanagerLicense#sign_key}.

---

### LicensemanagerLicenseLicenseMetadata <a name="LicensemanagerLicenseLicenseMetadata" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

&licensemanagerlicense.LicensemanagerLicenseLicenseMetadata {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#name LicensemanagerLicense#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadata.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}.

---

### LicensemanagerLicenseTags <a name="LicensemanagerLicenseTags" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

&licensemanagerlicense.LicensemanagerLicenseTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#key LicensemanagerLicense#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#value LicensemanagerLicense#value}

---

### LicensemanagerLicenseValidity <a name="LicensemanagerLicenseValidity" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

&licensemanagerlicense.LicensemanagerLicenseValidity {
	Begin: *string,
	End: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.property.begin">Begin</a></code> | <code>*string</code> | Validity begin date for the license. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.property.end">End</a></code> | <code>*string</code> | Validity begin date for the license. |

---

##### `Begin`<sup>Required</sup> <a name="Begin" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.property.begin"></a>

```go
Begin *string
```

- *Type:* *string

Validity begin date for the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#begin LicensemanagerLicense#begin}

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidity.property.end"></a>

```go
End *string
```

- *Type:* *string

Validity begin date for the license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/licensemanager_license#end LicensemanagerLicense#end}

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference <a name="LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

licensemanagerlicense.NewLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resetAllowEarlyCheckIn">ResetAllowEarlyCheckIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resetMaxTimeToLiveInMinutes">ResetMaxTimeToLiveInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowEarlyCheckIn` <a name="ResetAllowEarlyCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resetAllowEarlyCheckIn"></a>

```go
func ResetAllowEarlyCheckIn()
```

##### `ResetMaxTimeToLiveInMinutes` <a name="ResetMaxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.resetMaxTimeToLiveInMinutes"></a>

```go
func ResetMaxTimeToLiveInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckInInput">AllowEarlyCheckInInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutesInput">MaxTimeToLiveInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckIn">AllowEarlyCheckIn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutes">MaxTimeToLiveInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowEarlyCheckInInput`<sup>Optional</sup> <a name="AllowEarlyCheckInInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckInInput"></a>

```go
func AllowEarlyCheckInInput() interface{}
```

- *Type:* interface{}

---

##### `MaxTimeToLiveInMinutesInput`<sup>Optional</sup> <a name="MaxTimeToLiveInMinutesInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutesInput"></a>

```go
func MaxTimeToLiveInMinutesInput() *f64
```

- *Type:* *f64

---

##### `AllowEarlyCheckIn`<sup>Required</sup> <a name="AllowEarlyCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.allowEarlyCheckIn"></a>

```go
func AllowEarlyCheckIn() interface{}
```

- *Type:* interface{}

---

##### `MaxTimeToLiveInMinutes`<sup>Required</sup> <a name="MaxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.maxTimeToLiveInMinutes"></a>

```go
func MaxTimeToLiveInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseConsumptionConfigurationOutputReference <a name="LicensemanagerLicenseConsumptionConfigurationOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

licensemanagerlicense.NewLicensemanagerLicenseConsumptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerLicenseConsumptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putBorrowConfiguration">PutBorrowConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putProvisionalConfiguration">PutProvisionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetBorrowConfiguration">ResetBorrowConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetProvisionalConfiguration">ResetProvisionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetRenewType">ResetRenewType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBorrowConfiguration` <a name="PutBorrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putBorrowConfiguration"></a>

```go
func PutBorrowConfiguration(value LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putBorrowConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration">LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration</a>

---

##### `PutProvisionalConfiguration` <a name="PutProvisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putProvisionalConfiguration"></a>

```go
func PutProvisionalConfiguration(value LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.putProvisionalConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration">LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration</a>

---

##### `ResetBorrowConfiguration` <a name="ResetBorrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetBorrowConfiguration"></a>

```go
func ResetBorrowConfiguration()
```

##### `ResetProvisionalConfiguration` <a name="ResetProvisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetProvisionalConfiguration"></a>

```go
func ResetProvisionalConfiguration()
```

##### `ResetRenewType` <a name="ResetRenewType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.resetRenewType"></a>

```go
func ResetRenewType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfiguration">BorrowConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfiguration">ProvisionalConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfigurationInput">BorrowConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfigurationInput">ProvisionalConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewTypeInput">RenewTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewType">RenewType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BorrowConfiguration`<sup>Required</sup> <a name="BorrowConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfiguration"></a>

```go
func BorrowConfiguration() LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationBorrowConfigurationOutputReference</a>

---

##### `ProvisionalConfiguration`<sup>Required</sup> <a name="ProvisionalConfiguration" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfiguration"></a>

```go
func ProvisionalConfiguration() LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference">LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference</a>

---

##### `BorrowConfigurationInput`<sup>Optional</sup> <a name="BorrowConfigurationInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.borrowConfigurationInput"></a>

```go
func BorrowConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ProvisionalConfigurationInput`<sup>Optional</sup> <a name="ProvisionalConfigurationInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.provisionalConfigurationInput"></a>

```go
func ProvisionalConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RenewTypeInput`<sup>Optional</sup> <a name="RenewTypeInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewTypeInput"></a>

```go
func RenewTypeInput() *string
```

- *Type:* *string

---

##### `RenewType`<sup>Required</sup> <a name="RenewType" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.renewType"></a>

```go
func RenewType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference <a name="LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

licensemanagerlicense.NewLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resetMaxTimeToLiveInMinutes">ResetMaxTimeToLiveInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxTimeToLiveInMinutes` <a name="ResetMaxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.resetMaxTimeToLiveInMinutes"></a>

```go
func ResetMaxTimeToLiveInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutesInput">MaxTimeToLiveInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutes">MaxTimeToLiveInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxTimeToLiveInMinutesInput`<sup>Optional</sup> <a name="MaxTimeToLiveInMinutesInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutesInput"></a>

```go
func MaxTimeToLiveInMinutesInput() *f64
```

- *Type:* *f64

---

##### `MaxTimeToLiveInMinutes`<sup>Required</sup> <a name="MaxTimeToLiveInMinutes" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.maxTimeToLiveInMinutes"></a>

```go
func MaxTimeToLiveInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseEntitlementsList <a name="LicensemanagerLicenseEntitlementsList" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

licensemanagerlicense.NewLicensemanagerLicenseEntitlementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LicensemanagerLicenseEntitlementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.get"></a>

```go
func Get(index *f64) LicensemanagerLicenseEntitlementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseEntitlementsOutputReference <a name="LicensemanagerLicenseEntitlementsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

licensemanagerlicense.NewLicensemanagerLicenseEntitlementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LicensemanagerLicenseEntitlementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetAllowCheckIn">ResetAllowCheckIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetMaxCount">ResetMaxCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetOverage">ResetOverage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowCheckIn` <a name="ResetAllowCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetAllowCheckIn"></a>

```go
func ResetAllowCheckIn()
```

##### `ResetMaxCount` <a name="ResetMaxCount" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetMaxCount"></a>

```go
func ResetMaxCount()
```

##### `ResetOverage` <a name="ResetOverage" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetOverage"></a>

```go
func ResetOverage()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.allowCheckInInput">AllowCheckInInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.maxCountInput">MaxCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.overageInput">OverageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.allowCheckIn">AllowCheckIn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.maxCount">MaxCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.overage">Overage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowCheckInInput`<sup>Optional</sup> <a name="AllowCheckInInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.allowCheckInInput"></a>

```go
func AllowCheckInInput() interface{}
```

- *Type:* interface{}

---

##### `MaxCountInput`<sup>Optional</sup> <a name="MaxCountInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.maxCountInput"></a>

```go
func MaxCountInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OverageInput`<sup>Optional</sup> <a name="OverageInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.overageInput"></a>

```go
func OverageInput() interface{}
```

- *Type:* interface{}

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `AllowCheckIn`<sup>Required</sup> <a name="AllowCheckIn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.allowCheckIn"></a>

```go
func AllowCheckIn() interface{}
```

- *Type:* interface{}

---

##### `MaxCount`<sup>Required</sup> <a name="MaxCount" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.maxCount"></a>

```go
func MaxCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Overage`<sup>Required</sup> <a name="Overage" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.overage"></a>

```go
func Overage() interface{}
```

- *Type:* interface{}

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseEntitlementsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseIssuerOutputReference <a name="LicensemanagerLicenseIssuerOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

licensemanagerlicense.NewLicensemanagerLicenseIssuerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerLicenseIssuerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resetSignKey">ResetSignKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSignKey` <a name="ResetSignKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.resetSignKey"></a>

```go
func ResetSignKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.signKeyInput">SignKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.signKey">SignKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SignKeyInput`<sup>Optional</sup> <a name="SignKeyInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.signKeyInput"></a>

```go
func SignKeyInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SignKey`<sup>Required</sup> <a name="SignKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.signKey"></a>

```go
func SignKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseIssuerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseLicenseMetadataList <a name="LicensemanagerLicenseLicenseMetadataList" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

licensemanagerlicense.NewLicensemanagerLicenseLicenseMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LicensemanagerLicenseLicenseMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.get"></a>

```go
func Get(index *f64) LicensemanagerLicenseLicenseMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseLicenseMetadataOutputReference <a name="LicensemanagerLicenseLicenseMetadataOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

licensemanagerlicense.NewLicensemanagerLicenseLicenseMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LicensemanagerLicenseLicenseMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseLicenseMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseTagsList <a name="LicensemanagerLicenseTagsList" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

licensemanagerlicense.NewLicensemanagerLicenseTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LicensemanagerLicenseTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.get"></a>

```go
func Get(index *f64) LicensemanagerLicenseTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseTagsOutputReference <a name="LicensemanagerLicenseTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

licensemanagerlicense.NewLicensemanagerLicenseTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LicensemanagerLicenseTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerLicenseValidityOutputReference <a name="LicensemanagerLicenseValidityOutputReference" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerlicense"

licensemanagerlicense.NewLicensemanagerLicenseValidityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerLicenseValidityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.beginInput">BeginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.endInput">EndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.begin">Begin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BeginInput`<sup>Optional</sup> <a name="BeginInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.beginInput"></a>

```go
func BeginInput() *string
```

- *Type:* *string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.endInput"></a>

```go
func EndInput() *string
```

- *Type:* *string

---

##### `Begin`<sup>Required</sup> <a name="Begin" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.begin"></a>

```go
func Begin() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerLicense.LicensemanagerLicenseValidityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




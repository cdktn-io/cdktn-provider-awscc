# `licensemanagerusersubscriptionsLicenseServerEndpoint` Submodule <a name="`licensemanagerusersubscriptionsLicenseServerEndpoint` Submodule" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerusersubscriptionsLicenseServerEndpoint <a name="LicensemanagerusersubscriptionsLicenseServerEndpoint" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint awscc_licensemanagerusersubscriptions_license_server_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

licensemanagerusersubscriptionslicenseserverendpoint.NewLicensemanagerusersubscriptionsLicenseServerEndpoint(scope Construct, id *string, config LicensemanagerusersubscriptionsLicenseServerEndpointConfig) LicensemanagerusersubscriptionsLicenseServerEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig">LicensemanagerusersubscriptionsLicenseServerEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig">LicensemanagerusersubscriptionsLicenseServerEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.putLicenseServerSettings">PutLicenseServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.resetLicenseServerSettings">ResetLicenseServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLicenseServerSettings` <a name="PutLicenseServerSettings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.putLicenseServerSettings"></a>

```go
func PutLicenseServerSettings(value LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.putLicenseServerSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLicenseServerSettings` <a name="ResetLicenseServerSettings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.resetLicenseServerSettings"></a>

```go
func ResetLicenseServerSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LicensemanagerusersubscriptionsLicenseServerEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

licensemanagerusersubscriptionslicenseserverendpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

licensemanagerusersubscriptionslicenseserverendpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

licensemanagerusersubscriptionslicenseserverendpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

licensemanagerusersubscriptionslicenseserverendpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LicensemanagerusersubscriptionsLicenseServerEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LicensemanagerusersubscriptionsLicenseServerEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LicensemanagerusersubscriptionsLicenseServerEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerusersubscriptionsLicenseServerEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerEndpointArn">LicenseServerEndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerEndpointId">LicenseServerEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerEndpointProvisioningStatus">LicenseServerEndpointProvisioningStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServers">LicenseServers</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerSettings">LicenseServerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.serverEndpoint">ServerEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.serverType">ServerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList">LicensemanagerusersubscriptionsLicenseServerEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.identityProviderArnInput">IdentityProviderArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerSettingsInput">LicenseServerSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.identityProviderArn">IdentityProviderArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LicenseServerEndpointArn`<sup>Required</sup> <a name="LicenseServerEndpointArn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerEndpointArn"></a>

```go
func LicenseServerEndpointArn() *string
```

- *Type:* *string

---

##### `LicenseServerEndpointId`<sup>Required</sup> <a name="LicenseServerEndpointId" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerEndpointId"></a>

```go
func LicenseServerEndpointId() *string
```

- *Type:* *string

---

##### `LicenseServerEndpointProvisioningStatus`<sup>Required</sup> <a name="LicenseServerEndpointProvisioningStatus" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerEndpointProvisioningStatus"></a>

```go
func LicenseServerEndpointProvisioningStatus() *string
```

- *Type:* *string

---

##### `LicenseServers`<sup>Required</sup> <a name="LicenseServers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServers"></a>

```go
func LicenseServers() LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList</a>

---

##### `LicenseServerSettings`<sup>Required</sup> <a name="LicenseServerSettings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerSettings"></a>

```go
func LicenseServerSettings() LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference</a>

---

##### `ServerEndpoint`<sup>Required</sup> <a name="ServerEndpoint" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.serverEndpoint"></a>

```go
func ServerEndpoint() LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference</a>

---

##### `ServerType`<sup>Required</sup> <a name="ServerType" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.serverType"></a>

```go
func ServerType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.tags"></a>

```go
func Tags() LicensemanagerusersubscriptionsLicenseServerEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList">LicensemanagerusersubscriptionsLicenseServerEndpointTagsList</a>

---

##### `IdentityProviderArnInput`<sup>Optional</sup> <a name="IdentityProviderArnInput" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.identityProviderArnInput"></a>

```go
func IdentityProviderArnInput() *string
```

- *Type:* *string

---

##### `LicenseServerSettingsInput`<sup>Optional</sup> <a name="LicenseServerSettingsInput" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.licenseServerSettingsInput"></a>

```go
func LicenseServerSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `IdentityProviderArn`<sup>Required</sup> <a name="IdentityProviderArn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.identityProviderArn"></a>

```go
func IdentityProviderArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerusersubscriptionsLicenseServerEndpointConfig <a name="LicensemanagerusersubscriptionsLicenseServerEndpointConfig" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

&licensemanagerusersubscriptionslicenseserverendpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IdentityProviderArn: *string,
	LicenseServerSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.identityProviderArn">IdentityProviderArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) that identifies the registered identity provider the license server endpoint is created for. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.licenseServerSettings">LicenseServerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings</a></code> | The settings of the RDS license server to create the endpoint for. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags that apply for the license server endpoint. A maximum of 50 tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdentityProviderArn`<sup>Required</sup> <a name="IdentityProviderArn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.identityProviderArn"></a>

```go
IdentityProviderArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) that identifies the registered identity provider the license server endpoint is created for.

For Active Directory, that can be a self-managed Active Directory or an AWS Managed Microsoft AD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#identity_provider_arn LicensemanagerusersubscriptionsLicenseServerEndpoint#identity_provider_arn}

---

##### `LicenseServerSettings`<sup>Optional</sup> <a name="LicenseServerSettings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.licenseServerSettings"></a>

```go
LicenseServerSettings LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings</a>

The settings of the RDS license server to create the endpoint for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#license_server_settings LicensemanagerusersubscriptionsLicenseServerEndpoint#license_server_settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags that apply for the license server endpoint. A maximum of 50 tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#tags LicensemanagerusersubscriptionsLicenseServerEndpoint#tags}

---

### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

&licensemanagerusersubscriptionslicenseserverendpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers {

}
```


### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

&licensemanagerusersubscriptionslicenseserverendpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings {
	ServerSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings,
	ServerType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings.property.serverSettings">ServerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings</a></code> | The settings of a license server, by server type. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings.property.serverType">ServerType</a></code> | <code>*string</code> | The type of license server. |

---

##### `ServerSettings`<sup>Optional</sup> <a name="ServerSettings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings.property.serverSettings"></a>

```go
ServerSettings LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings</a>

The settings of a license server, by server type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#server_settings LicensemanagerusersubscriptionsLicenseServerEndpoint#server_settings}

---

##### `ServerType`<sup>Optional</sup> <a name="ServerType" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettings.property.serverType"></a>

```go
ServerType *string
```

- *Type:* *string

The type of license server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#server_type LicensemanagerusersubscriptionsLicenseServerEndpoint#server_type}

---

### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

&licensemanagerusersubscriptionslicenseserverendpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings {
	RdsSalSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings.property.rdsSalSettings">RdsSalSettings</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings</a></code> | The settings of a Remote Desktop Services Subscriber Access License server. |

---

##### `RdsSalSettings`<sup>Optional</sup> <a name="RdsSalSettings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings.property.rdsSalSettings"></a>

```go
RdsSalSettings LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings</a>

The settings of a Remote Desktop Services Subscriber Access License server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#rds_sal_settings LicensemanagerusersubscriptionsLicenseServerEndpoint#rds_sal_settings}

---

### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

&licensemanagerusersubscriptionslicenseserverendpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings {
	RdsSalCredentialsProvider: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings.property.rdsSalCredentialsProvider">RdsSalCredentialsProvider</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider</a></code> | The source of the credentials that License Manager uses to reach the license server. |

---

##### `RdsSalCredentialsProvider`<sup>Optional</sup> <a name="RdsSalCredentialsProvider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings.property.rdsSalCredentialsProvider"></a>

```go
RdsSalCredentialsProvider LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider</a>

The source of the credentials that License Manager uses to reach the license server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#rds_sal_credentials_provider LicensemanagerusersubscriptionsLicenseServerEndpoint#rds_sal_credentials_provider}

---

### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

&licensemanagerusersubscriptionslicenseserverendpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider {
	SecretsManagerCredentialsProvider: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider.property.secretsManagerCredentialsProvider">SecretsManagerCredentialsProvider</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider</a></code> | Credentials held in AWS Secrets Manager. |

---

##### `SecretsManagerCredentialsProvider`<sup>Optional</sup> <a name="SecretsManagerCredentialsProvider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider.property.secretsManagerCredentialsProvider"></a>

```go
SecretsManagerCredentialsProvider LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider</a>

Credentials held in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#secrets_manager_credentials_provider LicensemanagerusersubscriptionsLicenseServerEndpoint#secrets_manager_credentials_provider}

---

### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

&licensemanagerusersubscriptionslicenseserverendpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider {
	SecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider.property.secretId">SecretId</a></code> | <code>*string</code> | The identifier of the Secrets Manager secret that holds the license server administrator credentials. |

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

The identifier of the Secrets Manager secret that holds the license server administrator credentials.

The name of the secret must begin with the prefix license-manager-user-.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#secret_id LicensemanagerusersubscriptionsLicenseServerEndpoint#secret_id}

---

### LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint <a name="LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

&licensemanagerusersubscriptionslicenseserverendpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint {

}
```


### LicensemanagerusersubscriptionsLicenseServerEndpointTags <a name="LicensemanagerusersubscriptionsLicenseServerEndpointTags" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

&licensemanagerusersubscriptionslicenseserverendpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags.property.key">Key</a></code> | <code>*string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags.property.value">Value</a></code> | <code>*string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#key LicensemanagerusersubscriptionsLicenseServerEndpoint#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerusersubscriptions_license_server_endpoint#value LicensemanagerusersubscriptionsLicenseServerEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

licensemanagerusersubscriptionslicenseserverendpoint.NewLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.putServerSettings">PutServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.resetServerSettings">ResetServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.resetServerType">ResetServerType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServerSettings` <a name="PutServerSettings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.putServerSettings"></a>

```go
func PutServerSettings(value LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.putServerSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettings</a>

---

##### `ResetServerSettings` <a name="ResetServerSettings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.resetServerSettings"></a>

```go
func ResetServerSettings()
```

##### `ResetServerType` <a name="ResetServerType" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.resetServerType"></a>

```go
func ResetServerType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.serverSettings">ServerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.serverSettingsInput">ServerSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.serverTypeInput">ServerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.serverType">ServerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServerSettings`<sup>Required</sup> <a name="ServerSettings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.serverSettings"></a>

```go
func ServerSettings() LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference</a>

---

##### `ServerSettingsInput`<sup>Optional</sup> <a name="ServerSettingsInput" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.serverSettingsInput"></a>

```go
func ServerSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `ServerTypeInput`<sup>Optional</sup> <a name="ServerTypeInput" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.serverTypeInput"></a>

```go
func ServerTypeInput() *string
```

- *Type:* *string

---

##### `ServerType`<sup>Required</sup> <a name="ServerType" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.serverType"></a>

```go
func ServerType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

licensemanagerusersubscriptionslicenseserverendpoint.NewLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.putRdsSalSettings">PutRdsSalSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.resetRdsSalSettings">ResetRdsSalSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRdsSalSettings` <a name="PutRdsSalSettings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.putRdsSalSettings"></a>

```go
func PutRdsSalSettings(value LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.putRdsSalSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettings</a>

---

##### `ResetRdsSalSettings` <a name="ResetRdsSalSettings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.resetRdsSalSettings"></a>

```go
func ResetRdsSalSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.rdsSalSettings">RdsSalSettings</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.rdsSalSettingsInput">RdsSalSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RdsSalSettings`<sup>Required</sup> <a name="RdsSalSettings" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.rdsSalSettings"></a>

```go
func RdsSalSettings() LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference</a>

---

##### `RdsSalSettingsInput`<sup>Optional</sup> <a name="RdsSalSettingsInput" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.rdsSalSettingsInput"></a>

```go
func RdsSalSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

licensemanagerusersubscriptionslicenseserverendpoint.NewLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.putRdsSalCredentialsProvider">PutRdsSalCredentialsProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.resetRdsSalCredentialsProvider">ResetRdsSalCredentialsProvider</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRdsSalCredentialsProvider` <a name="PutRdsSalCredentialsProvider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.putRdsSalCredentialsProvider"></a>

```go
func PutRdsSalCredentialsProvider(value LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.putRdsSalCredentialsProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProvider</a>

---

##### `ResetRdsSalCredentialsProvider` <a name="ResetRdsSalCredentialsProvider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.resetRdsSalCredentialsProvider"></a>

```go
func ResetRdsSalCredentialsProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.rdsSalCredentialsProvider">RdsSalCredentialsProvider</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.rdsSalCredentialsProviderInput">RdsSalCredentialsProviderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RdsSalCredentialsProvider`<sup>Required</sup> <a name="RdsSalCredentialsProvider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.rdsSalCredentialsProvider"></a>

```go
func RdsSalCredentialsProvider() LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference</a>

---

##### `RdsSalCredentialsProviderInput`<sup>Optional</sup> <a name="RdsSalCredentialsProviderInput" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.rdsSalCredentialsProviderInput"></a>

```go
func RdsSalCredentialsProviderInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

licensemanagerusersubscriptionslicenseserverendpoint.NewLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.putSecretsManagerCredentialsProvider">PutSecretsManagerCredentialsProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.resetSecretsManagerCredentialsProvider">ResetSecretsManagerCredentialsProvider</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretsManagerCredentialsProvider` <a name="PutSecretsManagerCredentialsProvider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.putSecretsManagerCredentialsProvider"></a>

```go
func PutSecretsManagerCredentialsProvider(value LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.putSecretsManagerCredentialsProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProvider</a>

---

##### `ResetSecretsManagerCredentialsProvider` <a name="ResetSecretsManagerCredentialsProvider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.resetSecretsManagerCredentialsProvider"></a>

```go
func ResetSecretsManagerCredentialsProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.secretsManagerCredentialsProvider">SecretsManagerCredentialsProvider</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.secretsManagerCredentialsProviderInput">SecretsManagerCredentialsProviderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretsManagerCredentialsProvider`<sup>Required</sup> <a name="SecretsManagerCredentialsProvider" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.secretsManagerCredentialsProvider"></a>

```go
func SecretsManagerCredentialsProvider() LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference</a>

---

##### `SecretsManagerCredentialsProviderInput`<sup>Optional</sup> <a name="SecretsManagerCredentialsProviderInput" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.secretsManagerCredentialsProviderInput"></a>

```go
func SecretsManagerCredentialsProviderInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

licensemanagerusersubscriptionslicenseserverendpoint.NewLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.resetSecretId"></a>

```go
func ResetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServerSettingsServerSettingsRdsSalSettingsRdsSalCredentialsProviderSecretsManagerCredentialsProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

licensemanagerusersubscriptionslicenseserverendpoint.NewLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.get"></a>

```go
func Get(index *f64) LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference <a name="LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

licensemanagerusersubscriptionslicenseserverendpoint.NewLicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.healthStatus">HealthStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.provisioningStatus">ProvisioningStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HealthStatus`<sup>Required</sup> <a name="HealthStatus" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.healthStatus"></a>

```go
func HealthStatus() *string
```

- *Type:* *string

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.ipv4Address"></a>

```go
func Ipv4Address() *string
```

- *Type:* *string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.ipv6Address"></a>

```go
func Ipv6Address() *string
```

- *Type:* *string

---

##### `ProvisioningStatus`<sup>Required</sup> <a name="ProvisioningStatus" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.provisioningStatus"></a>

```go
func ProvisioningStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServersOutputReference.property.internalValue"></a>

```go
func InternalValue() LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers">LicensemanagerusersubscriptionsLicenseServerEndpointLicenseServers</a>

---


### LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference <a name="LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

licensemanagerusersubscriptionslicenseserverendpoint.NewLicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint">LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint">LicensemanagerusersubscriptionsLicenseServerEndpointServerEndpoint</a>

---


### LicensemanagerusersubscriptionsLicenseServerEndpointTagsList <a name="LicensemanagerusersubscriptionsLicenseServerEndpointTagsList" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

licensemanagerusersubscriptionslicenseserverendpoint.NewLicensemanagerusersubscriptionsLicenseServerEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LicensemanagerusersubscriptionsLicenseServerEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.get"></a>

```go
func Get(index *f64) LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference <a name="LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/licensemanagerusersubscriptionslicenseserverendpoint"

licensemanagerusersubscriptionslicenseserverendpoint.NewLicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerusersubscriptionsLicenseServerEndpoint.LicensemanagerusersubscriptionsLicenseServerEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




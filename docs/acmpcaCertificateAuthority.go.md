# `acmpcaCertificateAuthority` Submodule <a name="`acmpcaCertificateAuthority` Submodule" id="@cdktn/provider-awscc.acmpcaCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmpcaCertificateAuthority <a name="AcmpcaCertificateAuthority" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority awscc_acmpca_certificate_authority}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthority(scope Construct, id *string, config AcmpcaCertificateAuthorityConfig) AcmpcaCertificateAuthority
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig">AcmpcaCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig">AcmpcaCertificateAuthorityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putCsrExtensions">PutCsrExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putRevocationConfiguration">PutRevocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject">PutSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetCsrExtensions">ResetCsrExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetKeyStorageSecurityStandard">ResetKeyStorageSecurityStandard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetRevocationConfiguration">ResetRevocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetUsageMode">ResetUsageMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCsrExtensions` <a name="PutCsrExtensions" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putCsrExtensions"></a>

```go
func PutCsrExtensions(value AcmpcaCertificateAuthorityCsrExtensions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putCsrExtensions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions">AcmpcaCertificateAuthorityCsrExtensions</a>

---

##### `PutRevocationConfiguration` <a name="PutRevocationConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putRevocationConfiguration"></a>

```go
func PutRevocationConfiguration(value AcmpcaCertificateAuthorityRevocationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putRevocationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a>

---

##### `PutSubject` <a name="PutSubject" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject"></a>

```go
func PutSubject(value AcmpcaCertificateAuthoritySubject)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putSubject.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject">AcmpcaCertificateAuthoritySubject</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCsrExtensions` <a name="ResetCsrExtensions" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetCsrExtensions"></a>

```go
func ResetCsrExtensions()
```

##### `ResetKeyStorageSecurityStandard` <a name="ResetKeyStorageSecurityStandard" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetKeyStorageSecurityStandard"></a>

```go
func ResetKeyStorageSecurityStandard()
```

##### `ResetRevocationConfiguration` <a name="ResetRevocationConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetRevocationConfiguration"></a>

```go
func ResetRevocationConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUsageMode` <a name="ResetUsageMode" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.resetUsageMode"></a>

```go
func ResetUsageMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AcmpcaCertificateAuthority resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.AcmpcaCertificateAuthority_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.AcmpcaCertificateAuthority_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.AcmpcaCertificateAuthority_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.AcmpcaCertificateAuthority_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AcmpcaCertificateAuthority resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AcmpcaCertificateAuthority to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AcmpcaCertificateAuthority that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AcmpcaCertificateAuthority to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateSigningRequest">CertificateSigningRequest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.csrExtensions">CsrExtensions</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference">AcmpcaCertificateAuthorityCsrExtensionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.revocationConfiguration">RevocationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.subject">Subject</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference">AcmpcaCertificateAuthoritySubjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList">AcmpcaCertificateAuthorityTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.csrExtensionsInput">CsrExtensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyAlgorithmInput">KeyAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyStorageSecurityStandardInput">KeyStorageSecurityStandardInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.revocationConfigurationInput">RevocationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.signingAlgorithmInput">SigningAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.subjectInput">SubjectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.usageModeInput">UsageModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyStorageSecurityStandard">KeyStorageSecurityStandard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.usageMode">UsageMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CertificateSigningRequest`<sup>Required</sup> <a name="CertificateSigningRequest" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.certificateSigningRequest"></a>

```go
func CertificateSigningRequest() *string
```

- *Type:* *string

---

##### `CsrExtensions`<sup>Required</sup> <a name="CsrExtensions" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.csrExtensions"></a>

```go
func CsrExtensions() AcmpcaCertificateAuthorityCsrExtensionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference">AcmpcaCertificateAuthorityCsrExtensionsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RevocationConfiguration`<sup>Required</sup> <a name="RevocationConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.revocationConfiguration"></a>

```go
func RevocationConfiguration() AcmpcaCertificateAuthorityRevocationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationOutputReference</a>

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.subject"></a>

```go
func Subject() AcmpcaCertificateAuthoritySubjectOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference">AcmpcaCertificateAuthoritySubjectOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tags"></a>

```go
func Tags() AcmpcaCertificateAuthorityTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList">AcmpcaCertificateAuthorityTagsList</a>

---

##### `CsrExtensionsInput`<sup>Optional</sup> <a name="CsrExtensionsInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.csrExtensionsInput"></a>

```go
func CsrExtensionsInput() interface{}
```

- *Type:* interface{}

---

##### `KeyAlgorithmInput`<sup>Optional</sup> <a name="KeyAlgorithmInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyAlgorithmInput"></a>

```go
func KeyAlgorithmInput() *string
```

- *Type:* *string

---

##### `KeyStorageSecurityStandardInput`<sup>Optional</sup> <a name="KeyStorageSecurityStandardInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyStorageSecurityStandardInput"></a>

```go
func KeyStorageSecurityStandardInput() *string
```

- *Type:* *string

---

##### `RevocationConfigurationInput`<sup>Optional</sup> <a name="RevocationConfigurationInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.revocationConfigurationInput"></a>

```go
func RevocationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SigningAlgorithmInput`<sup>Optional</sup> <a name="SigningAlgorithmInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.signingAlgorithmInput"></a>

```go
func SigningAlgorithmInput() *string
```

- *Type:* *string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.subjectInput"></a>

```go
func SubjectInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UsageModeInput`<sup>Optional</sup> <a name="UsageModeInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.usageModeInput"></a>

```go
func UsageModeInput() *string
```

- *Type:* *string

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyAlgorithm"></a>

```go
func KeyAlgorithm() *string
```

- *Type:* *string

---

##### `KeyStorageSecurityStandard`<sup>Required</sup> <a name="KeyStorageSecurityStandard" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.keyStorageSecurityStandard"></a>

```go
func KeyStorageSecurityStandard() *string
```

- *Type:* *string

---

##### `SigningAlgorithm`<sup>Required</sup> <a name="SigningAlgorithm" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.signingAlgorithm"></a>

```go
func SigningAlgorithm() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UsageMode`<sup>Required</sup> <a name="UsageMode" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.usageMode"></a>

```go
func UsageMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthority.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AcmpcaCertificateAuthorityConfig <a name="AcmpcaCertificateAuthorityConfig" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

&acmpcacertificateauthority.AcmpcaCertificateAuthorityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	KeyAlgorithm: *string,
	SigningAlgorithm: *string,
	Subject: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject,
	Type: *string,
	CsrExtensions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions,
	KeyStorageSecurityStandard: *string,
	RevocationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration,
	Tags: interface{},
	UsageMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>*string</code> | Public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.signingAlgorithm">SigningAlgorithm</a></code> | <code>*string</code> | Algorithm your CA uses to sign certificate requests. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.subject">Subject</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject">AcmpcaCertificateAuthoritySubject</a></code> | Structure that contains X.500 distinguished name information for your CA. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.type">Type</a></code> | <code>*string</code> | The type of the certificate authority. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.csrExtensions">CsrExtensions</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions">AcmpcaCertificateAuthorityCsrExtensions</a></code> | Structure that contains CSR pass through extension information used by the CreateCertificateAuthority action. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.keyStorageSecurityStandard">KeyStorageSecurityStandard</a></code> | <code>*string</code> | KeyStorageSecurityStadard defines a cryptographic key management compliance standard used for handling CA keys. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.revocationConfiguration">RevocationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a></code> | Certificate revocation information used by the CreateCertificateAuthority and UpdateCertificateAuthority actions. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#tags AcmpcaCertificateAuthority#tags}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.usageMode">UsageMode</a></code> | <code>*string</code> | Usage mode of the ceritificate authority. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.keyAlgorithm"></a>

```go
KeyAlgorithm *string
```

- *Type:* *string

Public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#key_algorithm AcmpcaCertificateAuthority#key_algorithm}

---

##### `SigningAlgorithm`<sup>Required</sup> <a name="SigningAlgorithm" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.signingAlgorithm"></a>

```go
SigningAlgorithm *string
```

- *Type:* *string

Algorithm your CA uses to sign certificate requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#signing_algorithm AcmpcaCertificateAuthority#signing_algorithm}

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.subject"></a>

```go
Subject AcmpcaCertificateAuthoritySubject
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject">AcmpcaCertificateAuthoritySubject</a>

Structure that contains X.500 distinguished name information for your CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#subject AcmpcaCertificateAuthority#subject}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the certificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#type AcmpcaCertificateAuthority#type}

---

##### `CsrExtensions`<sup>Optional</sup> <a name="CsrExtensions" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.csrExtensions"></a>

```go
CsrExtensions AcmpcaCertificateAuthorityCsrExtensions
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions">AcmpcaCertificateAuthorityCsrExtensions</a>

Structure that contains CSR pass through extension information used by the CreateCertificateAuthority action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#csr_extensions AcmpcaCertificateAuthority#csr_extensions}

---

##### `KeyStorageSecurityStandard`<sup>Optional</sup> <a name="KeyStorageSecurityStandard" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.keyStorageSecurityStandard"></a>

```go
KeyStorageSecurityStandard *string
```

- *Type:* *string

KeyStorageSecurityStadard defines a cryptographic key management compliance standard used for handling CA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#key_storage_security_standard AcmpcaCertificateAuthority#key_storage_security_standard}

---

##### `RevocationConfiguration`<sup>Optional</sup> <a name="RevocationConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.revocationConfiguration"></a>

```go
RevocationConfiguration AcmpcaCertificateAuthorityRevocationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration">AcmpcaCertificateAuthorityRevocationConfiguration</a>

Certificate revocation information used by the CreateCertificateAuthority and UpdateCertificateAuthority actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#revocation_configuration AcmpcaCertificateAuthority#revocation_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#tags AcmpcaCertificateAuthority#tags}.

---

##### `UsageMode`<sup>Optional</sup> <a name="UsageMode" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityConfig.property.usageMode"></a>

```go
UsageMode *string
```

- *Type:* *string

Usage mode of the ceritificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#usage_mode AcmpcaCertificateAuthority#usage_mode}

---

### AcmpcaCertificateAuthorityCsrExtensions <a name="AcmpcaCertificateAuthorityCsrExtensions" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

&acmpcacertificateauthority.AcmpcaCertificateAuthorityCsrExtensions {
	KeyUsage: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage,
	SubjectInformationAccess: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions.property.keyUsage">KeyUsage</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage">AcmpcaCertificateAuthorityCsrExtensionsKeyUsage</a></code> | Structure that contains X.509 KeyUsage information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions.property.subjectInformationAccess">SubjectInformationAccess</a></code> | <code>interface{}</code> | Array of X.509 AccessDescription. |

---

##### `KeyUsage`<sup>Optional</sup> <a name="KeyUsage" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions.property.keyUsage"></a>

```go
KeyUsage AcmpcaCertificateAuthorityCsrExtensionsKeyUsage
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage">AcmpcaCertificateAuthorityCsrExtensionsKeyUsage</a>

Structure that contains X.509 KeyUsage information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#key_usage AcmpcaCertificateAuthority#key_usage}

---

##### `SubjectInformationAccess`<sup>Optional</sup> <a name="SubjectInformationAccess" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensions.property.subjectInformationAccess"></a>

```go
SubjectInformationAccess interface{}
```

- *Type:* interface{}

Array of X.509 AccessDescription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#subject_information_access AcmpcaCertificateAuthority#subject_information_access}

---

### AcmpcaCertificateAuthorityCsrExtensionsKeyUsage <a name="AcmpcaCertificateAuthorityCsrExtensionsKeyUsage" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

&acmpcacertificateauthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage {
	CrlSign: interface{},
	DataEncipherment: interface{},
	DecipherOnly: interface{},
	DigitalSignature: interface{},
	EncipherOnly: interface{},
	KeyAgreement: interface{},
	KeyCertSign: interface{},
	KeyEncipherment: interface{},
	NonRepudiation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.crlSign">CrlSign</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#crl_sign AcmpcaCertificateAuthority#crl_sign}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.dataEncipherment">DataEncipherment</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#data_encipherment AcmpcaCertificateAuthority#data_encipherment}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.decipherOnly">DecipherOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#decipher_only AcmpcaCertificateAuthority#decipher_only}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.digitalSignature">DigitalSignature</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#digital_signature AcmpcaCertificateAuthority#digital_signature}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.encipherOnly">EncipherOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#encipher_only AcmpcaCertificateAuthority#encipher_only}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.keyAgreement">KeyAgreement</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#key_agreement AcmpcaCertificateAuthority#key_agreement}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.keyCertSign">KeyCertSign</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#key_cert_sign AcmpcaCertificateAuthority#key_cert_sign}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.keyEncipherment">KeyEncipherment</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#key_encipherment AcmpcaCertificateAuthority#key_encipherment}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.nonRepudiation">NonRepudiation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#non_repudiation AcmpcaCertificateAuthority#non_repudiation}. |

---

##### `CrlSign`<sup>Optional</sup> <a name="CrlSign" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.crlSign"></a>

```go
CrlSign interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#crl_sign AcmpcaCertificateAuthority#crl_sign}.

---

##### `DataEncipherment`<sup>Optional</sup> <a name="DataEncipherment" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.dataEncipherment"></a>

```go
DataEncipherment interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#data_encipherment AcmpcaCertificateAuthority#data_encipherment}.

---

##### `DecipherOnly`<sup>Optional</sup> <a name="DecipherOnly" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.decipherOnly"></a>

```go
DecipherOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#decipher_only AcmpcaCertificateAuthority#decipher_only}.

---

##### `DigitalSignature`<sup>Optional</sup> <a name="DigitalSignature" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.digitalSignature"></a>

```go
DigitalSignature interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#digital_signature AcmpcaCertificateAuthority#digital_signature}.

---

##### `EncipherOnly`<sup>Optional</sup> <a name="EncipherOnly" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.encipherOnly"></a>

```go
EncipherOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#encipher_only AcmpcaCertificateAuthority#encipher_only}.

---

##### `KeyAgreement`<sup>Optional</sup> <a name="KeyAgreement" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.keyAgreement"></a>

```go
KeyAgreement interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#key_agreement AcmpcaCertificateAuthority#key_agreement}.

---

##### `KeyCertSign`<sup>Optional</sup> <a name="KeyCertSign" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.keyCertSign"></a>

```go
KeyCertSign interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#key_cert_sign AcmpcaCertificateAuthority#key_cert_sign}.

---

##### `KeyEncipherment`<sup>Optional</sup> <a name="KeyEncipherment" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.keyEncipherment"></a>

```go
KeyEncipherment interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#key_encipherment AcmpcaCertificateAuthority#key_encipherment}.

---

##### `NonRepudiation`<sup>Optional</sup> <a name="NonRepudiation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage.property.nonRepudiation"></a>

```go
NonRepudiation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#non_repudiation AcmpcaCertificateAuthority#non_repudiation}.

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

&acmpcacertificateauthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess {
	AccessLocation: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation,
	AccessMethod: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess.property.accessLocation">AccessLocation</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation</a></code> | Structure that contains X.509 GeneralName information. Assign one and ONLY one field. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess.property.accessMethod">AccessMethod</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod</a></code> | Structure that contains X.509 AccessMethod information. Assign one and ONLY one field. |

---

##### `AccessLocation`<sup>Optional</sup> <a name="AccessLocation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess.property.accessLocation"></a>

```go
AccessLocation AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation</a>

Structure that contains X.509 GeneralName information. Assign one and ONLY one field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#access_location AcmpcaCertificateAuthority#access_location}

---

##### `AccessMethod`<sup>Optional</sup> <a name="AccessMethod" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccess.property.accessMethod"></a>

```go
AccessMethod AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod</a>

Structure that contains X.509 AccessMethod information. Assign one and ONLY one field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#access_method AcmpcaCertificateAuthority#access_method}

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

&acmpcacertificateauthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation {
	DirectoryName: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName,
	DnsName: *string,
	EdiPartyName: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName,
	IpAddress: *string,
	OtherName: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName,
	RegisteredId: *string,
	Rfc822Name: *string,
	UniformResourceIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.directoryName">DirectoryName</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName</a></code> | Structure that contains X.500 distinguished name information for your CA. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.dnsName">DnsName</a></code> | <code>*string</code> | String that contains X.509 DnsName information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.ediPartyName">EdiPartyName</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName</a></code> | Structure that contains X.509 EdiPartyName information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.ipAddress">IpAddress</a></code> | <code>*string</code> | String that contains X.509 IpAddress information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.otherName">OtherName</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName</a></code> | Structure that contains X.509 OtherName information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.registeredId">RegisteredId</a></code> | <code>*string</code> | String that contains X.509 ObjectIdentifier information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.rfc822Name">Rfc822Name</a></code> | <code>*string</code> | String that contains X.509 Rfc822Name information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.uniformResourceIdentifier">UniformResourceIdentifier</a></code> | <code>*string</code> | String that contains X.509 UniformResourceIdentifier information. |

---

##### `DirectoryName`<sup>Optional</sup> <a name="DirectoryName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.directoryName"></a>

```go
DirectoryName AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName</a>

Structure that contains X.500 distinguished name information for your CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#directory_name AcmpcaCertificateAuthority#directory_name}

---

##### `DnsName`<sup>Optional</sup> <a name="DnsName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.dnsName"></a>

```go
DnsName *string
```

- *Type:* *string

String that contains X.509 DnsName information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#dns_name AcmpcaCertificateAuthority#dns_name}

---

##### `EdiPartyName`<sup>Optional</sup> <a name="EdiPartyName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.ediPartyName"></a>

```go
EdiPartyName AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName</a>

Structure that contains X.509 EdiPartyName information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#edi_party_name AcmpcaCertificateAuthority#edi_party_name}

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

String that contains X.509 IpAddress information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#ip_address AcmpcaCertificateAuthority#ip_address}

---

##### `OtherName`<sup>Optional</sup> <a name="OtherName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.otherName"></a>

```go
OtherName AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName</a>

Structure that contains X.509 OtherName information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#other_name AcmpcaCertificateAuthority#other_name}

---

##### `RegisteredId`<sup>Optional</sup> <a name="RegisteredId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.registeredId"></a>

```go
RegisteredId *string
```

- *Type:* *string

String that contains X.509 ObjectIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#registered_id AcmpcaCertificateAuthority#registered_id}

---

##### `Rfc822Name`<sup>Optional</sup> <a name="Rfc822Name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.rfc822Name"></a>

```go
Rfc822Name *string
```

- *Type:* *string

String that contains X.509 Rfc822Name information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#rfc_822_name AcmpcaCertificateAuthority#rfc_822_name}

---

##### `UniformResourceIdentifier`<sup>Optional</sup> <a name="UniformResourceIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation.property.uniformResourceIdentifier"></a>

```go
UniformResourceIdentifier *string
```

- *Type:* *string

String that contains X.509 UniformResourceIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#uniform_resource_identifier AcmpcaCertificateAuthority#uniform_resource_identifier}

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

&acmpcacertificateauthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName {
	CommonName: *string,
	Country: *string,
	CustomAttributes: interface{},
	DistinguishedNameQualifier: *string,
	GenerationQualifier: *string,
	GivenName: *string,
	Initials: *string,
	Locality: *string,
	Organization: *string,
	OrganizationalUnit: *string,
	Pseudonym: *string,
	SerialNumber: *string,
	State: *string,
	Surname: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.commonName">CommonName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.country">Country</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.customAttributes">CustomAttributes</a></code> | <code>interface{}</code> | Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.distinguishedNameQualifier">DistinguishedNameQualifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.generationQualifier">GenerationQualifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.givenName">GivenName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.initials">Initials</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.locality">Locality</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.organization">Organization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.organizationalUnit">OrganizationalUnit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.pseudonym">Pseudonym</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#serial_number AcmpcaCertificateAuthority#serial_number}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.surname">Surname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}. |

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.commonName"></a>

```go
CommonName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}.

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.country"></a>

```go
Country *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}.

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.customAttributes"></a>

```go
CustomAttributes interface{}
```

- *Type:* interface{}

Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#custom_attributes AcmpcaCertificateAuthority#custom_attributes}

---

##### `DistinguishedNameQualifier`<sup>Optional</sup> <a name="DistinguishedNameQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.distinguishedNameQualifier"></a>

```go
DistinguishedNameQualifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}.

---

##### `GenerationQualifier`<sup>Optional</sup> <a name="GenerationQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.generationQualifier"></a>

```go
GenerationQualifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}.

---

##### `GivenName`<sup>Optional</sup> <a name="GivenName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.givenName"></a>

```go
GivenName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}.

---

##### `Initials`<sup>Optional</sup> <a name="Initials" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.initials"></a>

```go
Initials *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}.

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.locality"></a>

```go
Locality *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}.

---

##### `OrganizationalUnit`<sup>Optional</sup> <a name="OrganizationalUnit" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.organizationalUnit"></a>

```go
OrganizationalUnit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}.

---

##### `Pseudonym`<sup>Optional</sup> <a name="Pseudonym" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.pseudonym"></a>

```go
Pseudonym *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}.

---

##### `SerialNumber`<sup>Optional</sup> <a name="SerialNumber" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.serialNumber"></a>

```go
SerialNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#serial_number AcmpcaCertificateAuthority#serial_number}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}.

---

##### `Surname`<sup>Optional</sup> <a name="Surname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.surname"></a>

```go
Surname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}.

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}.

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

&acmpcacertificateauthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes {
	ObjectIdentifier: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes.property.objectIdentifier">ObjectIdentifier</a></code> | <code>*string</code> | String that contains X.509 ObjectIdentifier information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}. |

---

##### `ObjectIdentifier`<sup>Optional</sup> <a name="ObjectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes.property.objectIdentifier"></a>

```go
ObjectIdentifier *string
```

- *Type:* *string

String that contains X.509 ObjectIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#object_identifier AcmpcaCertificateAuthority#object_identifier}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributes.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}.

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

&acmpcacertificateauthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName {
	NameAssigner: *string,
	PartyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName.property.nameAssigner">NameAssigner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#name_assigner AcmpcaCertificateAuthority#name_assigner}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName.property.partyName">PartyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#party_name AcmpcaCertificateAuthority#party_name}. |

---

##### `NameAssigner`<sup>Optional</sup> <a name="NameAssigner" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName.property.nameAssigner"></a>

```go
NameAssigner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#name_assigner AcmpcaCertificateAuthority#name_assigner}.

---

##### `PartyName`<sup>Optional</sup> <a name="PartyName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName.property.partyName"></a>

```go
PartyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#party_name AcmpcaCertificateAuthority#party_name}.

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

&acmpcacertificateauthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName {
	TypeId: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName.property.typeId">TypeId</a></code> | <code>*string</code> | String that contains X.509 ObjectIdentifier information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}. |

---

##### `TypeId`<sup>Optional</sup> <a name="TypeId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName.property.typeId"></a>

```go
TypeId *string
```

- *Type:* *string

String that contains X.509 ObjectIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#type_id AcmpcaCertificateAuthority#type_id}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}.

---

### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

&acmpcacertificateauthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod {
	AccessMethodType: *string,
	CustomObjectIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod.property.accessMethodType">AccessMethodType</a></code> | <code>*string</code> | Pre-defined enum string for X.509 AccessMethod ObjectIdentifiers. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod.property.customObjectIdentifier">CustomObjectIdentifier</a></code> | <code>*string</code> | String that contains X.509 ObjectIdentifier information. |

---

##### `AccessMethodType`<sup>Optional</sup> <a name="AccessMethodType" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod.property.accessMethodType"></a>

```go
AccessMethodType *string
```

- *Type:* *string

Pre-defined enum string for X.509 AccessMethod ObjectIdentifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#access_method_type AcmpcaCertificateAuthority#access_method_type}

---

##### `CustomObjectIdentifier`<sup>Optional</sup> <a name="CustomObjectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod.property.customObjectIdentifier"></a>

```go
CustomObjectIdentifier *string
```

- *Type:* *string

String that contains X.509 ObjectIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#custom_object_identifier AcmpcaCertificateAuthority#custom_object_identifier}

---

### AcmpcaCertificateAuthorityRevocationConfiguration <a name="AcmpcaCertificateAuthorityRevocationConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

&acmpcacertificateauthority.AcmpcaCertificateAuthorityRevocationConfiguration {
	CrlConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration,
	OcspConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.property.crlConfiguration">CrlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a></code> | Your certificate authority can create and maintain a certificate revocation list (CRL). |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.property.ocspConfiguration">OcspConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a></code> | Helps to configure online certificate status protocol (OCSP) responder for your certificate authority. |

---

##### `CrlConfiguration`<sup>Optional</sup> <a name="CrlConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.property.crlConfiguration"></a>

```go
CrlConfiguration AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

Your certificate authority can create and maintain a certificate revocation list (CRL).

A CRL contains information about certificates that have been revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#crl_configuration AcmpcaCertificateAuthority#crl_configuration}

---

##### `OcspConfiguration`<sup>Optional</sup> <a name="OcspConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfiguration.property.ocspConfiguration"></a>

```go
OcspConfiguration AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

Helps to configure online certificate status protocol (OCSP) responder for your certificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#ocsp_configuration AcmpcaCertificateAuthority#ocsp_configuration}

---

### AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration <a name="AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

&acmpcacertificateauthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration {
	CrlDistributionPointExtensionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration,
	CrlType: *string,
	CustomCname: *string,
	CustomPath: *string,
	Enabled: interface{},
	ExpirationInDays: *f64,
	S3BucketName: *string,
	S3ObjectAcl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.crlDistributionPointExtensionConfiguration">CrlDistributionPointExtensionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration</a></code> | Configures the default behavior of the CRL Distribution Point extension for certificates issued by your certificate authority. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.crlType">CrlType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#crl_type AcmpcaCertificateAuthority#crl_type}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.customCname">CustomCname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#custom_cname AcmpcaCertificateAuthority#custom_cname}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.customPath">CustomPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#custom_path AcmpcaCertificateAuthority#custom_path}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.expirationInDays">ExpirationInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#expiration_in_days AcmpcaCertificateAuthority#expiration_in_days}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#s3_bucket_name AcmpcaCertificateAuthority#s3_bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3ObjectAcl">S3ObjectAcl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#s3_object_acl AcmpcaCertificateAuthority#s3_object_acl}. |

---

##### `CrlDistributionPointExtensionConfiguration`<sup>Optional</sup> <a name="CrlDistributionPointExtensionConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.crlDistributionPointExtensionConfiguration"></a>

```go
CrlDistributionPointExtensionConfiguration AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration</a>

Configures the default behavior of the CRL Distribution Point extension for certificates issued by your certificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#crl_distribution_point_extension_configuration AcmpcaCertificateAuthority#crl_distribution_point_extension_configuration}

---

##### `CrlType`<sup>Optional</sup> <a name="CrlType" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.crlType"></a>

```go
CrlType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#crl_type AcmpcaCertificateAuthority#crl_type}.

---

##### `CustomCname`<sup>Optional</sup> <a name="CustomCname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.customCname"></a>

```go
CustomCname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#custom_cname AcmpcaCertificateAuthority#custom_cname}.

---

##### `CustomPath`<sup>Optional</sup> <a name="CustomPath" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.customPath"></a>

```go
CustomPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#custom_path AcmpcaCertificateAuthority#custom_path}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}.

---

##### `ExpirationInDays`<sup>Optional</sup> <a name="ExpirationInDays" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.expirationInDays"></a>

```go
ExpirationInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#expiration_in_days AcmpcaCertificateAuthority#expiration_in_days}.

---

##### `S3BucketName`<sup>Optional</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3BucketName"></a>

```go
S3BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#s3_bucket_name AcmpcaCertificateAuthority#s3_bucket_name}.

---

##### `S3ObjectAcl`<sup>Optional</sup> <a name="S3ObjectAcl" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration.property.s3ObjectAcl"></a>

```go
S3ObjectAcl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#s3_object_acl AcmpcaCertificateAuthority#s3_object_acl}.

---

### AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration <a name="AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

&acmpcacertificateauthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration {
	OmitExtension: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration.property.omitExtension">OmitExtension</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#omit_extension AcmpcaCertificateAuthority#omit_extension}. |

---

##### `OmitExtension`<sup>Optional</sup> <a name="OmitExtension" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration.property.omitExtension"></a>

```go
OmitExtension interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#omit_extension AcmpcaCertificateAuthority#omit_extension}.

---

### AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration <a name="AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

&acmpcacertificateauthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration {
	Enabled: interface{},
	OcspCustomCname: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.property.ocspCustomCname">OcspCustomCname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#ocsp_custom_cname AcmpcaCertificateAuthority#ocsp_custom_cname}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#enabled AcmpcaCertificateAuthority#enabled}.

---

##### `OcspCustomCname`<sup>Optional</sup> <a name="OcspCustomCname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration.property.ocspCustomCname"></a>

```go
OcspCustomCname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#ocsp_custom_cname AcmpcaCertificateAuthority#ocsp_custom_cname}.

---

### AcmpcaCertificateAuthoritySubject <a name="AcmpcaCertificateAuthoritySubject" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

&acmpcacertificateauthority.AcmpcaCertificateAuthoritySubject {
	CommonName: *string,
	Country: *string,
	CustomAttributes: interface{},
	DistinguishedNameQualifier: *string,
	GenerationQualifier: *string,
	GivenName: *string,
	Initials: *string,
	Locality: *string,
	Organization: *string,
	OrganizationalUnit: *string,
	Pseudonym: *string,
	SerialNumber: *string,
	State: *string,
	Surname: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.commonName">CommonName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.country">Country</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.customAttributes">CustomAttributes</a></code> | <code>interface{}</code> | Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.distinguishedNameQualifier">DistinguishedNameQualifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.generationQualifier">GenerationQualifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.givenName">GivenName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.initials">Initials</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.locality">Locality</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.organization">Organization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.organizationalUnit">OrganizationalUnit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.pseudonym">Pseudonym</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#serial_number AcmpcaCertificateAuthority#serial_number}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.surname">Surname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}. |

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.commonName"></a>

```go
CommonName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#common_name AcmpcaCertificateAuthority#common_name}.

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.country"></a>

```go
Country *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#country AcmpcaCertificateAuthority#country}.

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.customAttributes"></a>

```go
CustomAttributes interface{}
```

- *Type:* interface{}

Array of X.500 attribute type and value. CustomAttributes cannot be used along with pre-defined attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#custom_attributes AcmpcaCertificateAuthority#custom_attributes}

---

##### `DistinguishedNameQualifier`<sup>Optional</sup> <a name="DistinguishedNameQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.distinguishedNameQualifier"></a>

```go
DistinguishedNameQualifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}.

---

##### `GenerationQualifier`<sup>Optional</sup> <a name="GenerationQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.generationQualifier"></a>

```go
GenerationQualifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}.

---

##### `GivenName`<sup>Optional</sup> <a name="GivenName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.givenName"></a>

```go
GivenName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#given_name AcmpcaCertificateAuthority#given_name}.

---

##### `Initials`<sup>Optional</sup> <a name="Initials" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.initials"></a>

```go
Initials *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#initials AcmpcaCertificateAuthority#initials}.

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.locality"></a>

```go
Locality *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#locality AcmpcaCertificateAuthority#locality}.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#organization AcmpcaCertificateAuthority#organization}.

---

##### `OrganizationalUnit`<sup>Optional</sup> <a name="OrganizationalUnit" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.organizationalUnit"></a>

```go
OrganizationalUnit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#organizational_unit AcmpcaCertificateAuthority#organizational_unit}.

---

##### `Pseudonym`<sup>Optional</sup> <a name="Pseudonym" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.pseudonym"></a>

```go
Pseudonym *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#pseudonym AcmpcaCertificateAuthority#pseudonym}.

---

##### `SerialNumber`<sup>Optional</sup> <a name="SerialNumber" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.serialNumber"></a>

```go
SerialNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#serial_number AcmpcaCertificateAuthority#serial_number}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#state AcmpcaCertificateAuthority#state}.

---

##### `Surname`<sup>Optional</sup> <a name="Surname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.surname"></a>

```go
Surname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#surname AcmpcaCertificateAuthority#surname}.

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubject.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#title AcmpcaCertificateAuthority#title}.

---

### AcmpcaCertificateAuthoritySubjectCustomAttributes <a name="AcmpcaCertificateAuthoritySubjectCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

&acmpcacertificateauthority.AcmpcaCertificateAuthoritySubjectCustomAttributes {
	ObjectIdentifier: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes.property.objectIdentifier">ObjectIdentifier</a></code> | <code>*string</code> | String that contains X.509 ObjectIdentifier information. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}. |

---

##### `ObjectIdentifier`<sup>Optional</sup> <a name="ObjectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes.property.objectIdentifier"></a>

```go
ObjectIdentifier *string
```

- *Type:* *string

String that contains X.509 ObjectIdentifier information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#object_identifier AcmpcaCertificateAuthority#object_identifier}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributes.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}.

---

### AcmpcaCertificateAuthorityTags <a name="AcmpcaCertificateAuthorityTags" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

&acmpcacertificateauthority.AcmpcaCertificateAuthorityTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#key AcmpcaCertificateAuthority#key}. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#key AcmpcaCertificateAuthority#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/acmpca_certificate_authority#value AcmpcaCertificateAuthority#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetCrlSign">ResetCrlSign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetDataEncipherment">ResetDataEncipherment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetDecipherOnly">ResetDecipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetDigitalSignature">ResetDigitalSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetEncipherOnly">ResetEncipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetKeyAgreement">ResetKeyAgreement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetKeyCertSign">ResetKeyCertSign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetKeyEncipherment">ResetKeyEncipherment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetNonRepudiation">ResetNonRepudiation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCrlSign` <a name="ResetCrlSign" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetCrlSign"></a>

```go
func ResetCrlSign()
```

##### `ResetDataEncipherment` <a name="ResetDataEncipherment" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetDataEncipherment"></a>

```go
func ResetDataEncipherment()
```

##### `ResetDecipherOnly` <a name="ResetDecipherOnly" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetDecipherOnly"></a>

```go
func ResetDecipherOnly()
```

##### `ResetDigitalSignature` <a name="ResetDigitalSignature" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetDigitalSignature"></a>

```go
func ResetDigitalSignature()
```

##### `ResetEncipherOnly` <a name="ResetEncipherOnly" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetEncipherOnly"></a>

```go
func ResetEncipherOnly()
```

##### `ResetKeyAgreement` <a name="ResetKeyAgreement" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetKeyAgreement"></a>

```go
func ResetKeyAgreement()
```

##### `ResetKeyCertSign` <a name="ResetKeyCertSign" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetKeyCertSign"></a>

```go
func ResetKeyCertSign()
```

##### `ResetKeyEncipherment` <a name="ResetKeyEncipherment" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetKeyEncipherment"></a>

```go
func ResetKeyEncipherment()
```

##### `ResetNonRepudiation` <a name="ResetNonRepudiation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.resetNonRepudiation"></a>

```go
func ResetNonRepudiation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.crlSignInput">CrlSignInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.dataEnciphermentInput">DataEnciphermentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.decipherOnlyInput">DecipherOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.digitalSignatureInput">DigitalSignatureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.encipherOnlyInput">EncipherOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyAgreementInput">KeyAgreementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyCertSignInput">KeyCertSignInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyEnciphermentInput">KeyEnciphermentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.nonRepudiationInput">NonRepudiationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.crlSign">CrlSign</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.dataEncipherment">DataEncipherment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.decipherOnly">DecipherOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.digitalSignature">DigitalSignature</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.encipherOnly">EncipherOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyAgreement">KeyAgreement</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyCertSign">KeyCertSign</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyEncipherment">KeyEncipherment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.nonRepudiation">NonRepudiation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrlSignInput`<sup>Optional</sup> <a name="CrlSignInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.crlSignInput"></a>

```go
func CrlSignInput() interface{}
```

- *Type:* interface{}

---

##### `DataEnciphermentInput`<sup>Optional</sup> <a name="DataEnciphermentInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.dataEnciphermentInput"></a>

```go
func DataEnciphermentInput() interface{}
```

- *Type:* interface{}

---

##### `DecipherOnlyInput`<sup>Optional</sup> <a name="DecipherOnlyInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.decipherOnlyInput"></a>

```go
func DecipherOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `DigitalSignatureInput`<sup>Optional</sup> <a name="DigitalSignatureInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.digitalSignatureInput"></a>

```go
func DigitalSignatureInput() interface{}
```

- *Type:* interface{}

---

##### `EncipherOnlyInput`<sup>Optional</sup> <a name="EncipherOnlyInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.encipherOnlyInput"></a>

```go
func EncipherOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `KeyAgreementInput`<sup>Optional</sup> <a name="KeyAgreementInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyAgreementInput"></a>

```go
func KeyAgreementInput() interface{}
```

- *Type:* interface{}

---

##### `KeyCertSignInput`<sup>Optional</sup> <a name="KeyCertSignInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyCertSignInput"></a>

```go
func KeyCertSignInput() interface{}
```

- *Type:* interface{}

---

##### `KeyEnciphermentInput`<sup>Optional</sup> <a name="KeyEnciphermentInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyEnciphermentInput"></a>

```go
func KeyEnciphermentInput() interface{}
```

- *Type:* interface{}

---

##### `NonRepudiationInput`<sup>Optional</sup> <a name="NonRepudiationInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.nonRepudiationInput"></a>

```go
func NonRepudiationInput() interface{}
```

- *Type:* interface{}

---

##### `CrlSign`<sup>Required</sup> <a name="CrlSign" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.crlSign"></a>

```go
func CrlSign() interface{}
```

- *Type:* interface{}

---

##### `DataEncipherment`<sup>Required</sup> <a name="DataEncipherment" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.dataEncipherment"></a>

```go
func DataEncipherment() interface{}
```

- *Type:* interface{}

---

##### `DecipherOnly`<sup>Required</sup> <a name="DecipherOnly" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.decipherOnly"></a>

```go
func DecipherOnly() interface{}
```

- *Type:* interface{}

---

##### `DigitalSignature`<sup>Required</sup> <a name="DigitalSignature" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.digitalSignature"></a>

```go
func DigitalSignature() interface{}
```

- *Type:* interface{}

---

##### `EncipherOnly`<sup>Required</sup> <a name="EncipherOnly" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.encipherOnly"></a>

```go
func EncipherOnly() interface{}
```

- *Type:* interface{}

---

##### `KeyAgreement`<sup>Required</sup> <a name="KeyAgreement" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyAgreement"></a>

```go
func KeyAgreement() interface{}
```

- *Type:* interface{}

---

##### `KeyCertSign`<sup>Required</sup> <a name="KeyCertSign" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyCertSign"></a>

```go
func KeyCertSign() interface{}
```

- *Type:* interface{}

---

##### `KeyEncipherment`<sup>Required</sup> <a name="KeyEncipherment" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.keyEncipherment"></a>

```go
func KeyEncipherment() interface{}
```

- *Type:* interface{}

---

##### `NonRepudiation`<sup>Required</sup> <a name="NonRepudiation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.nonRepudiation"></a>

```go
func NonRepudiation() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AcmpcaCertificateAuthorityCsrExtensionsOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthorityCsrExtensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AcmpcaCertificateAuthorityCsrExtensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putKeyUsage">PutKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putSubjectInformationAccess">PutSubjectInformationAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resetKeyUsage">ResetKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resetSubjectInformationAccess">ResetSubjectInformationAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKeyUsage` <a name="PutKeyUsage" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putKeyUsage"></a>

```go
func PutKeyUsage(value AcmpcaCertificateAuthorityCsrExtensionsKeyUsage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsage">AcmpcaCertificateAuthorityCsrExtensionsKeyUsage</a>

---

##### `PutSubjectInformationAccess` <a name="PutSubjectInformationAccess" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putSubjectInformationAccess"></a>

```go
func PutSubjectInformationAccess(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.putSubjectInformationAccess.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetKeyUsage` <a name="ResetKeyUsage" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resetKeyUsage"></a>

```go
func ResetKeyUsage()
```

##### `ResetSubjectInformationAccess` <a name="ResetSubjectInformationAccess" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.resetSubjectInformationAccess"></a>

```go
func ResetSubjectInformationAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.keyUsage">KeyUsage</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference">AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.subjectInformationAccess">SubjectInformationAccess</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.keyUsageInput">KeyUsageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.subjectInformationAccessInput">SubjectInformationAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.keyUsage"></a>

```go
func KeyUsage() AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference">AcmpcaCertificateAuthorityCsrExtensionsKeyUsageOutputReference</a>

---

##### `SubjectInformationAccess`<sup>Required</sup> <a name="SubjectInformationAccess" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.subjectInformationAccess"></a>

```go
func SubjectInformationAccess() AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList</a>

---

##### `KeyUsageInput`<sup>Optional</sup> <a name="KeyUsageInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.keyUsageInput"></a>

```go
func KeyUsageInput() interface{}
```

- *Type:* interface{}

---

##### `SubjectInformationAccessInput`<sup>Optional</sup> <a name="SubjectInformationAccessInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.subjectInformationAccessInput"></a>

```go
func SubjectInformationAccessInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.get"></a>

```go
func Get(index *f64) AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resetObjectIdentifier">ResetObjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetObjectIdentifier` <a name="ResetObjectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resetObjectIdentifier"></a>

```go
func ResetObjectIdentifier()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.objectIdentifierInput">ObjectIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.objectIdentifier">ObjectIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectIdentifierInput`<sup>Optional</sup> <a name="ObjectIdentifierInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.objectIdentifierInput"></a>

```go
func ObjectIdentifierInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ObjectIdentifier`<sup>Required</sup> <a name="ObjectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.objectIdentifier"></a>

```go
func ObjectIdentifier() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.putCustomAttributes">PutCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetDistinguishedNameQualifier">ResetDistinguishedNameQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetGenerationQualifier">ResetGenerationQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetGivenName">ResetGivenName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetInitials">ResetInitials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetLocality">ResetLocality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetOrganizationalUnit">ResetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetPseudonym">ResetPseudonym</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetSerialNumber">ResetSerialNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetSurname">ResetSurname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomAttributes` <a name="PutCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.putCustomAttributes"></a>

```go
func PutCustomAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.putCustomAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetCommonName"></a>

```go
func ResetCommonName()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetCountry"></a>

```go
func ResetCountry()
```

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetCustomAttributes"></a>

```go
func ResetCustomAttributes()
```

##### `ResetDistinguishedNameQualifier` <a name="ResetDistinguishedNameQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetDistinguishedNameQualifier"></a>

```go
func ResetDistinguishedNameQualifier()
```

##### `ResetGenerationQualifier` <a name="ResetGenerationQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetGenerationQualifier"></a>

```go
func ResetGenerationQualifier()
```

##### `ResetGivenName` <a name="ResetGivenName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetGivenName"></a>

```go
func ResetGivenName()
```

##### `ResetInitials` <a name="ResetInitials" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetInitials"></a>

```go
func ResetInitials()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetLocality"></a>

```go
func ResetLocality()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetOrganizationalUnit` <a name="ResetOrganizationalUnit" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetOrganizationalUnit"></a>

```go
func ResetOrganizationalUnit()
```

##### `ResetPseudonym` <a name="ResetPseudonym" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetPseudonym"></a>

```go
func ResetPseudonym()
```

##### `ResetSerialNumber` <a name="ResetSerialNumber" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetSerialNumber"></a>

```go
func ResetSerialNumber()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetState"></a>

```go
func ResetState()
```

##### `ResetSurname` <a name="ResetSurname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetSurname"></a>

```go
func ResetSurname()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.customAttributes">CustomAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.countryInput">CountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.customAttributesInput">CustomAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.distinguishedNameQualifierInput">DistinguishedNameQualifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.generationQualifierInput">GenerationQualifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.givenNameInput">GivenNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.initialsInput">InitialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.localityInput">LocalityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organizationalUnitInput">OrganizationalUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.pseudonymInput">PseudonymInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.serialNumberInput">SerialNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.surnameInput">SurnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.commonName">CommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.distinguishedNameQualifier">DistinguishedNameQualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.generationQualifier">GenerationQualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.givenName">GivenName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.initials">Initials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.locality">Locality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organizationalUnit">OrganizationalUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.pseudonym">Pseudonym</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.surname">Surname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.customAttributes"></a>

```go
func CustomAttributes() AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameCustomAttributesList</a>

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.commonNameInput"></a>

```go
func CommonNameInput() *string
```

- *Type:* *string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.countryInput"></a>

```go
func CountryInput() *string
```

- *Type:* *string

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.customAttributesInput"></a>

```go
func CustomAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `DistinguishedNameQualifierInput`<sup>Optional</sup> <a name="DistinguishedNameQualifierInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.distinguishedNameQualifierInput"></a>

```go
func DistinguishedNameQualifierInput() *string
```

- *Type:* *string

---

##### `GenerationQualifierInput`<sup>Optional</sup> <a name="GenerationQualifierInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.generationQualifierInput"></a>

```go
func GenerationQualifierInput() *string
```

- *Type:* *string

---

##### `GivenNameInput`<sup>Optional</sup> <a name="GivenNameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.givenNameInput"></a>

```go
func GivenNameInput() *string
```

- *Type:* *string

---

##### `InitialsInput`<sup>Optional</sup> <a name="InitialsInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.initialsInput"></a>

```go
func InitialsInput() *string
```

- *Type:* *string

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.localityInput"></a>

```go
func LocalityInput() *string
```

- *Type:* *string

---

##### `OrganizationalUnitInput`<sup>Optional</sup> <a name="OrganizationalUnitInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organizationalUnitInput"></a>

```go
func OrganizationalUnitInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `PseudonymInput`<sup>Optional</sup> <a name="PseudonymInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.pseudonymInput"></a>

```go
func PseudonymInput() *string
```

- *Type:* *string

---

##### `SerialNumberInput`<sup>Optional</sup> <a name="SerialNumberInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.serialNumberInput"></a>

```go
func SerialNumberInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `SurnameInput`<sup>Optional</sup> <a name="SurnameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.surnameInput"></a>

```go
func SurnameInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.commonName"></a>

```go
func CommonName() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `DistinguishedNameQualifier`<sup>Required</sup> <a name="DistinguishedNameQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.distinguishedNameQualifier"></a>

```go
func DistinguishedNameQualifier() *string
```

- *Type:* *string

---

##### `GenerationQualifier`<sup>Required</sup> <a name="GenerationQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.generationQualifier"></a>

```go
func GenerationQualifier() *string
```

- *Type:* *string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.givenName"></a>

```go
func GivenName() *string
```

- *Type:* *string

---

##### `Initials`<sup>Required</sup> <a name="Initials" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.initials"></a>

```go
func Initials() *string
```

- *Type:* *string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.locality"></a>

```go
func Locality() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `OrganizationalUnit`<sup>Required</sup> <a name="OrganizationalUnit" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.organizationalUnit"></a>

```go
func OrganizationalUnit() *string
```

- *Type:* *string

---

##### `Pseudonym`<sup>Required</sup> <a name="Pseudonym" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.pseudonym"></a>

```go
func Pseudonym() *string
```

- *Type:* *string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Surname`<sup>Required</sup> <a name="Surname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.surname"></a>

```go
func Surname() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resetNameAssigner">ResetNameAssigner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resetPartyName">ResetPartyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNameAssigner` <a name="ResetNameAssigner" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resetNameAssigner"></a>

```go
func ResetNameAssigner()
```

##### `ResetPartyName` <a name="ResetPartyName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.resetPartyName"></a>

```go
func ResetPartyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.nameAssignerInput">NameAssignerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.partyNameInput">PartyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.nameAssigner">NameAssigner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.partyName">PartyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameAssignerInput`<sup>Optional</sup> <a name="NameAssignerInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.nameAssignerInput"></a>

```go
func NameAssignerInput() *string
```

- *Type:* *string

---

##### `PartyNameInput`<sup>Optional</sup> <a name="PartyNameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.partyNameInput"></a>

```go
func PartyNameInput() *string
```

- *Type:* *string

---

##### `NameAssigner`<sup>Required</sup> <a name="NameAssigner" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.nameAssigner"></a>

```go
func NameAssigner() *string
```

- *Type:* *string

---

##### `PartyName`<sup>Required</sup> <a name="PartyName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.partyName"></a>

```go
func PartyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resetTypeId">ResetTypeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTypeId` <a name="ResetTypeId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resetTypeId"></a>

```go
func ResetTypeId()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.typeIdInput">TypeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.typeId">TypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeIdInput`<sup>Optional</sup> <a name="TypeIdInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.typeIdInput"></a>

```go
func TypeIdInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `TypeId`<sup>Required</sup> <a name="TypeId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.typeId"></a>

```go
func TypeId() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName">PutDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putEdiPartyName">PutEdiPartyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putOtherName">PutOtherName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetDirectoryName">ResetDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetDnsName">ResetDnsName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetEdiPartyName">ResetEdiPartyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetOtherName">ResetOtherName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetRegisteredId">ResetRegisteredId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetRfc822Name">ResetRfc822Name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetUniformResourceIdentifier">ResetUniformResourceIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirectoryName` <a name="PutDirectoryName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName"></a>

```go
func PutDirectoryName(value AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putDirectoryName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryName</a>

---

##### `PutEdiPartyName` <a name="PutEdiPartyName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putEdiPartyName"></a>

```go
func PutEdiPartyName(value AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putEdiPartyName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyName</a>

---

##### `PutOtherName` <a name="PutOtherName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putOtherName"></a>

```go
func PutOtherName(value AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.putOtherName.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherName</a>

---

##### `ResetDirectoryName` <a name="ResetDirectoryName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetDirectoryName"></a>

```go
func ResetDirectoryName()
```

##### `ResetDnsName` <a name="ResetDnsName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetDnsName"></a>

```go
func ResetDnsName()
```

##### `ResetEdiPartyName` <a name="ResetEdiPartyName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetEdiPartyName"></a>

```go
func ResetEdiPartyName()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetOtherName` <a name="ResetOtherName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetOtherName"></a>

```go
func ResetOtherName()
```

##### `ResetRegisteredId` <a name="ResetRegisteredId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetRegisteredId"></a>

```go
func ResetRegisteredId()
```

##### `ResetRfc822Name` <a name="ResetRfc822Name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetRfc822Name"></a>

```go
func ResetRfc822Name()
```

##### `ResetUniformResourceIdentifier` <a name="ResetUniformResourceIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.resetUniformResourceIdentifier"></a>

```go
func ResetUniformResourceIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.directoryName">DirectoryName</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ediPartyName">EdiPartyName</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.otherName">OtherName</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.directoryNameInput">DirectoryNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.dnsNameInput">DnsNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ediPartyNameInput">EdiPartyNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.otherNameInput">OtherNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.registeredIdInput">RegisteredIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.rfc822NameInput">Rfc822NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.uniformResourceIdentifierInput">UniformResourceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.registeredId">RegisteredId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.rfc822Name">Rfc822Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.uniformResourceIdentifier">UniformResourceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectoryName`<sup>Required</sup> <a name="DirectoryName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.directoryName"></a>

```go
func DirectoryName() AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationDirectoryNameOutputReference</a>

---

##### `EdiPartyName`<sup>Required</sup> <a name="EdiPartyName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ediPartyName"></a>

```go
func EdiPartyName() AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationEdiPartyNameOutputReference</a>

---

##### `OtherName`<sup>Required</sup> <a name="OtherName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.otherName"></a>

```go
func OtherName() AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOtherNameOutputReference</a>

---

##### `DirectoryNameInput`<sup>Optional</sup> <a name="DirectoryNameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.directoryNameInput"></a>

```go
func DirectoryNameInput() interface{}
```

- *Type:* interface{}

---

##### `DnsNameInput`<sup>Optional</sup> <a name="DnsNameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.dnsNameInput"></a>

```go
func DnsNameInput() *string
```

- *Type:* *string

---

##### `EdiPartyNameInput`<sup>Optional</sup> <a name="EdiPartyNameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ediPartyNameInput"></a>

```go
func EdiPartyNameInput() interface{}
```

- *Type:* interface{}

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `OtherNameInput`<sup>Optional</sup> <a name="OtherNameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.otherNameInput"></a>

```go
func OtherNameInput() interface{}
```

- *Type:* interface{}

---

##### `RegisteredIdInput`<sup>Optional</sup> <a name="RegisteredIdInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.registeredIdInput"></a>

```go
func RegisteredIdInput() *string
```

- *Type:* *string

---

##### `Rfc822NameInput`<sup>Optional</sup> <a name="Rfc822NameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.rfc822NameInput"></a>

```go
func Rfc822NameInput() *string
```

- *Type:* *string

---

##### `UniformResourceIdentifierInput`<sup>Optional</sup> <a name="UniformResourceIdentifierInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.uniformResourceIdentifierInput"></a>

```go
func UniformResourceIdentifierInput() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `RegisteredId`<sup>Required</sup> <a name="RegisteredId" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.registeredId"></a>

```go
func RegisteredId() *string
```

- *Type:* *string

---

##### `Rfc822Name`<sup>Required</sup> <a name="Rfc822Name" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.rfc822Name"></a>

```go
func Rfc822Name() *string
```

- *Type:* *string

---

##### `UniformResourceIdentifier`<sup>Required</sup> <a name="UniformResourceIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.uniformResourceIdentifier"></a>

```go
func UniformResourceIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resetAccessMethodType">ResetAccessMethodType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resetCustomObjectIdentifier">ResetCustomObjectIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessMethodType` <a name="ResetAccessMethodType" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resetAccessMethodType"></a>

```go
func ResetAccessMethodType()
```

##### `ResetCustomObjectIdentifier` <a name="ResetCustomObjectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.resetCustomObjectIdentifier"></a>

```go
func ResetCustomObjectIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.accessMethodTypeInput">AccessMethodTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.customObjectIdentifierInput">CustomObjectIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.accessMethodType">AccessMethodType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.customObjectIdentifier">CustomObjectIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessMethodTypeInput`<sup>Optional</sup> <a name="AccessMethodTypeInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.accessMethodTypeInput"></a>

```go
func AccessMethodTypeInput() *string
```

- *Type:* *string

---

##### `CustomObjectIdentifierInput`<sup>Optional</sup> <a name="CustomObjectIdentifierInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.customObjectIdentifierInput"></a>

```go
func CustomObjectIdentifierInput() *string
```

- *Type:* *string

---

##### `AccessMethodType`<sup>Required</sup> <a name="AccessMethodType" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.accessMethodType"></a>

```go
func AccessMethodType() *string
```

- *Type:* *string

---

##### `CustomObjectIdentifier`<sup>Required</sup> <a name="CustomObjectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.customObjectIdentifier"></a>

```go
func CustomObjectIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.get"></a>

```go
func Get(index *f64) AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference <a name="AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessLocation">PutAccessLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessMethod">PutAccessMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resetAccessLocation">ResetAccessLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resetAccessMethod">ResetAccessMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessLocation` <a name="PutAccessLocation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessLocation"></a>

```go
func PutAccessLocation(value AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocation</a>

---

##### `PutAccessMethod` <a name="PutAccessMethod" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessMethod"></a>

```go
func PutAccessMethod(value AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.putAccessMethod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethod</a>

---

##### `ResetAccessLocation` <a name="ResetAccessLocation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resetAccessLocation"></a>

```go
func ResetAccessLocation()
```

##### `ResetAccessMethod` <a name="ResetAccessMethod" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.resetAccessMethod"></a>

```go
func ResetAccessMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessLocation">AccessLocation</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessMethod">AccessMethod</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessLocationInput">AccessLocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessMethodInput">AccessMethodInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLocation`<sup>Required</sup> <a name="AccessLocation" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessLocation"></a>

```go
func AccessLocation() AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessLocationOutputReference</a>

---

##### `AccessMethod`<sup>Required</sup> <a name="AccessMethod" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessMethod"></a>

```go
func AccessMethod() AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference">AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessAccessMethodOutputReference</a>

---

##### `AccessLocationInput`<sup>Optional</sup> <a name="AccessLocationInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessLocationInput"></a>

```go
func AccessLocationInput() interface{}
```

- *Type:* interface{}

---

##### `AccessMethodInput`<sup>Optional</sup> <a name="AccessMethodInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.accessMethodInput"></a>

```go
func AccessMethodInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityCsrExtensionsSubjectInformationAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference <a name="AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.resetOmitExtension">ResetOmitExtension</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOmitExtension` <a name="ResetOmitExtension" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.resetOmitExtension"></a>

```go
func ResetOmitExtension()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.omitExtensionInput">OmitExtensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.omitExtension">OmitExtension</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OmitExtensionInput`<sup>Optional</sup> <a name="OmitExtensionInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.omitExtensionInput"></a>

```go
func OmitExtensionInput() interface{}
```

- *Type:* interface{}

---

##### `OmitExtension`<sup>Required</sup> <a name="OmitExtension" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.omitExtension"></a>

```go
func OmitExtension() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference <a name="AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.putCrlDistributionPointExtensionConfiguration">PutCrlDistributionPointExtensionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCrlDistributionPointExtensionConfiguration">ResetCrlDistributionPointExtensionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCrlType">ResetCrlType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCustomCname">ResetCustomCname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCustomPath">ResetCustomPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetExpirationInDays">ResetExpirationInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetS3BucketName">ResetS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetS3ObjectAcl">ResetS3ObjectAcl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCrlDistributionPointExtensionConfiguration` <a name="PutCrlDistributionPointExtensionConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.putCrlDistributionPointExtensionConfiguration"></a>

```go
func PutCrlDistributionPointExtensionConfiguration(value AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.putCrlDistributionPointExtensionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfiguration</a>

---

##### `ResetCrlDistributionPointExtensionConfiguration` <a name="ResetCrlDistributionPointExtensionConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCrlDistributionPointExtensionConfiguration"></a>

```go
func ResetCrlDistributionPointExtensionConfiguration()
```

##### `ResetCrlType` <a name="ResetCrlType" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCrlType"></a>

```go
func ResetCrlType()
```

##### `ResetCustomCname` <a name="ResetCustomCname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCustomCname"></a>

```go
func ResetCustomCname()
```

##### `ResetCustomPath` <a name="ResetCustomPath" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetCustomPath"></a>

```go
func ResetCustomPath()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetExpirationInDays` <a name="ResetExpirationInDays" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetExpirationInDays"></a>

```go
func ResetExpirationInDays()
```

##### `ResetS3BucketName` <a name="ResetS3BucketName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetS3BucketName"></a>

```go
func ResetS3BucketName()
```

##### `ResetS3ObjectAcl` <a name="ResetS3ObjectAcl" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.resetS3ObjectAcl"></a>

```go
func ResetS3ObjectAcl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlDistributionPointExtensionConfiguration">CrlDistributionPointExtensionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlDistributionPointExtensionConfigurationInput">CrlDistributionPointExtensionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlTypeInput">CrlTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCnameInput">CustomCnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customPathInput">CustomPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDaysInput">ExpirationInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAclInput">S3ObjectAclInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlType">CrlType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCname">CustomCname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customPath">CustomPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDays">ExpirationInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAcl">S3ObjectAcl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrlDistributionPointExtensionConfiguration`<sup>Required</sup> <a name="CrlDistributionPointExtensionConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlDistributionPointExtensionConfiguration"></a>

```go
func CrlDistributionPointExtensionConfiguration() AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationCrlDistributionPointExtensionConfigurationOutputReference</a>

---

##### `CrlDistributionPointExtensionConfigurationInput`<sup>Optional</sup> <a name="CrlDistributionPointExtensionConfigurationInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlDistributionPointExtensionConfigurationInput"></a>

```go
func CrlDistributionPointExtensionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `CrlTypeInput`<sup>Optional</sup> <a name="CrlTypeInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlTypeInput"></a>

```go
func CrlTypeInput() *string
```

- *Type:* *string

---

##### `CustomCnameInput`<sup>Optional</sup> <a name="CustomCnameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCnameInput"></a>

```go
func CustomCnameInput() *string
```

- *Type:* *string

---

##### `CustomPathInput`<sup>Optional</sup> <a name="CustomPathInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customPathInput"></a>

```go
func CustomPathInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExpirationInDaysInput`<sup>Optional</sup> <a name="ExpirationInDaysInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDaysInput"></a>

```go
func ExpirationInDaysInput() *f64
```

- *Type:* *f64

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketNameInput"></a>

```go
func S3BucketNameInput() *string
```

- *Type:* *string

---

##### `S3ObjectAclInput`<sup>Optional</sup> <a name="S3ObjectAclInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAclInput"></a>

```go
func S3ObjectAclInput() *string
```

- *Type:* *string

---

##### `CrlType`<sup>Required</sup> <a name="CrlType" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.crlType"></a>

```go
func CrlType() *string
```

- *Type:* *string

---

##### `CustomCname`<sup>Required</sup> <a name="CustomCname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customCname"></a>

```go
func CustomCname() *string
```

- *Type:* *string

---

##### `CustomPath`<sup>Required</sup> <a name="CustomPath" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.customPath"></a>

```go
func CustomPath() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `ExpirationInDays`<sup>Required</sup> <a name="ExpirationInDays" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.expirationInDays"></a>

```go
func ExpirationInDays() *f64
```

- *Type:* *f64

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3BucketName"></a>

```go
func S3BucketName() *string
```

- *Type:* *string

---

##### `S3ObjectAcl`<sup>Required</sup> <a name="S3ObjectAcl" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.s3ObjectAcl"></a>

```go
func S3ObjectAcl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference <a name="AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resetOcspCustomCname">ResetOcspCustomCname</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetOcspCustomCname` <a name="ResetOcspCustomCname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.resetOcspCustomCname"></a>

```go
func ResetOcspCustomCname()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCnameInput">OcspCustomCnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCname">OcspCustomCname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OcspCustomCnameInput`<sup>Optional</sup> <a name="OcspCustomCnameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCnameInput"></a>

```go
func OcspCustomCnameInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `OcspCustomCname`<sup>Required</sup> <a name="OcspCustomCname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.ocspCustomCname"></a>

```go
func OcspCustomCname() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AcmpcaCertificateAuthorityRevocationConfigurationOutputReference <a name="AcmpcaCertificateAuthorityRevocationConfigurationOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthorityRevocationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AcmpcaCertificateAuthorityRevocationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration">PutCrlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putOcspConfiguration">PutOcspConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resetCrlConfiguration">ResetCrlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resetOcspConfiguration">ResetOcspConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCrlConfiguration` <a name="PutCrlConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration"></a>

```go
func PutCrlConfiguration(value AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putCrlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration</a>

---

##### `PutOcspConfiguration` <a name="PutOcspConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putOcspConfiguration"></a>

```go
func PutOcspConfiguration(value AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.putOcspConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration</a>

---

##### `ResetCrlConfiguration` <a name="ResetCrlConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resetCrlConfiguration"></a>

```go
func ResetCrlConfiguration()
```

##### `ResetOcspConfiguration` <a name="ResetOcspConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.resetOcspConfiguration"></a>

```go
func ResetOcspConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfiguration">CrlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfiguration">OcspConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfigurationInput">CrlConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfigurationInput">OcspConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrlConfiguration`<sup>Required</sup> <a name="CrlConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfiguration"></a>

```go
func CrlConfiguration() AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference</a>

---

##### `OcspConfiguration`<sup>Required</sup> <a name="OcspConfiguration" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfiguration"></a>

```go
func OcspConfiguration() AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference">AcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference</a>

---

##### `CrlConfigurationInput`<sup>Optional</sup> <a name="CrlConfigurationInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.crlConfigurationInput"></a>

```go
func CrlConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `OcspConfigurationInput`<sup>Optional</sup> <a name="OcspConfigurationInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.ocspConfigurationInput"></a>

```go
func OcspConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityRevocationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AcmpcaCertificateAuthoritySubjectCustomAttributesList <a name="AcmpcaCertificateAuthoritySubjectCustomAttributesList" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthoritySubjectCustomAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AcmpcaCertificateAuthoritySubjectCustomAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.get"></a>

```go
func Get(index *f64) AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference <a name="AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resetObjectIdentifier">ResetObjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetObjectIdentifier` <a name="ResetObjectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resetObjectIdentifier"></a>

```go
func ResetObjectIdentifier()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.objectIdentifierInput">ObjectIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.objectIdentifier">ObjectIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectIdentifierInput`<sup>Optional</sup> <a name="ObjectIdentifierInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.objectIdentifierInput"></a>

```go
func ObjectIdentifierInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ObjectIdentifier`<sup>Required</sup> <a name="ObjectIdentifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.objectIdentifier"></a>

```go
func ObjectIdentifier() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AcmpcaCertificateAuthoritySubjectOutputReference <a name="AcmpcaCertificateAuthoritySubjectOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthoritySubjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AcmpcaCertificateAuthoritySubjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.putCustomAttributes">PutCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetDistinguishedNameQualifier">ResetDistinguishedNameQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetGenerationQualifier">ResetGenerationQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetGivenName">ResetGivenName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetInitials">ResetInitials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetLocality">ResetLocality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetOrganizationalUnit">ResetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetPseudonym">ResetPseudonym</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetSerialNumber">ResetSerialNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetSurname">ResetSurname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomAttributes` <a name="PutCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.putCustomAttributes"></a>

```go
func PutCustomAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.putCustomAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetCommonName"></a>

```go
func ResetCommonName()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetCountry"></a>

```go
func ResetCountry()
```

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetCustomAttributes"></a>

```go
func ResetCustomAttributes()
```

##### `ResetDistinguishedNameQualifier` <a name="ResetDistinguishedNameQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetDistinguishedNameQualifier"></a>

```go
func ResetDistinguishedNameQualifier()
```

##### `ResetGenerationQualifier` <a name="ResetGenerationQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetGenerationQualifier"></a>

```go
func ResetGenerationQualifier()
```

##### `ResetGivenName` <a name="ResetGivenName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetGivenName"></a>

```go
func ResetGivenName()
```

##### `ResetInitials` <a name="ResetInitials" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetInitials"></a>

```go
func ResetInitials()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetLocality"></a>

```go
func ResetLocality()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetOrganizationalUnit` <a name="ResetOrganizationalUnit" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetOrganizationalUnit"></a>

```go
func ResetOrganizationalUnit()
```

##### `ResetPseudonym` <a name="ResetPseudonym" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetPseudonym"></a>

```go
func ResetPseudonym()
```

##### `ResetSerialNumber` <a name="ResetSerialNumber" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetSerialNumber"></a>

```go
func ResetSerialNumber()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetState"></a>

```go
func ResetState()
```

##### `ResetSurname` <a name="ResetSurname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetSurname"></a>

```go
func ResetSurname()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.customAttributes">CustomAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList">AcmpcaCertificateAuthoritySubjectCustomAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.countryInput">CountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.customAttributesInput">CustomAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifierInput">DistinguishedNameQualifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.generationQualifierInput">GenerationQualifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.givenNameInput">GivenNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.initialsInput">InitialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.localityInput">LocalityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organizationalUnitInput">OrganizationalUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.pseudonymInput">PseudonymInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.serialNumberInput">SerialNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.surnameInput">SurnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.commonName">CommonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifier">DistinguishedNameQualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.generationQualifier">GenerationQualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.givenName">GivenName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.initials">Initials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.locality">Locality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organizationalUnit">OrganizationalUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.pseudonym">Pseudonym</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.surname">Surname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.customAttributes"></a>

```go
func CustomAttributes() AcmpcaCertificateAuthoritySubjectCustomAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectCustomAttributesList">AcmpcaCertificateAuthoritySubjectCustomAttributesList</a>

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.commonNameInput"></a>

```go
func CommonNameInput() *string
```

- *Type:* *string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.countryInput"></a>

```go
func CountryInput() *string
```

- *Type:* *string

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.customAttributesInput"></a>

```go
func CustomAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `DistinguishedNameQualifierInput`<sup>Optional</sup> <a name="DistinguishedNameQualifierInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifierInput"></a>

```go
func DistinguishedNameQualifierInput() *string
```

- *Type:* *string

---

##### `GenerationQualifierInput`<sup>Optional</sup> <a name="GenerationQualifierInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.generationQualifierInput"></a>

```go
func GenerationQualifierInput() *string
```

- *Type:* *string

---

##### `GivenNameInput`<sup>Optional</sup> <a name="GivenNameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.givenNameInput"></a>

```go
func GivenNameInput() *string
```

- *Type:* *string

---

##### `InitialsInput`<sup>Optional</sup> <a name="InitialsInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.initialsInput"></a>

```go
func InitialsInput() *string
```

- *Type:* *string

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.localityInput"></a>

```go
func LocalityInput() *string
```

- *Type:* *string

---

##### `OrganizationalUnitInput`<sup>Optional</sup> <a name="OrganizationalUnitInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organizationalUnitInput"></a>

```go
func OrganizationalUnitInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `PseudonymInput`<sup>Optional</sup> <a name="PseudonymInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.pseudonymInput"></a>

```go
func PseudonymInput() *string
```

- *Type:* *string

---

##### `SerialNumberInput`<sup>Optional</sup> <a name="SerialNumberInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.serialNumberInput"></a>

```go
func SerialNumberInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `SurnameInput`<sup>Optional</sup> <a name="SurnameInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.surnameInput"></a>

```go
func SurnameInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.commonName"></a>

```go
func CommonName() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `DistinguishedNameQualifier`<sup>Required</sup> <a name="DistinguishedNameQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.distinguishedNameQualifier"></a>

```go
func DistinguishedNameQualifier() *string
```

- *Type:* *string

---

##### `GenerationQualifier`<sup>Required</sup> <a name="GenerationQualifier" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.generationQualifier"></a>

```go
func GenerationQualifier() *string
```

- *Type:* *string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.givenName"></a>

```go
func GivenName() *string
```

- *Type:* *string

---

##### `Initials`<sup>Required</sup> <a name="Initials" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.initials"></a>

```go
func Initials() *string
```

- *Type:* *string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.locality"></a>

```go
func Locality() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `OrganizationalUnit`<sup>Required</sup> <a name="OrganizationalUnit" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.organizationalUnit"></a>

```go
func OrganizationalUnit() *string
```

- *Type:* *string

---

##### `Pseudonym`<sup>Required</sup> <a name="Pseudonym" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.pseudonym"></a>

```go
func Pseudonym() *string
```

- *Type:* *string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Surname`<sup>Required</sup> <a name="Surname" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.surname"></a>

```go
func Surname() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthoritySubjectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AcmpcaCertificateAuthorityTagsList <a name="AcmpcaCertificateAuthorityTagsList" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthorityTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AcmpcaCertificateAuthorityTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.get"></a>

```go
func Get(index *f64) AcmpcaCertificateAuthorityTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AcmpcaCertificateAuthorityTagsOutputReference <a name="AcmpcaCertificateAuthorityTagsOutputReference" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/acmpcacertificateauthority"

acmpcacertificateauthority.NewAcmpcaCertificateAuthorityTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AcmpcaCertificateAuthorityTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.acmpcaCertificateAuthority.AcmpcaCertificateAuthorityTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




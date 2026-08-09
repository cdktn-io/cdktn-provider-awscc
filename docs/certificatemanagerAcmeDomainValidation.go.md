# `certificatemanagerAcmeDomainValidation` Submodule <a name="`certificatemanagerAcmeDomainValidation` Submodule" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatemanagerAcmeDomainValidation <a name="CertificatemanagerAcmeDomainValidation" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_domain_validation awscc_certificatemanager_acme_domain_validation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmedomainvalidation"

certificatemanageracmedomainvalidation.NewCertificatemanagerAcmeDomainValidation(scope Construct, id *string, config CertificatemanagerAcmeDomainValidationConfig) CertificatemanagerAcmeDomainValidation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig">CertificatemanagerAcmeDomainValidationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig">CertificatemanagerAcmeDomainValidationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.putPrevalidationOptions">PutPrevalidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPrevalidationOptions` <a name="PutPrevalidationOptions" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.putPrevalidationOptions"></a>

```go
func PutPrevalidationOptions(value CertificatemanagerAcmeDomainValidationPrevalidationOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.putPrevalidationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions">CertificatemanagerAcmeDomainValidationPrevalidationOptions</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CertificatemanagerAcmeDomainValidation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmedomainvalidation"

certificatemanageracmedomainvalidation.CertificatemanagerAcmeDomainValidation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmedomainvalidation"

certificatemanageracmedomainvalidation.CertificatemanagerAcmeDomainValidation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmedomainvalidation"

certificatemanageracmedomainvalidation.CertificatemanagerAcmeDomainValidation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmedomainvalidation"

certificatemanageracmedomainvalidation.CertificatemanagerAcmeDomainValidation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CertificatemanagerAcmeDomainValidation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CertificatemanagerAcmeDomainValidation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CertificatemanagerAcmeDomainValidation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_domain_validation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CertificatemanagerAcmeDomainValidation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.prevalidationOptions">PrevalidationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference">CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList">CertificatemanagerAcmeDomainValidationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.acmeEndpointArnInput">AcmeEndpointArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.prevalidationOptionsInput">PrevalidationOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.acmeEndpointArn">AcmeEndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrevalidationOptions`<sup>Required</sup> <a name="PrevalidationOptions" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.prevalidationOptions"></a>

```go
func PrevalidationOptions() CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference">CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.tags"></a>

```go
func Tags() CertificatemanagerAcmeDomainValidationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList">CertificatemanagerAcmeDomainValidationTagsList</a>

---

##### `AcmeEndpointArnInput`<sup>Optional</sup> <a name="AcmeEndpointArnInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.acmeEndpointArnInput"></a>

```go
func AcmeEndpointArnInput() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `PrevalidationOptionsInput`<sup>Optional</sup> <a name="PrevalidationOptionsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.prevalidationOptionsInput"></a>

```go
func PrevalidationOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AcmeEndpointArn`<sup>Required</sup> <a name="AcmeEndpointArn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.acmeEndpointArn"></a>

```go
func AcmeEndpointArn() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatemanagerAcmeDomainValidationConfig <a name="CertificatemanagerAcmeDomainValidationConfig" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmedomainvalidation"

&certificatemanageracmedomainvalidation.CertificatemanagerAcmeDomainValidationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AcmeEndpointArn: *string,
	DomainName: *string,
	PrevalidationOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.acmeEndpointArn">AcmeEndpointArn</a></code> | <code>*string</code> | The ARN of the ACME endpoint this domain validation is associated with. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.domainName">DomainName</a></code> | <code>*string</code> | The domain name to validate. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.prevalidationOptions">PrevalidationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions">CertificatemanagerAcmeDomainValidationPrevalidationOptions</a></code> | Prevalidation method configuration. Currently only DNS-based prevalidation is supported. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags associated with the domain validation. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AcmeEndpointArn`<sup>Required</sup> <a name="AcmeEndpointArn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.acmeEndpointArn"></a>

```go
AcmeEndpointArn *string
```

- *Type:* *string

The ARN of the ACME endpoint this domain validation is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_domain_validation#acme_endpoint_arn CertificatemanagerAcmeDomainValidation#acme_endpoint_arn}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

The domain name to validate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_domain_validation#domain_name CertificatemanagerAcmeDomainValidation#domain_name}

---

##### `PrevalidationOptions`<sup>Required</sup> <a name="PrevalidationOptions" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.prevalidationOptions"></a>

```go
PrevalidationOptions CertificatemanagerAcmeDomainValidationPrevalidationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions">CertificatemanagerAcmeDomainValidationPrevalidationOptions</a>

Prevalidation method configuration. Currently only DNS-based prevalidation is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_domain_validation#prevalidation_options CertificatemanagerAcmeDomainValidation#prevalidation_options}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags associated with the domain validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_domain_validation#tags CertificatemanagerAcmeDomainValidation#tags}

---

### CertificatemanagerAcmeDomainValidationPrevalidationOptions <a name="CertificatemanagerAcmeDomainValidationPrevalidationOptions" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmedomainvalidation"

&certificatemanageracmedomainvalidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions {
	DnsPrevalidation: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions.property.dnsPrevalidation">DnsPrevalidation</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a></code> | DNS-based prevalidation options for the domain validation. |

---

##### `DnsPrevalidation`<sup>Required</sup> <a name="DnsPrevalidation" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptions.property.dnsPrevalidation"></a>

```go
DnsPrevalidation CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a>

DNS-based prevalidation options for the domain validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_domain_validation#dns_prevalidation CertificatemanagerAcmeDomainValidation#dns_prevalidation}

---

### CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation <a name="CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmedomainvalidation"

&certificatemanageracmedomainvalidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation {
	DomainScope: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope,
	HostedZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation.property.domainScope">DomainScope</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a></code> | Controls which certificate types are authorized to be issued for the domain via the ACME endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | The Route 53 hosted zone ID for automatic DNS record management. |

---

##### `DomainScope`<sup>Optional</sup> <a name="DomainScope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation.property.domainScope"></a>

```go
DomainScope CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a>

Controls which certificate types are authorized to be issued for the domain via the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_domain_validation#domain_scope CertificatemanagerAcmeDomainValidation#domain_scope}

---

##### `HostedZoneId`<sup>Optional</sup> <a name="HostedZoneId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation.property.hostedZoneId"></a>

```go
HostedZoneId *string
```

- *Type:* *string

The Route 53 hosted zone ID for automatic DNS record management.

When provided, the service creates the validation DNS record on the customer's behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_domain_validation#hosted_zone_id CertificatemanagerAcmeDomainValidation#hosted_zone_id}

---

### CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope <a name="CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmedomainvalidation"

&certificatemanageracmedomainvalidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope {
	ExactDomain: *string,
	Subdomains: *string,
	Wildcards: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.property.exactDomain">ExactDomain</a></code> | <code>*string</code> | Whether certificates may be issued for the exact domain. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.property.subdomains">Subdomains</a></code> | <code>*string</code> | Whether certificates may be issued for subdomains of the domain. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.property.wildcards">Wildcards</a></code> | <code>*string</code> | Whether wildcard certificates may be issued for the domain. |

---

##### `ExactDomain`<sup>Optional</sup> <a name="ExactDomain" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.property.exactDomain"></a>

```go
ExactDomain *string
```

- *Type:* *string

Whether certificates may be issued for the exact domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_domain_validation#exact_domain CertificatemanagerAcmeDomainValidation#exact_domain}

---

##### `Subdomains`<sup>Optional</sup> <a name="Subdomains" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.property.subdomains"></a>

```go
Subdomains *string
```

- *Type:* *string

Whether certificates may be issued for subdomains of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_domain_validation#subdomains CertificatemanagerAcmeDomainValidation#subdomains}

---

##### `Wildcards`<sup>Optional</sup> <a name="Wildcards" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope.property.wildcards"></a>

```go
Wildcards *string
```

- *Type:* *string

Whether wildcard certificates may be issued for the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_domain_validation#wildcards CertificatemanagerAcmeDomainValidation#wildcards}

---

### CertificatemanagerAcmeDomainValidationTags <a name="CertificatemanagerAcmeDomainValidationTags" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmedomainvalidation"

&certificatemanageracmedomainvalidation.CertificatemanagerAcmeDomainValidationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_domain_validation#key CertificatemanagerAcmeDomainValidation#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/certificatemanager_acme_domain_validation#value CertificatemanagerAcmeDomainValidation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference <a name="CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmedomainvalidation"

certificatemanageracmedomainvalidation.NewCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resetExactDomain">ResetExactDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resetSubdomains">ResetSubdomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resetWildcards">ResetWildcards</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExactDomain` <a name="ResetExactDomain" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resetExactDomain"></a>

```go
func ResetExactDomain()
```

##### `ResetSubdomains` <a name="ResetSubdomains" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resetSubdomains"></a>

```go
func ResetSubdomains()
```

##### `ResetWildcards` <a name="ResetWildcards" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.resetWildcards"></a>

```go
func ResetWildcards()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.exactDomainInput">ExactDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.subdomainsInput">SubdomainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.wildcardsInput">WildcardsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.exactDomain">ExactDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.subdomains">Subdomains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.wildcards">Wildcards</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExactDomainInput`<sup>Optional</sup> <a name="ExactDomainInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.exactDomainInput"></a>

```go
func ExactDomainInput() *string
```

- *Type:* *string

---

##### `SubdomainsInput`<sup>Optional</sup> <a name="SubdomainsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.subdomainsInput"></a>

```go
func SubdomainsInput() *string
```

- *Type:* *string

---

##### `WildcardsInput`<sup>Optional</sup> <a name="WildcardsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.wildcardsInput"></a>

```go
func WildcardsInput() *string
```

- *Type:* *string

---

##### `ExactDomain`<sup>Required</sup> <a name="ExactDomain" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.exactDomain"></a>

```go
func ExactDomain() *string
```

- *Type:* *string

---

##### `Subdomains`<sup>Required</sup> <a name="Subdomains" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.subdomains"></a>

```go
func Subdomains() *string
```

- *Type:* *string

---

##### `Wildcards`<sup>Required</sup> <a name="Wildcards" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.wildcards"></a>

```go
func Wildcards() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference <a name="CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmedomainvalidation"

certificatemanageracmedomainvalidation.NewCertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.putDomainScope">PutDomainScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resetDomainScope">ResetDomainScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resetHostedZoneId">ResetHostedZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDomainScope` <a name="PutDomainScope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.putDomainScope"></a>

```go
func PutDomainScope(value CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.putDomainScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScope</a>

---

##### `ResetDomainScope` <a name="ResetDomainScope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resetDomainScope"></a>

```go
func ResetDomainScope()
```

##### `ResetHostedZoneId` <a name="ResetHostedZoneId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.resetHostedZoneId"></a>

```go
func ResetHostedZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.domainScope">DomainScope</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.domainScopeInput">DomainScopeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.hostedZoneIdInput">HostedZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainScope`<sup>Required</sup> <a name="DomainScope" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.domainScope"></a>

```go
func DomainScope() CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationDomainScopeOutputReference</a>

---

##### `DomainScopeInput`<sup>Optional</sup> <a name="DomainScopeInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.domainScopeInput"></a>

```go
func DomainScopeInput() interface{}
```

- *Type:* interface{}

---

##### `HostedZoneIdInput`<sup>Optional</sup> <a name="HostedZoneIdInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.hostedZoneIdInput"></a>

```go
func HostedZoneIdInput() *string
```

- *Type:* *string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference <a name="CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmedomainvalidation"

certificatemanageracmedomainvalidation.NewCertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.putDnsPrevalidation">PutDnsPrevalidation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsPrevalidation` <a name="PutDnsPrevalidation" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.putDnsPrevalidation"></a>

```go
func PutDnsPrevalidation(value CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.putDnsPrevalidation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidation</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.dnsPrevalidation">DnsPrevalidation</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.dnsPrevalidationInput">DnsPrevalidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsPrevalidation`<sup>Required</sup> <a name="DnsPrevalidation" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.dnsPrevalidation"></a>

```go
func DnsPrevalidation() CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference">CertificatemanagerAcmeDomainValidationPrevalidationOptionsDnsPrevalidationOutputReference</a>

---

##### `DnsPrevalidationInput`<sup>Optional</sup> <a name="DnsPrevalidationInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.dnsPrevalidationInput"></a>

```go
func DnsPrevalidationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationPrevalidationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CertificatemanagerAcmeDomainValidationTagsList <a name="CertificatemanagerAcmeDomainValidationTagsList" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmedomainvalidation"

certificatemanageracmedomainvalidation.NewCertificatemanagerAcmeDomainValidationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CertificatemanagerAcmeDomainValidationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.get"></a>

```go
func Get(index *f64) CertificatemanagerAcmeDomainValidationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CertificatemanagerAcmeDomainValidationTagsOutputReference <a name="CertificatemanagerAcmeDomainValidationTagsOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmedomainvalidation"

certificatemanageracmedomainvalidation.NewCertificatemanagerAcmeDomainValidationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CertificatemanagerAcmeDomainValidationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeDomainValidation.CertificatemanagerAcmeDomainValidationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




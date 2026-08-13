# `certificatemanagerAcmeExternalAccountBinding` Submodule <a name="`certificatemanagerAcmeExternalAccountBinding` Submodule" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatemanagerAcmeExternalAccountBinding <a name="CertificatemanagerAcmeExternalAccountBinding" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/certificatemanager_acme_external_account_binding awscc_certificatemanager_acme_external_account_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeexternalaccountbinding"

certificatemanageracmeexternalaccountbinding.NewCertificatemanagerAcmeExternalAccountBinding(scope Construct, id *string, config CertificatemanagerAcmeExternalAccountBindingConfig) CertificatemanagerAcmeExternalAccountBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig">CertificatemanagerAcmeExternalAccountBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig">CertificatemanagerAcmeExternalAccountBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putExpiration">PutExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExpiration` <a name="PutExpiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putExpiration"></a>

```go
func PutExpiration(value CertificatemanagerAcmeExternalAccountBindingExpiration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putExpiration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetExpiration"></a>

```go
func ResetExpiration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CertificatemanagerAcmeExternalAccountBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeexternalaccountbinding"

certificatemanageracmeexternalaccountbinding.CertificatemanagerAcmeExternalAccountBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeexternalaccountbinding"

certificatemanageracmeexternalaccountbinding.CertificatemanagerAcmeExternalAccountBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeexternalaccountbinding"

certificatemanageracmeexternalaccountbinding.CertificatemanagerAcmeExternalAccountBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeexternalaccountbinding"

certificatemanageracmeexternalaccountbinding.CertificatemanagerAcmeExternalAccountBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CertificatemanagerAcmeExternalAccountBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CertificatemanagerAcmeExternalAccountBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CertificatemanagerAcmeExternalAccountBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/certificatemanager_acme_external_account_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CertificatemanagerAcmeExternalAccountBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeExternalAccountBindingArn">AcmeExternalAccountBindingArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.expiration">Expiration</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference">CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList">CertificatemanagerAcmeExternalAccountBindingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArnInput">AcmeEndpointArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.expirationInput">ExpirationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArn">AcmeEndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AcmeExternalAccountBindingArn`<sup>Required</sup> <a name="AcmeExternalAccountBindingArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeExternalAccountBindingArn"></a>

```go
func AcmeExternalAccountBindingArn() *string
```

- *Type:* *string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.expiration"></a>

```go
func Expiration() CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference">CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tags"></a>

```go
func Tags() CertificatemanagerAcmeExternalAccountBindingTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList">CertificatemanagerAcmeExternalAccountBindingTagsList</a>

---

##### `AcmeEndpointArnInput`<sup>Optional</sup> <a name="AcmeEndpointArnInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArnInput"></a>

```go
func AcmeEndpointArnInput() *string
```

- *Type:* *string

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.expirationInput"></a>

```go
func ExpirationInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AcmeEndpointArn`<sup>Required</sup> <a name="AcmeEndpointArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.acmeEndpointArn"></a>

```go
func AcmeEndpointArn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatemanagerAcmeExternalAccountBindingConfig <a name="CertificatemanagerAcmeExternalAccountBindingConfig" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeexternalaccountbinding"

&certificatemanageracmeexternalaccountbinding.CertificatemanagerAcmeExternalAccountBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AcmeEndpointArn: *string,
	RoleArn: *string,
	Expiration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.acmeEndpointArn">AcmeEndpointArn</a></code> | <code>*string</code> | The ARN of the ACME endpoint this binding is associated with. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The IAM role ARN for cross-account access. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.expiration">Expiration</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a></code> | The expiration configuration for the external account binding. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags associated with the external account binding. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AcmeEndpointArn`<sup>Required</sup> <a name="AcmeEndpointArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.acmeEndpointArn"></a>

```go
AcmeEndpointArn *string
```

- *Type:* *string

The ARN of the ACME endpoint this binding is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/certificatemanager_acme_external_account_binding#acme_endpoint_arn CertificatemanagerAcmeExternalAccountBinding#acme_endpoint_arn}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The IAM role ARN for cross-account access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/certificatemanager_acme_external_account_binding#role_arn CertificatemanagerAcmeExternalAccountBinding#role_arn}

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.expiration"></a>

```go
Expiration CertificatemanagerAcmeExternalAccountBindingExpiration
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration">CertificatemanagerAcmeExternalAccountBindingExpiration</a>

The expiration configuration for the external account binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/certificatemanager_acme_external_account_binding#expiration CertificatemanagerAcmeExternalAccountBinding#expiration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags associated with the external account binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/certificatemanager_acme_external_account_binding#tags CertificatemanagerAcmeExternalAccountBinding#tags}

---

### CertificatemanagerAcmeExternalAccountBindingExpiration <a name="CertificatemanagerAcmeExternalAccountBindingExpiration" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeexternalaccountbinding"

&certificatemanageracmeexternalaccountbinding.CertificatemanagerAcmeExternalAccountBindingExpiration {
	Type: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.property.type">Type</a></code> | <code>*string</code> | The time unit for the expiration value. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.property.value">Value</a></code> | <code>*f64</code> | The expiration value. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.property.type"></a>

```go
Type *string
```

- *Type:* *string

The time unit for the expiration value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/certificatemanager_acme_external_account_binding#type CertificatemanagerAcmeExternalAccountBinding#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpiration.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

The expiration value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/certificatemanager_acme_external_account_binding#value CertificatemanagerAcmeExternalAccountBinding#value}

---

### CertificatemanagerAcmeExternalAccountBindingTags <a name="CertificatemanagerAcmeExternalAccountBindingTags" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeexternalaccountbinding"

&certificatemanageracmeexternalaccountbinding.CertificatemanagerAcmeExternalAccountBindingTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/certificatemanager_acme_external_account_binding#key CertificatemanagerAcmeExternalAccountBinding#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/certificatemanager_acme_external_account_binding#value CertificatemanagerAcmeExternalAccountBinding#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference <a name="CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeexternalaccountbinding"

certificatemanageracmeexternalaccountbinding.NewCertificatemanagerAcmeExternalAccountBindingExpirationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingExpirationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CertificatemanagerAcmeExternalAccountBindingTagsList <a name="CertificatemanagerAcmeExternalAccountBindingTagsList" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeexternalaccountbinding"

certificatemanageracmeexternalaccountbinding.NewCertificatemanagerAcmeExternalAccountBindingTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CertificatemanagerAcmeExternalAccountBindingTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.get"></a>

```go
func Get(index *f64) CertificatemanagerAcmeExternalAccountBindingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CertificatemanagerAcmeExternalAccountBindingTagsOutputReference <a name="CertificatemanagerAcmeExternalAccountBindingTagsOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeexternalaccountbinding"

certificatemanageracmeexternalaccountbinding.NewCertificatemanagerAcmeExternalAccountBindingTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CertificatemanagerAcmeExternalAccountBindingTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeExternalAccountBinding.CertificatemanagerAcmeExternalAccountBindingTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




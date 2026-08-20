# `certificatemanagerAcmeEndpoint` Submodule <a name="`certificatemanagerAcmeEndpoint` Submodule" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatemanagerAcmeEndpoint <a name="CertificatemanagerAcmeEndpoint" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_endpoint awscc_certificatemanager_acme_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeendpoint"

certificatemanageracmeendpoint.NewCertificatemanagerAcmeEndpoint(scope Construct, id *string, config CertificatemanagerAcmeEndpointConfig) CertificatemanagerAcmeEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig">CertificatemanagerAcmeEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig">CertificatemanagerAcmeEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateAuthority">PutCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateTags">PutCertificateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetCertificateTags">ResetCertificateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetContact">ResetContact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCertificateAuthority` <a name="PutCertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateAuthority"></a>

```go
func PutCertificateAuthority(value CertificatemanagerAcmeEndpointCertificateAuthority)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateAuthority.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a>

---

##### `PutCertificateTags` <a name="PutCertificateTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateTags"></a>

```go
func PutCertificateTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putCertificateTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCertificateTags` <a name="ResetCertificateTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetCertificateTags"></a>

```go
func ResetCertificateTags()
```

##### `ResetContact` <a name="ResetContact" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetContact"></a>

```go
func ResetContact()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CertificatemanagerAcmeEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeendpoint"

certificatemanageracmeendpoint.CertificatemanagerAcmeEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeendpoint"

certificatemanageracmeendpoint.CertificatemanagerAcmeEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeendpoint"

certificatemanageracmeendpoint.CertificatemanagerAcmeEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeendpoint"

certificatemanageracmeendpoint.CertificatemanagerAcmeEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CertificatemanagerAcmeEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CertificatemanagerAcmeEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CertificatemanagerAcmeEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CertificatemanagerAcmeEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.acmeEndpointArn">AcmeEndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateAuthority">CertificateAuthority</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference">CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateTags">CertificateTags</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList">CertificatemanagerAcmeEndpointCertificateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.endpointUrl">EndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList">CertificatemanagerAcmeEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.authorizationBehaviorInput">AuthorizationBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateAuthorityInput">CertificateAuthorityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateTagsInput">CertificateTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.contactInput">ContactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.authorizationBehavior">AuthorizationBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.contact">Contact</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AcmeEndpointArn`<sup>Required</sup> <a name="AcmeEndpointArn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.acmeEndpointArn"></a>

```go
func AcmeEndpointArn() *string
```

- *Type:* *string

---

##### `CertificateAuthority`<sup>Required</sup> <a name="CertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateAuthority"></a>

```go
func CertificateAuthority() CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference">CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference</a>

---

##### `CertificateTags`<sup>Required</sup> <a name="CertificateTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateTags"></a>

```go
func CertificateTags() CertificatemanagerAcmeEndpointCertificateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList">CertificatemanagerAcmeEndpointCertificateTagsList</a>

---

##### `EndpointUrl`<sup>Required</sup> <a name="EndpointUrl" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.endpointUrl"></a>

```go
func EndpointUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tags"></a>

```go
func Tags() CertificatemanagerAcmeEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList">CertificatemanagerAcmeEndpointTagsList</a>

---

##### `AuthorizationBehaviorInput`<sup>Optional</sup> <a name="AuthorizationBehaviorInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.authorizationBehaviorInput"></a>

```go
func AuthorizationBehaviorInput() *string
```

- *Type:* *string

---

##### `CertificateAuthorityInput`<sup>Optional</sup> <a name="CertificateAuthorityInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateAuthorityInput"></a>

```go
func CertificateAuthorityInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateTagsInput`<sup>Optional</sup> <a name="CertificateTagsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.certificateTagsInput"></a>

```go
func CertificateTagsInput() interface{}
```

- *Type:* interface{}

---

##### `ContactInput`<sup>Optional</sup> <a name="ContactInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.contactInput"></a>

```go
func ContactInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorizationBehavior`<sup>Required</sup> <a name="AuthorizationBehavior" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.authorizationBehavior"></a>

```go
func AuthorizationBehavior() *string
```

- *Type:* *string

---

##### `Contact`<sup>Required</sup> <a name="Contact" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.contact"></a>

```go
func Contact() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatemanagerAcmeEndpointCertificateAuthority <a name="CertificatemanagerAcmeEndpointCertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeendpoint"

&certificatemanageracmeendpoint.CertificatemanagerAcmeEndpointCertificateAuthority {
	PublicCertificateAuthority: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority.property.publicCertificateAuthority">PublicCertificateAuthority</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a></code> | Configuration for the public certificate authority. |

---

##### `PublicCertificateAuthority`<sup>Required</sup> <a name="PublicCertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority.property.publicCertificateAuthority"></a>

```go
PublicCertificateAuthority CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a>

Configuration for the public certificate authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_endpoint#public_certificate_authority CertificatemanagerAcmeEndpoint#public_certificate_authority}

---

### CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority <a name="CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeendpoint"

&certificatemanageracmeendpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority {
	AllowedKeyAlgorithms: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority.property.allowedKeyAlgorithms">AllowedKeyAlgorithms</a></code> | <code>*[]*string</code> | The allowed key algorithms for certificates issued via this endpoint. |

---

##### `AllowedKeyAlgorithms`<sup>Optional</sup> <a name="AllowedKeyAlgorithms" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority.property.allowedKeyAlgorithms"></a>

```go
AllowedKeyAlgorithms *[]*string
```

- *Type:* *[]*string

The allowed key algorithms for certificates issued via this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_endpoint#allowed_key_algorithms CertificatemanagerAcmeEndpoint#allowed_key_algorithms}

---

### CertificatemanagerAcmeEndpointCertificateTags <a name="CertificatemanagerAcmeEndpointCertificateTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeendpoint"

&certificatemanageracmeendpoint.CertificatemanagerAcmeEndpointCertificateTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_endpoint#key CertificatemanagerAcmeEndpoint#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_endpoint#value CertificatemanagerAcmeEndpoint#value}

---

### CertificatemanagerAcmeEndpointConfig <a name="CertificatemanagerAcmeEndpointConfig" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeendpoint"

&certificatemanageracmeendpoint.CertificatemanagerAcmeEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AuthorizationBehavior: *string,
	CertificateAuthority: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority,
	CertificateTags: interface{},
	Contact: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.authorizationBehavior">AuthorizationBehavior</a></code> | <code>*string</code> | The authorization behavior for the ACME endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.certificateAuthority">CertificateAuthority</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a></code> | The certificate authority configuration for the ACME endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.certificateTags">CertificateTags</a></code> | <code>interface{}</code> | Tags applied to certificates issued via this endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.contact">Contact</a></code> | <code>*string</code> | Whether contact information is required for the ACME endpoint. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags associated with the ACME endpoint. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizationBehavior`<sup>Required</sup> <a name="AuthorizationBehavior" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.authorizationBehavior"></a>

```go
AuthorizationBehavior *string
```

- *Type:* *string

The authorization behavior for the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_endpoint#authorization_behavior CertificatemanagerAcmeEndpoint#authorization_behavior}

---

##### `CertificateAuthority`<sup>Required</sup> <a name="CertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.certificateAuthority"></a>

```go
CertificateAuthority CertificatemanagerAcmeEndpointCertificateAuthority
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthority</a>

The certificate authority configuration for the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_endpoint#certificate_authority CertificatemanagerAcmeEndpoint#certificate_authority}

---

##### `CertificateTags`<sup>Optional</sup> <a name="CertificateTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.certificateTags"></a>

```go
CertificateTags interface{}
```

- *Type:* interface{}

Tags applied to certificates issued via this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_endpoint#certificate_tags CertificatemanagerAcmeEndpoint#certificate_tags}

---

##### `Contact`<sup>Optional</sup> <a name="Contact" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.contact"></a>

```go
Contact *string
```

- *Type:* *string

Whether contact information is required for the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_endpoint#contact CertificatemanagerAcmeEndpoint#contact}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags associated with the ACME endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_endpoint#tags CertificatemanagerAcmeEndpoint#tags}

---

### CertificatemanagerAcmeEndpointTags <a name="CertificatemanagerAcmeEndpointTags" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeendpoint"

&certificatemanageracmeendpoint.CertificatemanagerAcmeEndpointTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_endpoint#key CertificatemanagerAcmeEndpoint#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/certificatemanager_acme_endpoint#value CertificatemanagerAcmeEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference <a name="CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeendpoint"

certificatemanageracmeendpoint.NewCertificatemanagerAcmeEndpointCertificateAuthorityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.putPublicCertificateAuthority">PutPublicCertificateAuthority</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicCertificateAuthority` <a name="PutPublicCertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.putPublicCertificateAuthority"></a>

```go
func PutPublicCertificateAuthority(value CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.putPublicCertificateAuthority.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthority</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.publicCertificateAuthority">PublicCertificateAuthority</a></code> | <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.publicCertificateAuthorityInput">PublicCertificateAuthorityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicCertificateAuthority`<sup>Required</sup> <a name="PublicCertificateAuthority" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.publicCertificateAuthority"></a>

```go
func PublicCertificateAuthority() CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference">CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference</a>

---

##### `PublicCertificateAuthorityInput`<sup>Optional</sup> <a name="PublicCertificateAuthorityInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.publicCertificateAuthorityInput"></a>

```go
func PublicCertificateAuthorityInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference <a name="CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeendpoint"

certificatemanageracmeendpoint.NewCertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resetAllowedKeyAlgorithms">ResetAllowedKeyAlgorithms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedKeyAlgorithms` <a name="ResetAllowedKeyAlgorithms" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.resetAllowedKeyAlgorithms"></a>

```go
func ResetAllowedKeyAlgorithms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.allowedKeyAlgorithmsInput">AllowedKeyAlgorithmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.allowedKeyAlgorithms">AllowedKeyAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedKeyAlgorithmsInput`<sup>Optional</sup> <a name="AllowedKeyAlgorithmsInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.allowedKeyAlgorithmsInput"></a>

```go
func AllowedKeyAlgorithmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedKeyAlgorithms`<sup>Required</sup> <a name="AllowedKeyAlgorithms" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.allowedKeyAlgorithms"></a>

```go
func AllowedKeyAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateAuthorityPublicCertificateAuthorityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CertificatemanagerAcmeEndpointCertificateTagsList <a name="CertificatemanagerAcmeEndpointCertificateTagsList" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeendpoint"

certificatemanageracmeendpoint.NewCertificatemanagerAcmeEndpointCertificateTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CertificatemanagerAcmeEndpointCertificateTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.get"></a>

```go
func Get(index *f64) CertificatemanagerAcmeEndpointCertificateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CertificatemanagerAcmeEndpointCertificateTagsOutputReference <a name="CertificatemanagerAcmeEndpointCertificateTagsOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeendpoint"

certificatemanageracmeendpoint.NewCertificatemanagerAcmeEndpointCertificateTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CertificatemanagerAcmeEndpointCertificateTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointCertificateTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CertificatemanagerAcmeEndpointTagsList <a name="CertificatemanagerAcmeEndpointTagsList" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeendpoint"

certificatemanageracmeendpoint.NewCertificatemanagerAcmeEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CertificatemanagerAcmeEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.get"></a>

```go
func Get(index *f64) CertificatemanagerAcmeEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CertificatemanagerAcmeEndpointTagsOutputReference <a name="CertificatemanagerAcmeEndpointTagsOutputReference" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/certificatemanageracmeendpoint"

certificatemanageracmeendpoint.NewCertificatemanagerAcmeEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CertificatemanagerAcmeEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.certificatemanagerAcmeEndpoint.CertificatemanagerAcmeEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




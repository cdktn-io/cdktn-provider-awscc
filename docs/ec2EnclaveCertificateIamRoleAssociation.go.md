# `ec2EnclaveCertificateIamRoleAssociation` Submodule <a name="`ec2EnclaveCertificateIamRoleAssociation` Submodule" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2EnclaveCertificateIamRoleAssociation <a name="Ec2EnclaveCertificateIamRoleAssociation" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_enclave_certificate_iam_role_association awscc_ec2_enclave_certificate_iam_role_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2enclavecertificateiamroleassociation"

ec2enclavecertificateiamroleassociation.NewEc2EnclaveCertificateIamRoleAssociation(scope Construct, id *string, config Ec2EnclaveCertificateIamRoleAssociationConfig) Ec2EnclaveCertificateIamRoleAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig">Ec2EnclaveCertificateIamRoleAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig">Ec2EnclaveCertificateIamRoleAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2EnclaveCertificateIamRoleAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2enclavecertificateiamroleassociation"

ec2enclavecertificateiamroleassociation.Ec2EnclaveCertificateIamRoleAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2enclavecertificateiamroleassociation"

ec2enclavecertificateiamroleassociation.Ec2EnclaveCertificateIamRoleAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2enclavecertificateiamroleassociation"

ec2enclavecertificateiamroleassociation.Ec2EnclaveCertificateIamRoleAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2enclavecertificateiamroleassociation"

ec2enclavecertificateiamroleassociation.Ec2EnclaveCertificateIamRoleAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2EnclaveCertificateIamRoleAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2EnclaveCertificateIamRoleAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2EnclaveCertificateIamRoleAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_enclave_certificate_iam_role_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2EnclaveCertificateIamRoleAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.certificateS3BucketName">CertificateS3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.certificateS3ObjectKey">CertificateS3ObjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.encryptionKmsKeyId">EncryptionKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertificateS3BucketName`<sup>Required</sup> <a name="CertificateS3BucketName" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.certificateS3BucketName"></a>

```go
func CertificateS3BucketName() *string
```

- *Type:* *string

---

##### `CertificateS3ObjectKey`<sup>Required</sup> <a name="CertificateS3ObjectKey" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.certificateS3ObjectKey"></a>

```go
func CertificateS3ObjectKey() *string
```

- *Type:* *string

---

##### `EncryptionKmsKeyId`<sup>Required</sup> <a name="EncryptionKmsKeyId" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.encryptionKmsKeyId"></a>

```go
func EncryptionKmsKeyId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2EnclaveCertificateIamRoleAssociationConfig <a name="Ec2EnclaveCertificateIamRoleAssociationConfig" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2enclavecertificateiamroleassociation"

&ec2enclavecertificateiamroleassociation.Ec2EnclaveCertificateIamRoleAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CertificateArn: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the ACM certificate with which to associate the IAM role. |
| <code><a href="#@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the IAM role to associate with the ACM certificate. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the ACM certificate with which to associate the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_enclave_certificate_iam_role_association#certificate_arn Ec2EnclaveCertificateIamRoleAssociation#certificate_arn}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.ec2EnclaveCertificateIamRoleAssociation.Ec2EnclaveCertificateIamRoleAssociationConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the IAM role to associate with the ACM certificate.

You can associate up to 16 IAM roles with an ACM certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_enclave_certificate_iam_role_association#role_arn Ec2EnclaveCertificateIamRoleAssociation#role_arn}

---




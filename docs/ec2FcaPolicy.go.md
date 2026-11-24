# `ec2FcaPolicy` Submodule <a name="`ec2FcaPolicy` Submodule" id="@cdktn/provider-awscc.ec2FcaPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2FcaPolicy <a name="Ec2FcaPolicy" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy awscc_ec2_fca_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

ec2fcapolicy.NewEc2FcaPolicy(scope Construct, id *string, config Ec2FcaPolicyConfig) Ec2FcaPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig">Ec2FcaPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig">Ec2FcaPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putInstanceFcaPolicyDocument">PutInstanceFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putNatFcaPolicyDocument">PutNatFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putPcxFcaPolicyDocument">PutPcxFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetInstanceFcaPolicyDocument">ResetInstanceFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetNatFcaPolicyDocument">ResetNatFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetPcxFcaPolicyDocument">ResetPcxFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetShowBackEnabled">ResetShowBackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInstanceFcaPolicyDocument` <a name="PutInstanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putInstanceFcaPolicyDocument"></a>

```go
func PutInstanceFcaPolicyDocument(value Ec2FcaPolicyInstanceFcaPolicyDocument)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putInstanceFcaPolicyDocument.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a>

---

##### `PutNatFcaPolicyDocument` <a name="PutNatFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putNatFcaPolicyDocument"></a>

```go
func PutNatFcaPolicyDocument(value Ec2FcaPolicyNatFcaPolicyDocument)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putNatFcaPolicyDocument.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a>

---

##### `PutPcxFcaPolicyDocument` <a name="PutPcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putPcxFcaPolicyDocument"></a>

```go
func PutPcxFcaPolicyDocument(value Ec2FcaPolicyPcxFcaPolicyDocument)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putPcxFcaPolicyDocument.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetInstanceFcaPolicyDocument` <a name="ResetInstanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetInstanceFcaPolicyDocument"></a>

```go
func ResetInstanceFcaPolicyDocument()
```

##### `ResetNatFcaPolicyDocument` <a name="ResetNatFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetNatFcaPolicyDocument"></a>

```go
func ResetNatFcaPolicyDocument()
```

##### `ResetPcxFcaPolicyDocument` <a name="ResetPcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetPcxFcaPolicyDocument"></a>

```go
func ResetPcxFcaPolicyDocument()
```

##### `ResetShowBackEnabled` <a name="ResetShowBackEnabled" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetShowBackEnabled"></a>

```go
func ResetShowBackEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2FcaPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

ec2fcapolicy.Ec2FcaPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

ec2fcapolicy.Ec2FcaPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

ec2fcapolicy.Ec2FcaPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

ec2fcapolicy.Ec2FcaPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2FcaPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2FcaPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2FcaPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2FcaPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.fcaPolicyId">FcaPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.instanceFcaPolicyDocument">InstanceFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference">Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.latestVersion">LatestVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.natFcaPolicyDocument">NatFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference">Ec2FcaPolicyNatFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.ownerAccount">OwnerAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.pcxFcaPolicyDocument">PcxFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference">Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.policyCreatedAt">PolicyCreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList">Ec2FcaPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.versionExpectedEffectiveAt">VersionExpectedEffectiveAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.instanceFcaPolicyDocumentInput">InstanceFcaPolicyDocumentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.natFcaPolicyDocumentInput">NatFcaPolicyDocumentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.networkResourceTypeInput">NetworkResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.pcxFcaPolicyDocumentInput">PcxFcaPolicyDocumentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.showBackEnabledInput">ShowBackEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.networkResourceType">NetworkResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.showBackEnabled">ShowBackEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `FcaPolicyId`<sup>Required</sup> <a name="FcaPolicyId" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.fcaPolicyId"></a>

```go
func FcaPolicyId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceFcaPolicyDocument`<sup>Required</sup> <a name="InstanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.instanceFcaPolicyDocument"></a>

```go
func InstanceFcaPolicyDocument() Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference">Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference</a>

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.latestVersion"></a>

```go
func LatestVersion() *f64
```

- *Type:* *f64

---

##### `NatFcaPolicyDocument`<sup>Required</sup> <a name="NatFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.natFcaPolicyDocument"></a>

```go
func NatFcaPolicyDocument() Ec2FcaPolicyNatFcaPolicyDocumentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference">Ec2FcaPolicyNatFcaPolicyDocumentOutputReference</a>

---

##### `OwnerAccount`<sup>Required</sup> <a name="OwnerAccount" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.ownerAccount"></a>

```go
func OwnerAccount() *string
```

- *Type:* *string

---

##### `PcxFcaPolicyDocument`<sup>Required</sup> <a name="PcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.pcxFcaPolicyDocument"></a>

```go
func PcxFcaPolicyDocument() Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference">Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference</a>

---

##### `PolicyCreatedAt`<sup>Required</sup> <a name="PolicyCreatedAt" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.policyCreatedAt"></a>

```go
func PolicyCreatedAt() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tags"></a>

```go
func Tags() Ec2FcaPolicyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList">Ec2FcaPolicyTagsList</a>

---

##### `VersionExpectedEffectiveAt`<sup>Required</sup> <a name="VersionExpectedEffectiveAt" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.versionExpectedEffectiveAt"></a>

```go
func VersionExpectedEffectiveAt() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `InstanceFcaPolicyDocumentInput`<sup>Optional</sup> <a name="InstanceFcaPolicyDocumentInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.instanceFcaPolicyDocumentInput"></a>

```go
func InstanceFcaPolicyDocumentInput() interface{}
```

- *Type:* interface{}

---

##### `NatFcaPolicyDocumentInput`<sup>Optional</sup> <a name="NatFcaPolicyDocumentInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.natFcaPolicyDocumentInput"></a>

```go
func NatFcaPolicyDocumentInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkResourceTypeInput`<sup>Optional</sup> <a name="NetworkResourceTypeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.networkResourceTypeInput"></a>

```go
func NetworkResourceTypeInput() *string
```

- *Type:* *string

---

##### `PcxFcaPolicyDocumentInput`<sup>Optional</sup> <a name="PcxFcaPolicyDocumentInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.pcxFcaPolicyDocumentInput"></a>

```go
func PcxFcaPolicyDocumentInput() interface{}
```

- *Type:* interface{}

---

##### `ShowBackEnabledInput`<sup>Optional</sup> <a name="ShowBackEnabledInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.showBackEnabledInput"></a>

```go
func ShowBackEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `NetworkResourceType`<sup>Required</sup> <a name="NetworkResourceType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.networkResourceType"></a>

```go
func NetworkResourceType() *string
```

- *Type:* *string

---

##### `ShowBackEnabled`<sup>Required</sup> <a name="ShowBackEnabled" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.showBackEnabled"></a>

```go
func ShowBackEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2FcaPolicyConfig <a name="Ec2FcaPolicyConfig" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

&ec2fcapolicy.Ec2FcaPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	NetworkResourceType: *string,
	Description: *string,
	InstanceFcaPolicyDocument: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument,
	NatFcaPolicyDocument: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument,
	PcxFcaPolicyDocument: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument,
	ShowBackEnabled: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.networkResourceType">NetworkResourceType</a></code> | <code>*string</code> | The type of network resource the FCA policy applies to. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.description">Description</a></code> | <code>*string</code> | The description of the FCA policy. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.instanceFcaPolicyDocument">InstanceFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a></code> | The FCA policy document for EC2 instance cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.natFcaPolicyDocument">NatFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a></code> | The FCA policy document for NAT gateway cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.pcxFcaPolicyDocument">PcxFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a></code> | The FCA policy document for VPC peering connection cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.showBackEnabled">ShowBackEnabled</a></code> | <code>interface{}</code> | Indicates whether show-back reporting is enabled for the FCA policy. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags for the FCA policy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NetworkResourceType`<sup>Required</sup> <a name="NetworkResourceType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.networkResourceType"></a>

```go
NetworkResourceType *string
```

- *Type:* *string

The type of network resource the FCA policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#network_resource_type Ec2FcaPolicy#network_resource_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#description Ec2FcaPolicy#description}

---

##### `InstanceFcaPolicyDocument`<sup>Optional</sup> <a name="InstanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.instanceFcaPolicyDocument"></a>

```go
InstanceFcaPolicyDocument Ec2FcaPolicyInstanceFcaPolicyDocument
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a>

The FCA policy document for EC2 instance cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#instance_fca_policy_document Ec2FcaPolicy#instance_fca_policy_document}

---

##### `NatFcaPolicyDocument`<sup>Optional</sup> <a name="NatFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.natFcaPolicyDocument"></a>

```go
NatFcaPolicyDocument Ec2FcaPolicyNatFcaPolicyDocument
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a>

The FCA policy document for NAT gateway cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#nat_fca_policy_document Ec2FcaPolicy#nat_fca_policy_document}

---

##### `PcxFcaPolicyDocument`<sup>Optional</sup> <a name="PcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.pcxFcaPolicyDocument"></a>

```go
PcxFcaPolicyDocument Ec2FcaPolicyPcxFcaPolicyDocument
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a>

The FCA policy document for VPC peering connection cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#pcx_fca_policy_document Ec2FcaPolicy#pcx_fca_policy_document}

---

##### `ShowBackEnabled`<sup>Optional</sup> <a name="ShowBackEnabled" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.showBackEnabled"></a>

```go
ShowBackEnabled interface{}
```

- *Type:* interface{}

Indicates whether show-back reporting is enabled for the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#show_back_enabled Ec2FcaPolicy#show_back_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags for the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#tags Ec2FcaPolicy#tags}

---

### Ec2FcaPolicyInstanceFcaPolicyDocument <a name="Ec2FcaPolicyInstanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

&ec2fcapolicy.Ec2FcaPolicyInstanceFcaPolicyDocument {
	CidrRangeSpecifications: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications,
	Dimensions: *[]*string,
	ReportingGranularity: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.cidrRangeSpecifications">CidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a></code> | CIDR range specifications, used when the reporting granularity is 'cidr'. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.dimensions">Dimensions</a></code> | <code>*[]*string</code> | The cost dimensions to allocate. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.reportingGranularity">ReportingGranularity</a></code> | <code>*[]*string</code> | The granularity at which costs are reported. Contains exactly one value. |

---

##### `CidrRangeSpecifications`<sup>Optional</sup> <a name="CidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.cidrRangeSpecifications"></a>

```go
CidrRangeSpecifications Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a>

CIDR range specifications, used when the reporting granularity is 'cidr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.dimensions"></a>

```go
Dimensions *[]*string
```

- *Type:* *[]*string

The cost dimensions to allocate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}

---

##### `ReportingGranularity`<sup>Optional</sup> <a name="ReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.reportingGranularity"></a>

```go
ReportingGranularity *[]*string
```

- *Type:* *[]*string

The granularity at which costs are reported. Contains exactly one value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}

---

### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

&ec2fcapolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications {
	Prefixes: interface{},
	PrefixesType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.property.prefixes">Prefixes</a></code> | <code>interface{}</code> | The CIDR range to label mappings. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType">PrefixesType</a></code> | <code>*string</code> | The type of prefixes the mappings apply to. |

---

##### `Prefixes`<sup>Optional</sup> <a name="Prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.property.prefixes"></a>

```go
Prefixes interface{}
```

- *Type:* interface{}

The CIDR range to label mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}

---

##### `PrefixesType`<sup>Optional</sup> <a name="PrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType"></a>

```go
PrefixesType *string
```

- *Type:* *string

The type of prefixes the mappings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}

---

### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

&ec2fcapolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes {
	CidrLabel: *string,
	CidrRange: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel">CidrLabel</a></code> | <code>*string</code> | The label for the CIDR range. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange">CidrRange</a></code> | <code>*string</code> | The CIDR range. |

---

##### `CidrLabel`<sup>Optional</sup> <a name="CidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel"></a>

```go
CidrLabel *string
```

- *Type:* *string

The label for the CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_label Ec2FcaPolicy#cidr_label}

---

##### `CidrRange`<sup>Optional</sup> <a name="CidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange"></a>

```go
CidrRange *string
```

- *Type:* *string

The CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range Ec2FcaPolicy#cidr_range}

---

### Ec2FcaPolicyNatFcaPolicyDocument <a name="Ec2FcaPolicyNatFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

&ec2fcapolicy.Ec2FcaPolicyNatFcaPolicyDocument {
	CidrRangeSpecifications: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications,
	Dimensions: *[]*string,
	ReportingGranularity: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.cidrRangeSpecifications">CidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a></code> | CIDR range specifications, used when the reporting granularity is 'cidr'. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.dimensions">Dimensions</a></code> | <code>*[]*string</code> | The cost dimensions to allocate. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.reportingGranularity">ReportingGranularity</a></code> | <code>*[]*string</code> | The granularity at which costs are reported. Contains exactly one value. |

---

##### `CidrRangeSpecifications`<sup>Optional</sup> <a name="CidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.cidrRangeSpecifications"></a>

```go
CidrRangeSpecifications Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a>

CIDR range specifications, used when the reporting granularity is 'cidr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.dimensions"></a>

```go
Dimensions *[]*string
```

- *Type:* *[]*string

The cost dimensions to allocate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}

---

##### `ReportingGranularity`<sup>Optional</sup> <a name="ReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.reportingGranularity"></a>

```go
ReportingGranularity *[]*string
```

- *Type:* *[]*string

The granularity at which costs are reported. Contains exactly one value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}

---

### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

&ec2fcapolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications {
	Prefixes: interface{},
	PrefixesType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.property.prefixes">Prefixes</a></code> | <code>interface{}</code> | The CIDR range to label mappings. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType">PrefixesType</a></code> | <code>*string</code> | The type of prefixes the mappings apply to. |

---

##### `Prefixes`<sup>Optional</sup> <a name="Prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.property.prefixes"></a>

```go
Prefixes interface{}
```

- *Type:* interface{}

The CIDR range to label mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}

---

##### `PrefixesType`<sup>Optional</sup> <a name="PrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType"></a>

```go
PrefixesType *string
```

- *Type:* *string

The type of prefixes the mappings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}

---

### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

&ec2fcapolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes {
	CidrLabel: *string,
	CidrRange: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel">CidrLabel</a></code> | <code>*string</code> | The label for the CIDR range. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange">CidrRange</a></code> | <code>*string</code> | The CIDR range. |

---

##### `CidrLabel`<sup>Optional</sup> <a name="CidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel"></a>

```go
CidrLabel *string
```

- *Type:* *string

The label for the CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_label Ec2FcaPolicy#cidr_label}

---

##### `CidrRange`<sup>Optional</sup> <a name="CidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange"></a>

```go
CidrRange *string
```

- *Type:* *string

The CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range Ec2FcaPolicy#cidr_range}

---

### Ec2FcaPolicyPcxFcaPolicyDocument <a name="Ec2FcaPolicyPcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

&ec2fcapolicy.Ec2FcaPolicyPcxFcaPolicyDocument {
	CidrRangeSpecifications: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications,
	Dimensions: *[]*string,
	ReportingGranularity: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.cidrRangeSpecifications">CidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a></code> | CIDR range specifications, used when the reporting granularity is 'cidr'. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.dimensions">Dimensions</a></code> | <code>*[]*string</code> | The cost dimensions to allocate. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.reportingGranularity">ReportingGranularity</a></code> | <code>*[]*string</code> | The granularity at which costs are reported. Contains exactly one value. |

---

##### `CidrRangeSpecifications`<sup>Optional</sup> <a name="CidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.cidrRangeSpecifications"></a>

```go
CidrRangeSpecifications Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a>

CIDR range specifications, used when the reporting granularity is 'cidr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.dimensions"></a>

```go
Dimensions *[]*string
```

- *Type:* *[]*string

The cost dimensions to allocate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}

---

##### `ReportingGranularity`<sup>Optional</sup> <a name="ReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.reportingGranularity"></a>

```go
ReportingGranularity *[]*string
```

- *Type:* *[]*string

The granularity at which costs are reported. Contains exactly one value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}

---

### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

&ec2fcapolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications {
	Prefixes: interface{},
	PrefixesType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.property.prefixes">Prefixes</a></code> | <code>interface{}</code> | The CIDR range to label mappings. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType">PrefixesType</a></code> | <code>*string</code> | The type of prefixes the mappings apply to. |

---

##### `Prefixes`<sup>Optional</sup> <a name="Prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.property.prefixes"></a>

```go
Prefixes interface{}
```

- *Type:* interface{}

The CIDR range to label mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}

---

##### `PrefixesType`<sup>Optional</sup> <a name="PrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType"></a>

```go
PrefixesType *string
```

- *Type:* *string

The type of prefixes the mappings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}

---

### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

&ec2fcapolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes {
	CidrLabel: *string,
	CidrRange: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel">CidrLabel</a></code> | <code>*string</code> | The label for the CIDR range. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange">CidrRange</a></code> | <code>*string</code> | The CIDR range. |

---

##### `CidrLabel`<sup>Optional</sup> <a name="CidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel"></a>

```go
CidrLabel *string
```

- *Type:* *string

The label for the CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_label Ec2FcaPolicy#cidr_label}

---

##### `CidrRange`<sup>Optional</sup> <a name="CidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange"></a>

```go
CidrRange *string
```

- *Type:* *string

The CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range Ec2FcaPolicy#cidr_range}

---

### Ec2FcaPolicyTags <a name="Ec2FcaPolicyTags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

&ec2fcapolicy.Ec2FcaPolicyTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#key Ec2FcaPolicy#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#value Ec2FcaPolicy#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#key Ec2FcaPolicy#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#value Ec2FcaPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

ec2fcapolicy.NewEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes">PutPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes">ResetPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType">ResetPrefixesType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrefixes` <a name="PutPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes"></a>

```go
func PutPrefixes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPrefixes` <a name="ResetPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes"></a>

```go
func ResetPrefixes()
```

##### `ResetPrefixesType` <a name="ResetPrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType"></a>

```go
func ResetPrefixesType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">Prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput">PrefixesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput">PrefixesTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">PrefixesType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Prefixes`<sup>Required</sup> <a name="Prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```go
func Prefixes() Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `PrefixesInput`<sup>Optional</sup> <a name="PrefixesInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput"></a>

```go
func PrefixesInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixesTypeInput`<sup>Optional</sup> <a name="PrefixesTypeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput"></a>

```go
func PrefixesTypeInput() *string
```

- *Type:* *string

---

##### `PrefixesType`<sup>Required</sup> <a name="PrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```go
func PrefixesType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

ec2fcapolicy.NewEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```go
func Get(index *f64) Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

ec2fcapolicy.NewEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel">ResetCidrLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange">ResetCidrRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrLabel` <a name="ResetCidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel"></a>

```go
func ResetCidrLabel()
```

##### `ResetCidrRange` <a name="ResetCidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange"></a>

```go
func ResetCidrRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput">CidrLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput">CidrRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">CidrLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">CidrRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrLabelInput`<sup>Optional</sup> <a name="CidrLabelInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput"></a>

```go
func CidrLabelInput() *string
```

- *Type:* *string

---

##### `CidrRangeInput`<sup>Optional</sup> <a name="CidrRangeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput"></a>

```go
func CidrRangeInput() *string
```

- *Type:* *string

---

##### `CidrLabel`<sup>Required</sup> <a name="CidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```go
func CidrLabel() *string
```

- *Type:* *string

---

##### `CidrRange`<sup>Required</sup> <a name="CidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```go
func CidrRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

ec2fcapolicy.NewEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.putCidrRangeSpecifications">PutCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications">ResetCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetReportingGranularity">ResetReportingGranularity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCidrRangeSpecifications` <a name="PutCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.putCidrRangeSpecifications"></a>

```go
func PutCidrRangeSpecifications(value Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.putCidrRangeSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `ResetCidrRangeSpecifications` <a name="ResetCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications"></a>

```go
func ResetCidrRangeSpecifications()
```

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetDimensions"></a>

```go
func ResetDimensions()
```

##### `ResetReportingGranularity` <a name="ResetReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetReportingGranularity"></a>

```go
func ResetReportingGranularity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">CidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput">CidrRangeSpecificationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularityInput">ReportingGranularityInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensions">Dimensions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularity">ReportingGranularity</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrRangeSpecifications`<sup>Required</sup> <a name="CidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```go
func CidrRangeSpecifications() Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `CidrRangeSpecificationsInput`<sup>Optional</sup> <a name="CidrRangeSpecificationsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput"></a>

```go
func CidrRangeSpecificationsInput() interface{}
```

- *Type:* interface{}

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensionsInput"></a>

```go
func DimensionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReportingGranularityInput`<sup>Optional</sup> <a name="ReportingGranularityInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularityInput"></a>

```go
func ReportingGranularityInput() *[]*string
```

- *Type:* *[]*string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensions"></a>

```go
func Dimensions() *[]*string
```

- *Type:* *[]*string

---

##### `ReportingGranularity`<sup>Required</sup> <a name="ReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```go
func ReportingGranularity() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

ec2fcapolicy.NewEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes">PutPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes">ResetPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType">ResetPrefixesType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrefixes` <a name="PutPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes"></a>

```go
func PutPrefixes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPrefixes` <a name="ResetPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes"></a>

```go
func ResetPrefixes()
```

##### `ResetPrefixesType` <a name="ResetPrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType"></a>

```go
func ResetPrefixesType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">Prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput">PrefixesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput">PrefixesTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">PrefixesType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Prefixes`<sup>Required</sup> <a name="Prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```go
func Prefixes() Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `PrefixesInput`<sup>Optional</sup> <a name="PrefixesInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput"></a>

```go
func PrefixesInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixesTypeInput`<sup>Optional</sup> <a name="PrefixesTypeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput"></a>

```go
func PrefixesTypeInput() *string
```

- *Type:* *string

---

##### `PrefixesType`<sup>Required</sup> <a name="PrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```go
func PrefixesType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

ec2fcapolicy.NewEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```go
func Get(index *f64) Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

ec2fcapolicy.NewEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel">ResetCidrLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange">ResetCidrRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrLabel` <a name="ResetCidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel"></a>

```go
func ResetCidrLabel()
```

##### `ResetCidrRange` <a name="ResetCidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange"></a>

```go
func ResetCidrRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput">CidrLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput">CidrRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">CidrLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">CidrRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrLabelInput`<sup>Optional</sup> <a name="CidrLabelInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput"></a>

```go
func CidrLabelInput() *string
```

- *Type:* *string

---

##### `CidrRangeInput`<sup>Optional</sup> <a name="CidrRangeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput"></a>

```go
func CidrRangeInput() *string
```

- *Type:* *string

---

##### `CidrLabel`<sup>Required</sup> <a name="CidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```go
func CidrLabel() *string
```

- *Type:* *string

---

##### `CidrRange`<sup>Required</sup> <a name="CidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```go
func CidrRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2FcaPolicyNatFcaPolicyDocumentOutputReference <a name="Ec2FcaPolicyNatFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

ec2fcapolicy.NewEc2FcaPolicyNatFcaPolicyDocumentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FcaPolicyNatFcaPolicyDocumentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.putCidrRangeSpecifications">PutCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications">ResetCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetReportingGranularity">ResetReportingGranularity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCidrRangeSpecifications` <a name="PutCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.putCidrRangeSpecifications"></a>

```go
func PutCidrRangeSpecifications(value Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.putCidrRangeSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `ResetCidrRangeSpecifications` <a name="ResetCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications"></a>

```go
func ResetCidrRangeSpecifications()
```

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetDimensions"></a>

```go
func ResetDimensions()
```

##### `ResetReportingGranularity` <a name="ResetReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetReportingGranularity"></a>

```go
func ResetReportingGranularity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">CidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput">CidrRangeSpecificationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularityInput">ReportingGranularityInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensions">Dimensions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularity">ReportingGranularity</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrRangeSpecifications`<sup>Required</sup> <a name="CidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```go
func CidrRangeSpecifications() Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `CidrRangeSpecificationsInput`<sup>Optional</sup> <a name="CidrRangeSpecificationsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput"></a>

```go
func CidrRangeSpecificationsInput() interface{}
```

- *Type:* interface{}

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensionsInput"></a>

```go
func DimensionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReportingGranularityInput`<sup>Optional</sup> <a name="ReportingGranularityInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularityInput"></a>

```go
func ReportingGranularityInput() *[]*string
```

- *Type:* *[]*string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensions"></a>

```go
func Dimensions() *[]*string
```

- *Type:* *[]*string

---

##### `ReportingGranularity`<sup>Required</sup> <a name="ReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```go
func ReportingGranularity() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

ec2fcapolicy.NewEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes">PutPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes">ResetPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType">ResetPrefixesType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrefixes` <a name="PutPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes"></a>

```go
func PutPrefixes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPrefixes` <a name="ResetPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes"></a>

```go
func ResetPrefixes()
```

##### `ResetPrefixesType` <a name="ResetPrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType"></a>

```go
func ResetPrefixesType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">Prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput">PrefixesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput">PrefixesTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">PrefixesType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Prefixes`<sup>Required</sup> <a name="Prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```go
func Prefixes() Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `PrefixesInput`<sup>Optional</sup> <a name="PrefixesInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput"></a>

```go
func PrefixesInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixesTypeInput`<sup>Optional</sup> <a name="PrefixesTypeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput"></a>

```go
func PrefixesTypeInput() *string
```

- *Type:* *string

---

##### `PrefixesType`<sup>Required</sup> <a name="PrefixesType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```go
func PrefixesType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

ec2fcapolicy.NewEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```go
func Get(index *f64) Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

ec2fcapolicy.NewEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel">ResetCidrLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange">ResetCidrRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrLabel` <a name="ResetCidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel"></a>

```go
func ResetCidrLabel()
```

##### `ResetCidrRange` <a name="ResetCidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange"></a>

```go
func ResetCidrRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput">CidrLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput">CidrRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">CidrLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">CidrRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrLabelInput`<sup>Optional</sup> <a name="CidrLabelInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput"></a>

```go
func CidrLabelInput() *string
```

- *Type:* *string

---

##### `CidrRangeInput`<sup>Optional</sup> <a name="CidrRangeInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput"></a>

```go
func CidrRangeInput() *string
```

- *Type:* *string

---

##### `CidrLabel`<sup>Required</sup> <a name="CidrLabel" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```go
func CidrLabel() *string
```

- *Type:* *string

---

##### `CidrRange`<sup>Required</sup> <a name="CidrRange" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```go
func CidrRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference <a name="Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

ec2fcapolicy.NewEc2FcaPolicyPcxFcaPolicyDocumentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.putCidrRangeSpecifications">PutCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications">ResetCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetReportingGranularity">ResetReportingGranularity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCidrRangeSpecifications` <a name="PutCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.putCidrRangeSpecifications"></a>

```go
func PutCidrRangeSpecifications(value Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.putCidrRangeSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `ResetCidrRangeSpecifications` <a name="ResetCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications"></a>

```go
func ResetCidrRangeSpecifications()
```

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetDimensions"></a>

```go
func ResetDimensions()
```

##### `ResetReportingGranularity` <a name="ResetReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetReportingGranularity"></a>

```go
func ResetReportingGranularity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">CidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput">CidrRangeSpecificationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularityInput">ReportingGranularityInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensions">Dimensions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularity">ReportingGranularity</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrRangeSpecifications`<sup>Required</sup> <a name="CidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```go
func CidrRangeSpecifications() Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `CidrRangeSpecificationsInput`<sup>Optional</sup> <a name="CidrRangeSpecificationsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput"></a>

```go
func CidrRangeSpecificationsInput() interface{}
```

- *Type:* interface{}

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensionsInput"></a>

```go
func DimensionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReportingGranularityInput`<sup>Optional</sup> <a name="ReportingGranularityInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularityInput"></a>

```go
func ReportingGranularityInput() *[]*string
```

- *Type:* *[]*string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensions"></a>

```go
func Dimensions() *[]*string
```

- *Type:* *[]*string

---

##### `ReportingGranularity`<sup>Required</sup> <a name="ReportingGranularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```go
func ReportingGranularity() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2FcaPolicyTagsList <a name="Ec2FcaPolicyTagsList" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

ec2fcapolicy.NewEc2FcaPolicyTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2FcaPolicyTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.get"></a>

```go
func Get(index *f64) Ec2FcaPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2FcaPolicyTagsOutputReference <a name="Ec2FcaPolicyTagsOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ec2fcapolicy"

ec2fcapolicy.NewEc2FcaPolicyTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2FcaPolicyTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




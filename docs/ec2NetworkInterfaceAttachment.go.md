# `ec2NetworkInterfaceAttachment` Submodule <a name="`ec2NetworkInterfaceAttachment` Submodule" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2NetworkInterfaceAttachment <a name="Ec2NetworkInterfaceAttachment" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface_attachment awscc_ec2_network_interface_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinterfaceattachment"

ec2networkinterfaceattachment.NewEc2NetworkInterfaceAttachment(scope Construct, id *string, config Ec2NetworkInterfaceAttachmentConfig) Ec2NetworkInterfaceAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig">Ec2NetworkInterfaceAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig">Ec2NetworkInterfaceAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.putEnaSrdSpecification">PutEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetEnaQueueCount">ResetEnaQueueCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetEnaSrdSpecification">ResetEnaSrdSpecification</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEnaSrdSpecification` <a name="PutEnaSrdSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.putEnaSrdSpecification"></a>

```go
func PutEnaSrdSpecification(value Ec2NetworkInterfaceAttachmentEnaSrdSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.putEnaSrdSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecification</a>

---

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetDeleteOnTermination"></a>

```go
func ResetDeleteOnTermination()
```

##### `ResetEnaQueueCount` <a name="ResetEnaQueueCount" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetEnaQueueCount"></a>

```go
func ResetEnaQueueCount()
```

##### `ResetEnaSrdSpecification` <a name="ResetEnaSrdSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.resetEnaSrdSpecification"></a>

```go
func ResetEnaSrdSpecification()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2NetworkInterfaceAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinterfaceattachment"

ec2networkinterfaceattachment.Ec2NetworkInterfaceAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinterfaceattachment"

ec2networkinterfaceattachment.Ec2NetworkInterfaceAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinterfaceattachment"

ec2networkinterfaceattachment.Ec2NetworkInterfaceAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinterfaceattachment"

ec2networkinterfaceattachment.Ec2NetworkInterfaceAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2NetworkInterfaceAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2NetworkInterfaceAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2NetworkInterfaceAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2NetworkInterfaceAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.attachmentId">AttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaSrdSpecification">EnaSrdSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deviceIndexInput">DeviceIndexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaQueueCountInput">EnaQueueCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaSrdSpecificationInput">EnaSrdSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deviceIndex">DeviceIndex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaQueueCount">EnaQueueCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.attachmentId"></a>

```go
func AttachmentId() *string
```

- *Type:* *string

---

##### `EnaSrdSpecification`<sup>Required</sup> <a name="EnaSrdSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaSrdSpecification"></a>

```go
func EnaSrdSpecification() Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deleteOnTerminationInput"></a>

```go
func DeleteOnTerminationInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceIndexInput`<sup>Optional</sup> <a name="DeviceIndexInput" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deviceIndexInput"></a>

```go
func DeviceIndexInput() *string
```

- *Type:* *string

---

##### `EnaQueueCountInput`<sup>Optional</sup> <a name="EnaQueueCountInput" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaQueueCountInput"></a>

```go
func EnaQueueCountInput() *f64
```

- *Type:* *f64

---

##### `EnaSrdSpecificationInput`<sup>Optional</sup> <a name="EnaSrdSpecificationInput" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaSrdSpecificationInput"></a>

```go
func EnaSrdSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.networkInterfaceIdInput"></a>

```go
func NetworkInterfaceIdInput() *string
```

- *Type:* *string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deleteOnTermination"></a>

```go
func DeleteOnTermination() interface{}
```

- *Type:* interface{}

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.deviceIndex"></a>

```go
func DeviceIndex() *string
```

- *Type:* *string

---

##### `EnaQueueCount`<sup>Required</sup> <a name="EnaQueueCount" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.enaQueueCount"></a>

```go
func EnaQueueCount() *f64
```

- *Type:* *f64

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.networkInterfaceId"></a>

```go
func NetworkInterfaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2NetworkInterfaceAttachmentConfig <a name="Ec2NetworkInterfaceAttachmentConfig" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinterfaceattachment"

&ec2networkinterfaceattachment.Ec2NetworkInterfaceAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DeviceIndex: *string,
	InstanceId: *string,
	NetworkInterfaceId: *string,
	DeleteOnTermination: interface{},
	EnaQueueCount: *f64,
	EnaSrdSpecification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.deviceIndex">DeviceIndex</a></code> | <code>*string</code> | The network interface's position in the attachment order. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | The ID of the instance to which you will attach the ENI. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>*string</code> | The ID of the ENI that you want to attach. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>interface{}</code> | Whether to delete the network interface when the instance terminates. By default, this value is set to ``true``. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.enaQueueCount">EnaQueueCount</a></code> | <code>*f64</code> | The number of ENA queues created with the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.enaSrdSpecification">EnaSrdSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecification</a></code> | Configures ENA Express for the network interface that this action attaches to the instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.deviceIndex"></a>

```go
DeviceIndex *string
```

- *Type:* *string

The network interface's position in the attachment order.

For example, the first attached network interface has a `DeviceIndex` of 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface_attachment#device_index Ec2NetworkInterfaceAttachment#device_index}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

The ID of the instance to which you will attach the ENI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface_attachment#instance_id Ec2NetworkInterfaceAttachment#instance_id}

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.networkInterfaceId"></a>

```go
NetworkInterfaceId *string
```

- *Type:* *string

The ID of the ENI that you want to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface_attachment#network_interface_id Ec2NetworkInterfaceAttachment#network_interface_id}

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.deleteOnTermination"></a>

```go
DeleteOnTermination interface{}
```

- *Type:* interface{}

Whether to delete the network interface when the instance terminates. By default, this value is set to ``true``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface_attachment#delete_on_termination Ec2NetworkInterfaceAttachment#delete_on_termination}

---

##### `EnaQueueCount`<sup>Optional</sup> <a name="EnaQueueCount" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.enaQueueCount"></a>

```go
EnaQueueCount *f64
```

- *Type:* *f64

The number of ENA queues created with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface_attachment#ena_queue_count Ec2NetworkInterfaceAttachment#ena_queue_count}

---

##### `EnaSrdSpecification`<sup>Optional</sup> <a name="EnaSrdSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentConfig.property.enaSrdSpecification"></a>

```go
EnaSrdSpecification Ec2NetworkInterfaceAttachmentEnaSrdSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecification</a>

Configures ENA Express for the network interface that this action attaches to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface_attachment#ena_srd_specification Ec2NetworkInterfaceAttachment#ena_srd_specification}

---

### Ec2NetworkInterfaceAttachmentEnaSrdSpecification <a name="Ec2NetworkInterfaceAttachmentEnaSrdSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinterfaceattachment"

&ec2networkinterfaceattachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification {
	EnaSrdEnabled: interface{},
	EnaSrdUdpSpecification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification.property.enaSrdEnabled">EnaSrdEnabled</a></code> | <code>interface{}</code> | Indicates whether ENA Express is enabled for the network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification.property.enaSrdUdpSpecification">EnaSrdUdpSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | Configures ENA Express for UDP network traffic. |

---

##### `EnaSrdEnabled`<sup>Optional</sup> <a name="EnaSrdEnabled" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification.property.enaSrdEnabled"></a>

```go
EnaSrdEnabled interface{}
```

- *Type:* interface{}

Indicates whether ENA Express is enabled for the network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface_attachment#ena_srd_enabled Ec2NetworkInterfaceAttachment#ena_srd_enabled}

---

##### `EnaSrdUdpSpecification`<sup>Optional</sup> <a name="EnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecification.property.enaSrdUdpSpecification"></a>

```go
EnaSrdUdpSpecification Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a>

Configures ENA Express for UDP network traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface_attachment#ena_srd_udp_specification Ec2NetworkInterfaceAttachment#ena_srd_udp_specification}

---

### Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification <a name="Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinterfaceattachment"

&ec2networkinterfaceattachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification {
	EnaSrdUdpEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification.property.enaSrdUdpEnabled">EnaSrdUdpEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface_attachment#ena_srd_udp_enabled Ec2NetworkInterfaceAttachment#ena_srd_udp_enabled}. |

---

##### `EnaSrdUdpEnabled`<sup>Optional</sup> <a name="EnaSrdUdpEnabled" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification.property.enaSrdUdpEnabled"></a>

```go
EnaSrdUdpEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_network_interface_attachment#ena_srd_udp_enabled Ec2NetworkInterfaceAttachment#ena_srd_udp_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference <a name="Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinterfaceattachment"

ec2networkinterfaceattachment.NewEc2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resetEnaSrdUdpEnabled">ResetEnaSrdUdpEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnaSrdUdpEnabled` <a name="ResetEnaSrdUdpEnabled" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resetEnaSrdUdpEnabled"></a>

```go
func ResetEnaSrdUdpEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabledInput">EnaSrdUdpEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled">EnaSrdUdpEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnaSrdUdpEnabledInput`<sup>Optional</sup> <a name="EnaSrdUdpEnabledInput" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabledInput"></a>

```go
func EnaSrdUdpEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnaSrdUdpEnabled`<sup>Required</sup> <a name="EnaSrdUdpEnabled" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled"></a>

```go
func EnaSrdUdpEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference <a name="Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinterfaceattachment"

ec2networkinterfaceattachment.NewEc2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification">PutEnaSrdUdpSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resetEnaSrdEnabled">ResetEnaSrdEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resetEnaSrdUdpSpecification">ResetEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnaSrdUdpSpecification` <a name="PutEnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification"></a>

```go
func PutEnaSrdUdpSpecification(value Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecification</a>

---

##### `ResetEnaSrdEnabled` <a name="ResetEnaSrdEnabled" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resetEnaSrdEnabled"></a>

```go
func ResetEnaSrdEnabled()
```

##### `ResetEnaSrdUdpSpecification` <a name="ResetEnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.resetEnaSrdUdpSpecification"></a>

```go
func ResetEnaSrdUdpSpecification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification">EnaSrdUdpSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdEnabledInput">EnaSrdEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecificationInput">EnaSrdUdpSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdEnabled">EnaSrdEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnaSrdUdpSpecification`<sup>Required</sup> <a name="EnaSrdUdpSpecification" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification"></a>

```go
func EnaSrdUdpSpecification() Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">Ec2NetworkInterfaceAttachmentEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a>

---

##### `EnaSrdEnabledInput`<sup>Optional</sup> <a name="EnaSrdEnabledInput" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdEnabledInput"></a>

```go
func EnaSrdEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnaSrdUdpSpecificationInput`<sup>Optional</sup> <a name="EnaSrdUdpSpecificationInput" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecificationInput"></a>

```go
func EnaSrdUdpSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `EnaSrdEnabled`<sup>Required</sup> <a name="EnaSrdEnabled" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.enaSrdEnabled"></a>

```go
func EnaSrdEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInterfaceAttachment.Ec2NetworkInterfaceAttachmentEnaSrdSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




# `cloudformationPublicTypeVersion` Submodule <a name="`cloudformationPublicTypeVersion` Submodule" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationPublicTypeVersion <a name="CloudformationPublicTypeVersion" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_public_type_version awscc_cloudformation_public_type_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationpublictypeversion"

cloudformationpublictypeversion.NewCloudformationPublicTypeVersion(scope Construct, id *string, config CloudformationPublicTypeVersionConfig) CloudformationPublicTypeVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig">CloudformationPublicTypeVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig">CloudformationPublicTypeVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetLogDeliveryBucket">ResetLogDeliveryBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetPublicVersionNumber">ResetPublicVersionNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetTypeName">ResetTypeName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetArn"></a>

```go
func ResetArn()
```

##### `ResetLogDeliveryBucket` <a name="ResetLogDeliveryBucket" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetLogDeliveryBucket"></a>

```go
func ResetLogDeliveryBucket()
```

##### `ResetPublicVersionNumber` <a name="ResetPublicVersionNumber" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetPublicVersionNumber"></a>

```go
func ResetPublicVersionNumber()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetType"></a>

```go
func ResetType()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.resetTypeName"></a>

```go
func ResetTypeName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationPublicTypeVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationpublictypeversion"

cloudformationpublictypeversion.CloudformationPublicTypeVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationpublictypeversion"

cloudformationpublictypeversion.CloudformationPublicTypeVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationpublictypeversion"

cloudformationpublictypeversion.CloudformationPublicTypeVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationpublictypeversion"

cloudformationpublictypeversion.CloudformationPublicTypeVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudformationPublicTypeVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudformationPublicTypeVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudformationPublicTypeVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_public_type_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationPublicTypeVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicTypeArn">PublicTypeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publisherId">PublisherId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeVersionArn">TypeVersionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.logDeliveryBucketInput">LogDeliveryBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicVersionNumberInput">PublicVersionNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.logDeliveryBucket">LogDeliveryBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicVersionNumber">PublicVersionNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PublicTypeArn`<sup>Required</sup> <a name="PublicTypeArn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicTypeArn"></a>

```go
func PublicTypeArn() *string
```

- *Type:* *string

---

##### `PublisherId`<sup>Required</sup> <a name="PublisherId" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publisherId"></a>

```go
func PublisherId() *string
```

- *Type:* *string

---

##### `TypeVersionArn`<sup>Required</sup> <a name="TypeVersionArn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeVersionArn"></a>

```go
func TypeVersionArn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `LogDeliveryBucketInput`<sup>Optional</sup> <a name="LogDeliveryBucketInput" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.logDeliveryBucketInput"></a>

```go
func LogDeliveryBucketInput() *string
```

- *Type:* *string

---

##### `PublicVersionNumberInput`<sup>Optional</sup> <a name="PublicVersionNumberInput" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicVersionNumberInput"></a>

```go
func PublicVersionNumberInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `LogDeliveryBucket`<sup>Required</sup> <a name="LogDeliveryBucket" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.logDeliveryBucket"></a>

```go
func LogDeliveryBucket() *string
```

- *Type:* *string

---

##### `PublicVersionNumber`<sup>Required</sup> <a name="PublicVersionNumber" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.publicVersionNumber"></a>

```go
func PublicVersionNumber() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationPublicTypeVersionConfig <a name="CloudformationPublicTypeVersionConfig" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudformationpublictypeversion"

&cloudformationpublictypeversion.CloudformationPublicTypeVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Arn: *string,
	LogDeliveryBucket: *string,
	PublicVersionNumber: *string,
	Type: *string,
	TypeName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.arn">Arn</a></code> | <code>*string</code> | The Amazon Resource Number (ARN) of the extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.logDeliveryBucket">LogDeliveryBucket</a></code> | <code>*string</code> | A url to the S3 bucket where logs for the testType run will be available. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.publicVersionNumber">PublicVersionNumber</a></code> | <code>*string</code> | The version number of a public third-party extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.type">Type</a></code> | <code>*string</code> | The kind of extension. |
| <code><a href="#@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.typeName">TypeName</a></code> | <code>*string</code> | The name of the type being registered. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

The Amazon Resource Number (ARN) of the extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_public_type_version#arn CloudformationPublicTypeVersion#arn}

---

##### `LogDeliveryBucket`<sup>Optional</sup> <a name="LogDeliveryBucket" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.logDeliveryBucket"></a>

```go
LogDeliveryBucket *string
```

- *Type:* *string

A url to the S3 bucket where logs for the testType run will be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_public_type_version#log_delivery_bucket CloudformationPublicTypeVersion#log_delivery_bucket}

---

##### `PublicVersionNumber`<sup>Optional</sup> <a name="PublicVersionNumber" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.publicVersionNumber"></a>

```go
PublicVersionNumber *string
```

- *Type:* *string

The version number of a public third-party extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_public_type_version#public_version_number CloudformationPublicTypeVersion#public_version_number}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The kind of extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_public_type_version#type CloudformationPublicTypeVersion#type}

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktn/provider-awscc.cloudformationPublicTypeVersion.CloudformationPublicTypeVersionConfig.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_public_type_version#type_name CloudformationPublicTypeVersion#type_name}

---




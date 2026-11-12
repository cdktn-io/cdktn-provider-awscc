# `mgnReplicationConfigurationTemplate` Submodule <a name="`mgnReplicationConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MgnReplicationConfigurationTemplate <a name="MgnReplicationConfigurationTemplate" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template awscc_mgn_replication_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mgnreplicationconfigurationtemplate"

mgnreplicationconfigurationtemplate.NewMgnReplicationConfigurationTemplate(scope Construct, id *string, config MgnReplicationConfigurationTemplateConfig) MgnReplicationConfigurationTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig">MgnReplicationConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig">MgnReplicationConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetEbsEncryptionKeyArn">ResetEbsEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetInternetProtocol">ResetInternetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetStoreSnapshotOnLocalZone">ResetStoreSnapshotOnLocalZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetUseFipsEndpoint">ResetUseFipsEndpoint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEbsEncryptionKeyArn` <a name="ResetEbsEncryptionKeyArn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetEbsEncryptionKeyArn"></a>

```go
func ResetEbsEncryptionKeyArn()
```

##### `ResetInternetProtocol` <a name="ResetInternetProtocol" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetInternetProtocol"></a>

```go
func ResetInternetProtocol()
```

##### `ResetStoreSnapshotOnLocalZone` <a name="ResetStoreSnapshotOnLocalZone" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetStoreSnapshotOnLocalZone"></a>

```go
func ResetStoreSnapshotOnLocalZone()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUseFipsEndpoint` <a name="ResetUseFipsEndpoint" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.resetUseFipsEndpoint"></a>

```go
func ResetUseFipsEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MgnReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mgnreplicationconfigurationtemplate"

mgnreplicationconfigurationtemplate.MgnReplicationConfigurationTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mgnreplicationconfigurationtemplate"

mgnreplicationconfigurationtemplate.MgnReplicationConfigurationTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mgnreplicationconfigurationtemplate"

mgnreplicationconfigurationtemplate.MgnReplicationConfigurationTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mgnreplicationconfigurationtemplate"

mgnreplicationconfigurationtemplate.MgnReplicationConfigurationTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MgnReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MgnReplicationConfigurationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MgnReplicationConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MgnReplicationConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationConfigurationTemplateId">ReplicationConfigurationTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList">MgnReplicationConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroupInput">AssociateDefaultSecurityGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.bandwidthThrottlingInput">BandwidthThrottlingInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.createPublicIpInput">CreatePublicIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dataPlaneRoutingInput">DataPlaneRoutingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskTypeInput">DefaultLargeStagingDiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionInput">EbsEncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArnInput">EbsEncryptionKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.internetProtocolInput">InternetProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServerInstanceTypeInput">ReplicationServerInstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDsInput">ReplicationServersSecurityGroupsIDsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaSubnetIdInput">StagingAreaSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaTagsInput">StagingAreaTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZoneInput">StoreSnapshotOnLocalZoneInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useDedicatedReplicationServerInput">UseDedicatedReplicationServerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useFipsEndpointInput">UseFipsEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroup">AssociateDefaultSecurityGroup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.bandwidthThrottling">BandwidthThrottling</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.createPublicIp">CreatePublicIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dataPlaneRouting">DataPlaneRouting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskType">DefaultLargeStagingDiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryption">EbsEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArn">EbsEncryptionKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.internetProtocol">InternetProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServerInstanceType">ReplicationServerInstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs">ReplicationServersSecurityGroupsIDs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaSubnetId">StagingAreaSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaTags">StagingAreaTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZone">StoreSnapshotOnLocalZone</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useDedicatedReplicationServer">UseDedicatedReplicationServer</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useFipsEndpoint">UseFipsEndpoint</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ReplicationConfigurationTemplateId`<sup>Required</sup> <a name="ReplicationConfigurationTemplateId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationConfigurationTemplateId"></a>

```go
func ReplicationConfigurationTemplateId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tags"></a>

```go
func Tags() MgnReplicationConfigurationTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList">MgnReplicationConfigurationTemplateTagsList</a>

---

##### `AssociateDefaultSecurityGroupInput`<sup>Optional</sup> <a name="AssociateDefaultSecurityGroupInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroupInput"></a>

```go
func AssociateDefaultSecurityGroupInput() interface{}
```

- *Type:* interface{}

---

##### `BandwidthThrottlingInput`<sup>Optional</sup> <a name="BandwidthThrottlingInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.bandwidthThrottlingInput"></a>

```go
func BandwidthThrottlingInput() *f64
```

- *Type:* *f64

---

##### `CreatePublicIpInput`<sup>Optional</sup> <a name="CreatePublicIpInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.createPublicIpInput"></a>

```go
func CreatePublicIpInput() interface{}
```

- *Type:* interface{}

---

##### `DataPlaneRoutingInput`<sup>Optional</sup> <a name="DataPlaneRoutingInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dataPlaneRoutingInput"></a>

```go
func DataPlaneRoutingInput() *string
```

- *Type:* *string

---

##### `DefaultLargeStagingDiskTypeInput`<sup>Optional</sup> <a name="DefaultLargeStagingDiskTypeInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskTypeInput"></a>

```go
func DefaultLargeStagingDiskTypeInput() *string
```

- *Type:* *string

---

##### `EbsEncryptionInput`<sup>Optional</sup> <a name="EbsEncryptionInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionInput"></a>

```go
func EbsEncryptionInput() *string
```

- *Type:* *string

---

##### `EbsEncryptionKeyArnInput`<sup>Optional</sup> <a name="EbsEncryptionKeyArnInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArnInput"></a>

```go
func EbsEncryptionKeyArnInput() *string
```

- *Type:* *string

---

##### `InternetProtocolInput`<sup>Optional</sup> <a name="InternetProtocolInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.internetProtocolInput"></a>

```go
func InternetProtocolInput() *string
```

- *Type:* *string

---

##### `ReplicationServerInstanceTypeInput`<sup>Optional</sup> <a name="ReplicationServerInstanceTypeInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServerInstanceTypeInput"></a>

```go
func ReplicationServerInstanceTypeInput() *string
```

- *Type:* *string

---

##### `ReplicationServersSecurityGroupsIDsInput`<sup>Optional</sup> <a name="ReplicationServersSecurityGroupsIDsInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDsInput"></a>

```go
func ReplicationServersSecurityGroupsIDsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StagingAreaSubnetIdInput`<sup>Optional</sup> <a name="StagingAreaSubnetIdInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaSubnetIdInput"></a>

```go
func StagingAreaSubnetIdInput() *string
```

- *Type:* *string

---

##### `StagingAreaTagsInput`<sup>Optional</sup> <a name="StagingAreaTagsInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaTagsInput"></a>

```go
func StagingAreaTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `StoreSnapshotOnLocalZoneInput`<sup>Optional</sup> <a name="StoreSnapshotOnLocalZoneInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZoneInput"></a>

```go
func StoreSnapshotOnLocalZoneInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `UseDedicatedReplicationServerInput`<sup>Optional</sup> <a name="UseDedicatedReplicationServerInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useDedicatedReplicationServerInput"></a>

```go
func UseDedicatedReplicationServerInput() interface{}
```

- *Type:* interface{}

---

##### `UseFipsEndpointInput`<sup>Optional</sup> <a name="UseFipsEndpointInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useFipsEndpointInput"></a>

```go
func UseFipsEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `AssociateDefaultSecurityGroup`<sup>Required</sup> <a name="AssociateDefaultSecurityGroup" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroup"></a>

```go
func AssociateDefaultSecurityGroup() interface{}
```

- *Type:* interface{}

---

##### `BandwidthThrottling`<sup>Required</sup> <a name="BandwidthThrottling" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.bandwidthThrottling"></a>

```go
func BandwidthThrottling() *f64
```

- *Type:* *f64

---

##### `CreatePublicIp`<sup>Required</sup> <a name="CreatePublicIp" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.createPublicIp"></a>

```go
func CreatePublicIp() interface{}
```

- *Type:* interface{}

---

##### `DataPlaneRouting`<sup>Required</sup> <a name="DataPlaneRouting" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.dataPlaneRouting"></a>

```go
func DataPlaneRouting() *string
```

- *Type:* *string

---

##### `DefaultLargeStagingDiskType`<sup>Required</sup> <a name="DefaultLargeStagingDiskType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskType"></a>

```go
func DefaultLargeStagingDiskType() *string
```

- *Type:* *string

---

##### `EbsEncryption`<sup>Required</sup> <a name="EbsEncryption" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryption"></a>

```go
func EbsEncryption() *string
```

- *Type:* *string

---

##### `EbsEncryptionKeyArn`<sup>Required</sup> <a name="EbsEncryptionKeyArn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArn"></a>

```go
func EbsEncryptionKeyArn() *string
```

- *Type:* *string

---

##### `InternetProtocol`<sup>Required</sup> <a name="InternetProtocol" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.internetProtocol"></a>

```go
func InternetProtocol() *string
```

- *Type:* *string

---

##### `ReplicationServerInstanceType`<sup>Required</sup> <a name="ReplicationServerInstanceType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServerInstanceType"></a>

```go
func ReplicationServerInstanceType() *string
```

- *Type:* *string

---

##### `ReplicationServersSecurityGroupsIDs`<sup>Required</sup> <a name="ReplicationServersSecurityGroupsIDs" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs"></a>

```go
func ReplicationServersSecurityGroupsIDs() *[]*string
```

- *Type:* *[]*string

---

##### `StagingAreaSubnetId`<sup>Required</sup> <a name="StagingAreaSubnetId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaSubnetId"></a>

```go
func StagingAreaSubnetId() *string
```

- *Type:* *string

---

##### `StagingAreaTags`<sup>Required</sup> <a name="StagingAreaTags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.stagingAreaTags"></a>

```go
func StagingAreaTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `StoreSnapshotOnLocalZone`<sup>Required</sup> <a name="StoreSnapshotOnLocalZone" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZone"></a>

```go
func StoreSnapshotOnLocalZone() interface{}
```

- *Type:* interface{}

---

##### `UseDedicatedReplicationServer`<sup>Required</sup> <a name="UseDedicatedReplicationServer" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useDedicatedReplicationServer"></a>

```go
func UseDedicatedReplicationServer() interface{}
```

- *Type:* interface{}

---

##### `UseFipsEndpoint`<sup>Required</sup> <a name="UseFipsEndpoint" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.useFipsEndpoint"></a>

```go
func UseFipsEndpoint() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MgnReplicationConfigurationTemplateConfig <a name="MgnReplicationConfigurationTemplateConfig" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mgnreplicationconfigurationtemplate"

&mgnreplicationconfigurationtemplate.MgnReplicationConfigurationTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AssociateDefaultSecurityGroup: interface{},
	BandwidthThrottling: *f64,
	CreatePublicIp: interface{},
	DataPlaneRouting: *string,
	DefaultLargeStagingDiskType: *string,
	EbsEncryption: *string,
	ReplicationServerInstanceType: *string,
	ReplicationServersSecurityGroupsIDs: *[]*string,
	StagingAreaSubnetId: *string,
	StagingAreaTags: *map[string]*string,
	UseDedicatedReplicationServer: interface{},
	EbsEncryptionKeyArn: *string,
	InternetProtocol: *string,
	StoreSnapshotOnLocalZone: interface{},
	Tags: interface{},
	UseFipsEndpoint: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.associateDefaultSecurityGroup">AssociateDefaultSecurityGroup</a></code> | <code>interface{}</code> | Whether to associate the default Application Migration Service Security Group with the Replication Configuration Template. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.bandwidthThrottling">BandwidthThrottling</a></code> | <code>*f64</code> | Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.createPublicIp">CreatePublicIp</a></code> | <code>interface{}</code> | Whether to create a Public IP for the Recovery Instance by default. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.dataPlaneRouting">DataPlaneRouting</a></code> | <code>*string</code> | The data plane routing mechanism that will be used for replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.defaultLargeStagingDiskType">DefaultLargeStagingDiskType</a></code> | <code>*string</code> | The Staging Disk EBS volume type to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.ebsEncryption">EbsEncryption</a></code> | <code>*string</code> | The type of EBS encryption to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.replicationServerInstanceType">ReplicationServerInstanceType</a></code> | <code>*string</code> | The instance type to be used for the replication server. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.replicationServersSecurityGroupsIDs">ReplicationServersSecurityGroupsIDs</a></code> | <code>*[]*string</code> | The security group IDs that will be used by the replication server. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.stagingAreaSubnetId">StagingAreaSubnetId</a></code> | <code>*string</code> | The subnet to be used by the replication staging area. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.stagingAreaTags">StagingAreaTags</a></code> | <code>*map[string]*string</code> | A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.useDedicatedReplicationServer">UseDedicatedReplicationServer</a></code> | <code>interface{}</code> | Whether to use a dedicated Replication Server in the replication staging area. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.ebsEncryptionKeyArn">EbsEncryptionKeyArn</a></code> | <code>*string</code> | The ARN of the EBS encryption key to be used during replication. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.internetProtocol">InternetProtocol</a></code> | <code>*string</code> | Which internet protocol to use for replication of data. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.storeSnapshotOnLocalZone">StoreSnapshotOnLocalZone</a></code> | <code>interface{}</code> | Whether to store the Snapshot in the Local Zone of the replication staging area subnet. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A set of tags to be associated with the Replication Configuration Template resource. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.useFipsEndpoint">UseFipsEndpoint</a></code> | <code>interface{}</code> | Whether to use a FIPS endpoint when initiating the agent connection to the Application Migration Service service. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociateDefaultSecurityGroup`<sup>Required</sup> <a name="AssociateDefaultSecurityGroup" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.associateDefaultSecurityGroup"></a>

```go
AssociateDefaultSecurityGroup interface{}
```

- *Type:* interface{}

Whether to associate the default Application Migration Service Security Group with the Replication Configuration Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#associate_default_security_group MgnReplicationConfigurationTemplate#associate_default_security_group}

---

##### `BandwidthThrottling`<sup>Required</sup> <a name="BandwidthThrottling" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.bandwidthThrottling"></a>

```go
BandwidthThrottling *f64
```

- *Type:* *f64

Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#bandwidth_throttling MgnReplicationConfigurationTemplate#bandwidth_throttling}

---

##### `CreatePublicIp`<sup>Required</sup> <a name="CreatePublicIp" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.createPublicIp"></a>

```go
CreatePublicIp interface{}
```

- *Type:* interface{}

Whether to create a Public IP for the Recovery Instance by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#create_public_ip MgnReplicationConfigurationTemplate#create_public_ip}

---

##### `DataPlaneRouting`<sup>Required</sup> <a name="DataPlaneRouting" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.dataPlaneRouting"></a>

```go
DataPlaneRouting *string
```

- *Type:* *string

The data plane routing mechanism that will be used for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#data_plane_routing MgnReplicationConfigurationTemplate#data_plane_routing}

---

##### `DefaultLargeStagingDiskType`<sup>Required</sup> <a name="DefaultLargeStagingDiskType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.defaultLargeStagingDiskType"></a>

```go
DefaultLargeStagingDiskType *string
```

- *Type:* *string

The Staging Disk EBS volume type to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#default_large_staging_disk_type MgnReplicationConfigurationTemplate#default_large_staging_disk_type}

---

##### `EbsEncryption`<sup>Required</sup> <a name="EbsEncryption" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.ebsEncryption"></a>

```go
EbsEncryption *string
```

- *Type:* *string

The type of EBS encryption to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#ebs_encryption MgnReplicationConfigurationTemplate#ebs_encryption}

---

##### `ReplicationServerInstanceType`<sup>Required</sup> <a name="ReplicationServerInstanceType" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.replicationServerInstanceType"></a>

```go
ReplicationServerInstanceType *string
```

- *Type:* *string

The instance type to be used for the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#replication_server_instance_type MgnReplicationConfigurationTemplate#replication_server_instance_type}

---

##### `ReplicationServersSecurityGroupsIDs`<sup>Required</sup> <a name="ReplicationServersSecurityGroupsIDs" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.replicationServersSecurityGroupsIDs"></a>

```go
ReplicationServersSecurityGroupsIDs *[]*string
```

- *Type:* *[]*string

The security group IDs that will be used by the replication server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#replication_servers_security_groups_i_ds MgnReplicationConfigurationTemplate#replication_servers_security_groups_i_ds}

---

##### `StagingAreaSubnetId`<sup>Required</sup> <a name="StagingAreaSubnetId" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.stagingAreaSubnetId"></a>

```go
StagingAreaSubnetId *string
```

- *Type:* *string

The subnet to be used by the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#staging_area_subnet_id MgnReplicationConfigurationTemplate#staging_area_subnet_id}

---

##### `StagingAreaTags`<sup>Required</sup> <a name="StagingAreaTags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.stagingAreaTags"></a>

```go
StagingAreaTags *map[string]*string
```

- *Type:* *map[string]*string

A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#staging_area_tags MgnReplicationConfigurationTemplate#staging_area_tags}

---

##### `UseDedicatedReplicationServer`<sup>Required</sup> <a name="UseDedicatedReplicationServer" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.useDedicatedReplicationServer"></a>

```go
UseDedicatedReplicationServer interface{}
```

- *Type:* interface{}

Whether to use a dedicated Replication Server in the replication staging area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#use_dedicated_replication_server MgnReplicationConfigurationTemplate#use_dedicated_replication_server}

---

##### `EbsEncryptionKeyArn`<sup>Optional</sup> <a name="EbsEncryptionKeyArn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.ebsEncryptionKeyArn"></a>

```go
EbsEncryptionKeyArn *string
```

- *Type:* *string

The ARN of the EBS encryption key to be used during replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#ebs_encryption_key_arn MgnReplicationConfigurationTemplate#ebs_encryption_key_arn}

---

##### `InternetProtocol`<sup>Optional</sup> <a name="InternetProtocol" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.internetProtocol"></a>

```go
InternetProtocol *string
```

- *Type:* *string

Which internet protocol to use for replication of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#internet_protocol MgnReplicationConfigurationTemplate#internet_protocol}

---

##### `StoreSnapshotOnLocalZone`<sup>Optional</sup> <a name="StoreSnapshotOnLocalZone" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.storeSnapshotOnLocalZone"></a>

```go
StoreSnapshotOnLocalZone interface{}
```

- *Type:* interface{}

Whether to store the Snapshot in the Local Zone of the replication staging area subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#store_snapshot_on_local_zone MgnReplicationConfigurationTemplate#store_snapshot_on_local_zone}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A set of tags to be associated with the Replication Configuration Template resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#tags MgnReplicationConfigurationTemplate#tags}

---

##### `UseFipsEndpoint`<sup>Optional</sup> <a name="UseFipsEndpoint" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateConfig.property.useFipsEndpoint"></a>

```go
UseFipsEndpoint interface{}
```

- *Type:* interface{}

Whether to use a FIPS endpoint when initiating the agent connection to the Application Migration Service service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#use_fips_endpoint MgnReplicationConfigurationTemplate#use_fips_endpoint}

---

### MgnReplicationConfigurationTemplateTags <a name="MgnReplicationConfigurationTemplateTags" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mgnreplicationconfigurationtemplate"

&mgnreplicationconfigurationtemplate.MgnReplicationConfigurationTemplateTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#key MgnReplicationConfigurationTemplate#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/mgn_replication_configuration_template#value MgnReplicationConfigurationTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MgnReplicationConfigurationTemplateTagsList <a name="MgnReplicationConfigurationTemplateTagsList" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mgnreplicationconfigurationtemplate"

mgnreplicationconfigurationtemplate.NewMgnReplicationConfigurationTemplateTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MgnReplicationConfigurationTemplateTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.get"></a>

```go
func Get(index *f64) MgnReplicationConfigurationTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MgnReplicationConfigurationTemplateTagsOutputReference <a name="MgnReplicationConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/mgnreplicationconfigurationtemplate"

mgnreplicationconfigurationtemplate.NewMgnReplicationConfigurationTemplateTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MgnReplicationConfigurationTemplateTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mgnReplicationConfigurationTemplate.MgnReplicationConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




# `eksCapability` Submodule <a name="`eksCapability` Submodule" id="@cdktn/provider-awscc.eksCapability"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksCapability <a name="EksCapability" id="@cdktn/provider-awscc.eksCapability.EksCapability"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability awscc_eks_capability}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

ekscapability.NewEksCapability(scope Construct, id *string, config EksCapabilityConfig) EksCapability
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig">EksCapabilityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.eksCapability.EksCapability.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig">EksCapabilityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCapability.EksCapability.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.eksCapability.EksCapability.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eksCapability.EksCapability.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.eksCapability.EksCapability.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eksCapability.EksCapability.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCapability.EksCapability.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.eksCapability.EksCapability.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.eksCapability.EksCapability.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.eksCapability.EksCapability.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.eksCapability.EksCapability.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.eksCapability.EksCapability.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.eksCapability.EksCapability.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.eksCapability.EksCapability.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eksCapability.EksCapability.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.eksCapability.EksCapability.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.eksCapability.EksCapability.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksCapability.EksCapability.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksCapability.EksCapability.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapability.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.eksCapability.EksCapability.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksCapability.EksCapability.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.eksCapability.EksCapability.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eksCapability.EksCapability.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eksCapability.EksCapability.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.eksCapability.EksCapability.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksCapability.EksCapability.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.eksCapability.EksCapability.putConfiguration"></a>

```go
func PutConfiguration(value EksCapabilityConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCapability.EksCapability.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.eksCapability.EksCapability.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCapability.EksCapability.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-awscc.eksCapability.EksCapability.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.eksCapability.EksCapability.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EksCapability resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.eksCapability.EksCapability.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

ekscapability.EksCapability_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksCapability.EksCapability.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.eksCapability.EksCapability.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

ekscapability.EksCapability_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksCapability.EksCapability.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.eksCapability.EksCapability.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

ekscapability.EksCapability_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksCapability.EksCapability.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.eksCapability.EksCapability.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

ekscapability.EksCapability_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EksCapability resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eksCapability.EksCapability.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.eksCapability.EksCapability.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EksCapability to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.eksCapability.EksCapability.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EksCapability that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksCapability.EksCapability.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EksCapability to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference">EksCapabilityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList">EksCapabilityTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.capabilityNameInput">CapabilityNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.configurationInput">ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.deletePropagationPolicyInput">DeletePropagationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.capabilityName">CapabilityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.deletePropagationPolicy">DeletePropagationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.configuration"></a>

```go
func Configuration() EksCapabilityConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference">EksCapabilityConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.tags"></a>

```go
func Tags() EksCapabilityTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList">EksCapabilityTagsList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `CapabilityNameInput`<sup>Optional</sup> <a name="CapabilityNameInput" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.capabilityNameInput"></a>

```go
func CapabilityNameInput() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.configurationInput"></a>

```go
func ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DeletePropagationPolicyInput`<sup>Optional</sup> <a name="DeletePropagationPolicyInput" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.deletePropagationPolicyInput"></a>

```go
func DeletePropagationPolicyInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CapabilityName`<sup>Required</sup> <a name="CapabilityName" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.capabilityName"></a>

```go
func CapabilityName() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `DeletePropagationPolicy`<sup>Required</sup> <a name="DeletePropagationPolicy" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.deletePropagationPolicy"></a>

```go
func DeletePropagationPolicy() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapability.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.eksCapability.EksCapability.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EksCapabilityConfig <a name="EksCapabilityConfig" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

&ekscapability.EksCapabilityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CapabilityName: *string,
	ClusterName: *string,
	DeletePropagationPolicy: *string,
	RoleArn: *string,
	Type: *string,
	Configuration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eksCapability.EksCapabilityConfiguration,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.capabilityName">CapabilityName</a></code> | <code>*string</code> | A unique name for the capability. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | The name of the EKS cluster where you want to create the capability. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.deletePropagationPolicy">DeletePropagationPolicy</a></code> | <code>*string</code> | Specifies how Kubernetes resources managed by the capability should be handled when the capability is deleted. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the IAM role that the capability uses to interact with AWS services. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.type">Type</a></code> | <code>*string</code> | The type of capability to create. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a></code> | The configuration settings for the capability. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapabilityName`<sup>Required</sup> <a name="CapabilityName" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.capabilityName"></a>

```go
CapabilityName *string
```

- *Type:* *string

A unique name for the capability.

The name must be unique within your cluster and can contain alphanumeric characters, hyphens, and underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#capability_name EksCapability#capability_name}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

The name of the EKS cluster where you want to create the capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#cluster_name EksCapability#cluster_name}

---

##### `DeletePropagationPolicy`<sup>Required</sup> <a name="DeletePropagationPolicy" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.deletePropagationPolicy"></a>

```go
DeletePropagationPolicy *string
```

- *Type:* *string

Specifies how Kubernetes resources managed by the capability should be handled when the capability is deleted.

Currently, the only supported value is RETAIN which retains all Kubernetes resources managed by the capability when the capability is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#delete_propagation_policy EksCapability#delete_propagation_policy}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the IAM role that the capability uses to interact with AWS services.

This role must have a trust policy that allows the EKS service principal to assume it, and it must have the necessary permissions for the capability type you're creating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#role_arn EksCapability#role_arn}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of capability to create.

Valid values are: ACK (AWS Controllers for Kubernetes, which lets you manage AWS resources directly from Kubernetes), ARGOCD (Argo CD for GitOps-based continuous delivery), or KRO (Kube Resource Orchestrator for composing and managing custom Kubernetes resources).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#type EksCapability#type}

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.configuration"></a>

```go
Configuration EksCapabilityConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration">EksCapabilityConfiguration</a>

The configuration settings for the capability.

The structure of this object varies depending on the capability type. For Argo CD capabilities, you can configure IAM Identity Center integration, RBAC role mappings, and network access settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#configuration EksCapability#configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#tags EksCapability#tags}

---

### EksCapabilityConfiguration <a name="EksCapabilityConfiguration" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

&ekscapability.EksCapabilityConfiguration {
	Ack: *string,
	ArgoCd: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eksCapability.EksCapabilityConfigurationArgoCd,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration.property.ack">Ack</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#ack EksCapability#ack}. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration.property.argoCd">ArgoCd</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a></code> | Configuration settings for an Argo CD capability. |

---

##### `Ack`<sup>Optional</sup> <a name="Ack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration.property.ack"></a>

```go
Ack *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#ack EksCapability#ack}.

---

##### `ArgoCd`<sup>Optional</sup> <a name="ArgoCd" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfiguration.property.argoCd"></a>

```go
ArgoCd EksCapabilityConfigurationArgoCd
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>

Configuration settings for an Argo CD capability.

This includes the Kubernetes namespace, IAM Identity Center integration, RBAC role mappings, and network access configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#argo_cd EksCapability#argo_cd}

---

### EksCapabilityConfigurationArgoCd <a name="EksCapabilityConfigurationArgoCd" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

&ekscapability.EksCapabilityConfigurationArgoCd {
	AwsIdc: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc,
	Namespace: *string,
	NetworkAccess: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess,
	RbacRoleMappings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd.property.awsIdc">AwsIdc</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a></code> | Configuration for integrating Argo CD with IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd.property.namespace">Namespace</a></code> | <code>*string</code> | The Kubernetes namespace where Argo CD resources will be created. If not specified, the default namespace is used. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd.property.networkAccess">NetworkAccess</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a></code> | Configuration for network access to the Argo CD capability's managed API server endpoint. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd.property.rbacRoleMappings">RbacRoleMappings</a></code> | <code>interface{}</code> | A list of role mappings that define which IAM Identity Center users or groups have which Argo CD roles. |

---

##### `AwsIdc`<sup>Optional</sup> <a name="AwsIdc" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd.property.awsIdc"></a>

```go
AwsIdc EksCapabilityConfigurationArgoCdAwsIdc
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>

Configuration for integrating Argo CD with IAM Identity Center.

This allows you to use your organization's identity provider for authentication to Argo CD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#aws_idc EksCapability#aws_idc}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The Kubernetes namespace where Argo CD resources will be created. If not specified, the default namespace is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#namespace EksCapability#namespace}

---

##### `NetworkAccess`<sup>Optional</sup> <a name="NetworkAccess" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd.property.networkAccess"></a>

```go
NetworkAccess EksCapabilityConfigurationArgoCdNetworkAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>

Configuration for network access to the Argo CD capability's managed API server endpoint.

By default, the Argo CD server is accessible via a public endpoint. You can optionally specify one or more VPC endpoint IDs to enable private connectivity from your VPCs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#network_access EksCapability#network_access}

---

##### `RbacRoleMappings`<sup>Optional</sup> <a name="RbacRoleMappings" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd.property.rbacRoleMappings"></a>

```go
RbacRoleMappings interface{}
```

- *Type:* interface{}

A list of role mappings that define which IAM Identity Center users or groups have which Argo CD roles.

Each mapping associates an Argo CD role (ADMIN, EDITOR, or VIEWER) with one or more IAM Identity Center identities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#rbac_role_mappings EksCapability#rbac_role_mappings}

---

### EksCapabilityConfigurationArgoCdAwsIdc <a name="EksCapabilityConfigurationArgoCdAwsIdc" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

&ekscapability.EksCapabilityConfigurationArgoCdAwsIdc {
	IdcInstanceArn: *string,
	IdcRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>*string</code> | The ARN of the IAM Identity Center instance to use for authentication. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.property.idcRegion">IdcRegion</a></code> | <code>*string</code> | The Region where your IAM Identity Center instance is located. |

---

##### `IdcInstanceArn`<sup>Optional</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.property.idcInstanceArn"></a>

```go
IdcInstanceArn *string
```

- *Type:* *string

The ARN of the IAM Identity Center instance to use for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#idc_instance_arn EksCapability#idc_instance_arn}

---

##### `IdcRegion`<sup>Optional</sup> <a name="IdcRegion" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc.property.idcRegion"></a>

```go
IdcRegion *string
```

- *Type:* *string

The Region where your IAM Identity Center instance is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#idc_region EksCapability#idc_region}

---

### EksCapabilityConfigurationArgoCdNetworkAccess <a name="EksCapabilityConfigurationArgoCdNetworkAccess" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

&ekscapability.EksCapabilityConfigurationArgoCdNetworkAccess {
	VpceIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess.property.vpceIds">VpceIds</a></code> | <code>*[]*string</code> | A list of VPC endpoint IDs to associate with the managed Argo CD API server endpoint. |

---

##### `VpceIds`<sup>Optional</sup> <a name="VpceIds" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess.property.vpceIds"></a>

```go
VpceIds *[]*string
```

- *Type:* *[]*string

A list of VPC endpoint IDs to associate with the managed Argo CD API server endpoint.

Each VPC endpoint provides private connectivity from a specific VPC to the Argo CD server. You can specify multiple VPC endpoint IDs to enable access from multiple VPCs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#vpce_ids EksCapability#vpce_ids}

---

### EksCapabilityConfigurationArgoCdRbacRoleMappings <a name="EksCapabilityConfigurationArgoCdRbacRoleMappings" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

&ekscapability.EksCapabilityConfigurationArgoCdRbacRoleMappings {
	Identities: interface{},
	Role: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings.property.identities">Identities</a></code> | <code>interface{}</code> | A list of IAM Identity Center identities (users or groups) that should be assigned this Argo CD role. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings.property.role">Role</a></code> | <code>*string</code> | The Argo CD role to assign. |

---

##### `Identities`<sup>Optional</sup> <a name="Identities" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings.property.identities"></a>

```go
Identities interface{}
```

- *Type:* interface{}

A list of IAM Identity Center identities (users or groups) that should be assigned this Argo CD role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#identities EksCapability#identities}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappings.property.role"></a>

```go
Role *string
```

- *Type:* *string

The Argo CD role to assign.

Valid values are: ADMIN (full administrative access to Argo CD), EDITOR (edit access to Argo CD resources), or VIEWER (read-only access to Argo CD resources).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#role EksCapability#role}

---

### EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

&ekscapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities {
	Id: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities.property.id">Id</a></code> | <code>*string</code> | The unique identifier of the IAM Identity Center user or group. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities.property.type">Type</a></code> | <code>*string</code> | The type of identity. Valid values are SSO_USER or SSO_GROUP. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique identifier of the IAM Identity Center user or group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#id EksCapability#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentities.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of identity. Valid values are SSO_USER or SSO_GROUP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#type EksCapability#type}

---

### EksCapabilityTags <a name="EksCapabilityTags" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

&ekscapability.EksCapabilityTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#key EksCapability#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/eks_capability#value EksCapability#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EksCapabilityConfigurationArgoCdAwsIdcOutputReference <a name="EksCapabilityConfigurationArgoCdAwsIdcOutputReference" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

ekscapability.NewEksCapabilityConfigurationArgoCdAwsIdcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EksCapabilityConfigurationArgoCdAwsIdcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resetIdcInstanceArn">ResetIdcInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resetIdcRegion">ResetIdcRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdcInstanceArn` <a name="ResetIdcInstanceArn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resetIdcInstanceArn"></a>

```go
func ResetIdcInstanceArn()
```

##### `ResetIdcRegion` <a name="ResetIdcRegion" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.resetIdcRegion"></a>

```go
func ResetIdcRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcManagedApplicationArn">IdcManagedApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArnInput">IdcInstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegionInput">IdcRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegion">IdcRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdcManagedApplicationArn`<sup>Required</sup> <a name="IdcManagedApplicationArn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcManagedApplicationArn"></a>

```go
func IdcManagedApplicationArn() *string
```

- *Type:* *string

---

##### `IdcInstanceArnInput`<sup>Optional</sup> <a name="IdcInstanceArnInput" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArnInput"></a>

```go
func IdcInstanceArnInput() *string
```

- *Type:* *string

---

##### `IdcRegionInput`<sup>Optional</sup> <a name="IdcRegionInput" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegionInput"></a>

```go
func IdcRegionInput() *string
```

- *Type:* *string

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcInstanceArn"></a>

```go
func IdcInstanceArn() *string
```

- *Type:* *string

---

##### `IdcRegion`<sup>Required</sup> <a name="IdcRegion" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.idcRegion"></a>

```go
func IdcRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EksCapabilityConfigurationArgoCdNetworkAccessOutputReference <a name="EksCapabilityConfigurationArgoCdNetworkAccessOutputReference" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

ekscapability.NewEksCapabilityConfigurationArgoCdNetworkAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EksCapabilityConfigurationArgoCdNetworkAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resetVpceIds">ResetVpceIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpceIds` <a name="ResetVpceIds" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.resetVpceIds"></a>

```go
func ResetVpceIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIdsInput">VpceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIds">VpceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpceIdsInput`<sup>Optional</sup> <a name="VpceIdsInput" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIdsInput"></a>

```go
func VpceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpceIds`<sup>Required</sup> <a name="VpceIds" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.vpceIds"></a>

```go
func VpceIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EksCapabilityConfigurationArgoCdOutputReference <a name="EksCapabilityConfigurationArgoCdOutputReference" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

ekscapability.NewEksCapabilityConfigurationArgoCdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EksCapabilityConfigurationArgoCdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putAwsIdc">PutAwsIdc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putNetworkAccess">PutNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putRbacRoleMappings">PutRbacRoleMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetAwsIdc">ResetAwsIdc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetNetworkAccess">ResetNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetRbacRoleMappings">ResetRbacRoleMappings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsIdc` <a name="PutAwsIdc" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putAwsIdc"></a>

```go
func PutAwsIdc(value EksCapabilityConfigurationArgoCdAwsIdc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putAwsIdc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdc">EksCapabilityConfigurationArgoCdAwsIdc</a>

---

##### `PutNetworkAccess` <a name="PutNetworkAccess" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putNetworkAccess"></a>

```go
func PutNetworkAccess(value EksCapabilityConfigurationArgoCdNetworkAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putNetworkAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccess">EksCapabilityConfigurationArgoCdNetworkAccess</a>

---

##### `PutRbacRoleMappings` <a name="PutRbacRoleMappings" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putRbacRoleMappings"></a>

```go
func PutRbacRoleMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.putRbacRoleMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAwsIdc` <a name="ResetAwsIdc" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetAwsIdc"></a>

```go
func ResetAwsIdc()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNetworkAccess` <a name="ResetNetworkAccess" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetNetworkAccess"></a>

```go
func ResetNetworkAccess()
```

##### `ResetRbacRoleMappings` <a name="ResetRbacRoleMappings" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.resetRbacRoleMappings"></a>

```go
func ResetRbacRoleMappings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.awsIdc">AwsIdc</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference">EksCapabilityConfigurationArgoCdAwsIdcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.networkAccess">NetworkAccess</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference">EksCapabilityConfigurationArgoCdNetworkAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMappings">RbacRoleMappings</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList">EksCapabilityConfigurationArgoCdRbacRoleMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.serverUrl">ServerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.awsIdcInput">AwsIdcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.networkAccessInput">NetworkAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMappingsInput">RbacRoleMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsIdc`<sup>Required</sup> <a name="AwsIdc" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.awsIdc"></a>

```go
func AwsIdc() EksCapabilityConfigurationArgoCdAwsIdcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdAwsIdcOutputReference">EksCapabilityConfigurationArgoCdAwsIdcOutputReference</a>

---

##### `NetworkAccess`<sup>Required</sup> <a name="NetworkAccess" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.networkAccess"></a>

```go
func NetworkAccess() EksCapabilityConfigurationArgoCdNetworkAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdNetworkAccessOutputReference">EksCapabilityConfigurationArgoCdNetworkAccessOutputReference</a>

---

##### `RbacRoleMappings`<sup>Required</sup> <a name="RbacRoleMappings" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMappings"></a>

```go
func RbacRoleMappings() EksCapabilityConfigurationArgoCdRbacRoleMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList">EksCapabilityConfigurationArgoCdRbacRoleMappingsList</a>

---

##### `ServerUrl`<sup>Required</sup> <a name="ServerUrl" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.serverUrl"></a>

```go
func ServerUrl() *string
```

- *Type:* *string

---

##### `AwsIdcInput`<sup>Optional</sup> <a name="AwsIdcInput" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.awsIdcInput"></a>

```go
func AwsIdcInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NetworkAccessInput`<sup>Optional</sup> <a name="NetworkAccessInput" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.networkAccessInput"></a>

```go
func NetworkAccessInput() interface{}
```

- *Type:* interface{}

---

##### `RbacRoleMappingsInput`<sup>Optional</sup> <a name="RbacRoleMappingsInput" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.rbacRoleMappingsInput"></a>

```go
func RbacRoleMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

ekscapability.NewEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.get"></a>

```go
func Get(index *f64) EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

ekscapability.NewEksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EksCapabilityConfigurationArgoCdRbacRoleMappingsList <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingsList" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

ekscapability.NewEksCapabilityConfigurationArgoCdRbacRoleMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EksCapabilityConfigurationArgoCdRbacRoleMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.get"></a>

```go
func Get(index *f64) EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference <a name="EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

ekscapability.NewEksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.putIdentities">PutIdentities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.resetIdentities">ResetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIdentities` <a name="PutIdentities" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.putIdentities"></a>

```go
func PutIdentities(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.putIdentities.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIdentities` <a name="ResetIdentities" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.resetIdentities"></a>

```go
func ResetIdentities()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.resetRole"></a>

```go
func ResetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.identities">Identities</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList">EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.identitiesInput">IdentitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Identities`<sup>Required</sup> <a name="Identities" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.identities"></a>

```go
func Identities() EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList">EksCapabilityConfigurationArgoCdRbacRoleMappingsIdentitiesList</a>

---

##### `IdentitiesInput`<sup>Optional</sup> <a name="IdentitiesInput" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.identitiesInput"></a>

```go
func IdentitiesInput() interface{}
```

- *Type:* interface{}

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdRbacRoleMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EksCapabilityConfigurationOutputReference <a name="EksCapabilityConfigurationOutputReference" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

ekscapability.NewEksCapabilityConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EksCapabilityConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.putArgoCd">PutArgoCd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.resetAck">ResetAck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.resetArgoCd">ResetArgoCd</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutArgoCd` <a name="PutArgoCd" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.putArgoCd"></a>

```go
func PutArgoCd(value EksCapabilityConfigurationArgoCd)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.putArgoCd.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCd">EksCapabilityConfigurationArgoCd</a>

---

##### `ResetAck` <a name="ResetAck" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.resetAck"></a>

```go
func ResetAck()
```

##### `ResetArgoCd` <a name="ResetArgoCd" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.resetArgoCd"></a>

```go
func ResetArgoCd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.argoCd">ArgoCd</a></code> | <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference">EksCapabilityConfigurationArgoCdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.ackInput">AckInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.argoCdInput">ArgoCdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.ack">Ack</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArgoCd`<sup>Required</sup> <a name="ArgoCd" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.argoCd"></a>

```go
func ArgoCd() EksCapabilityConfigurationArgoCdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationArgoCdOutputReference">EksCapabilityConfigurationArgoCdOutputReference</a>

---

##### `AckInput`<sup>Optional</sup> <a name="AckInput" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.ackInput"></a>

```go
func AckInput() *string
```

- *Type:* *string

---

##### `ArgoCdInput`<sup>Optional</sup> <a name="ArgoCdInput" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.argoCdInput"></a>

```go
func ArgoCdInput() interface{}
```

- *Type:* interface{}

---

##### `Ack`<sup>Required</sup> <a name="Ack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.ack"></a>

```go
func Ack() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCapability.EksCapabilityConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EksCapabilityTagsList <a name="EksCapabilityTagsList" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

ekscapability.NewEksCapabilityTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EksCapabilityTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.get"></a>

```go
func Get(index *f64) EksCapabilityTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EksCapabilityTagsOutputReference <a name="EksCapabilityTagsOutputReference" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ekscapability"

ekscapability.NewEksCapabilityTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EksCapabilityTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksCapability.EksCapabilityTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




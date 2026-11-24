# `opensearchmemorySpace` Submodule <a name="`opensearchmemorySpace` Submodule" id="@cdktn/provider-awscc.opensearchmemorySpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchmemorySpace <a name="OpensearchmemorySpace" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space awscc_opensearchmemory_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/opensearchmemoryspace"

opensearchmemoryspace.NewOpensearchmemorySpace(scope Construct, id *string, config OpensearchmemorySpaceConfig) OpensearchmemorySpace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig">OpensearchmemorySpaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig">OpensearchmemorySpaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putMemoryStrategies">PutMemoryStrategies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetEventExpiryDays">ResetEventExpiryDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetExtractionModelId">ResetExtractionModelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetMemoryExpiryDays">ResetMemoryExpiryDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetMemoryStrategies">ResetMemoryStrategies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value OpensearchmemorySpaceEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a>

---

##### `PutMemoryStrategies` <a name="PutMemoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putMemoryStrategies"></a>

```go
func PutMemoryStrategies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putMemoryStrategies.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```

##### `ResetEventExpiryDays` <a name="ResetEventExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetEventExpiryDays"></a>

```go
func ResetEventExpiryDays()
```

##### `ResetExtractionModelId` <a name="ResetExtractionModelId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetExtractionModelId"></a>

```go
func ResetExtractionModelId()
```

##### `ResetMemoryExpiryDays` <a name="ResetMemoryExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetMemoryExpiryDays"></a>

```go
func ResetMemoryExpiryDays()
```

##### `ResetMemoryStrategies` <a name="ResetMemoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetMemoryStrategies"></a>

```go
func ResetMemoryStrategies()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchmemorySpace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/opensearchmemoryspace"

opensearchmemoryspace.OpensearchmemorySpace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/opensearchmemoryspace"

opensearchmemoryspace.OpensearchmemorySpace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/opensearchmemoryspace"

opensearchmemoryspace.OpensearchmemorySpace_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/opensearchmemoryspace"

opensearchmemoryspace.OpensearchmemorySpace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OpensearchmemorySpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpensearchmemorySpace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpensearchmemorySpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchmemorySpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference">OpensearchmemorySpaceEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryStrategies">MemoryStrategies</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList">OpensearchmemorySpaceMemoryStrategiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.spaceId">SpaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList">OpensearchmemorySpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.eventExpiryDaysInput">EventExpiryDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.extractionModelIdInput">ExtractionModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryExpiryDaysInput">MemoryExpiryDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryStrategiesInput">MemoryStrategiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.eventExpiryDays">EventExpiryDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.extractionModelId">ExtractionModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryExpiryDays">MemoryExpiryDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() OpensearchmemorySpaceEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference">OpensearchmemorySpaceEncryptionConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MemoryStrategies`<sup>Required</sup> <a name="MemoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryStrategies"></a>

```go
func MemoryStrategies() OpensearchmemorySpaceMemoryStrategiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList">OpensearchmemorySpaceMemoryStrategiesList</a>

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.spaceId"></a>

```go
func SpaceId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tags"></a>

```go
func Tags() OpensearchmemorySpaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList">OpensearchmemorySpaceTagsList</a>

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EventExpiryDaysInput`<sup>Optional</sup> <a name="EventExpiryDaysInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.eventExpiryDaysInput"></a>

```go
func EventExpiryDaysInput() *f64
```

- *Type:* *f64

---

##### `ExtractionModelIdInput`<sup>Optional</sup> <a name="ExtractionModelIdInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.extractionModelIdInput"></a>

```go
func ExtractionModelIdInput() *string
```

- *Type:* *string

---

##### `MemoryExpiryDaysInput`<sup>Optional</sup> <a name="MemoryExpiryDaysInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryExpiryDaysInput"></a>

```go
func MemoryExpiryDaysInput() *f64
```

- *Type:* *f64

---

##### `MemoryStrategiesInput`<sup>Optional</sup> <a name="MemoryStrategiesInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryStrategiesInput"></a>

```go
func MemoryStrategiesInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `EventExpiryDays`<sup>Required</sup> <a name="EventExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.eventExpiryDays"></a>

```go
func EventExpiryDays() *f64
```

- *Type:* *f64

---

##### `ExtractionModelId`<sup>Required</sup> <a name="ExtractionModelId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.extractionModelId"></a>

```go
func ExtractionModelId() *string
```

- *Type:* *string

---

##### `MemoryExpiryDays`<sup>Required</sup> <a name="MemoryExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryExpiryDays"></a>

```go
func MemoryExpiryDays() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchmemorySpaceConfig <a name="OpensearchmemorySpaceConfig" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/opensearchmemoryspace"

&opensearchmemoryspace.OpensearchmemorySpaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	EncryptionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration,
	EventExpiryDays: *f64,
	ExtractionModelId: *string,
	MemoryExpiryDays: *f64,
	MemoryStrategies: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#encryption_configuration OpensearchmemorySpace#encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.eventExpiryDays">EventExpiryDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#event_expiry_days OpensearchmemorySpace#event_expiry_days}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.extractionModelId">ExtractionModelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_model_id OpensearchmemorySpace#extraction_model_id}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.memoryExpiryDays">MemoryExpiryDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_expiry_days OpensearchmemorySpace#memory_expiry_days}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.memoryStrategies">MemoryStrategies</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_strategies OpensearchmemorySpace#memory_strategies}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}.

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration OpensearchmemorySpaceEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#encryption_configuration OpensearchmemorySpace#encryption_configuration}.

---

##### `EventExpiryDays`<sup>Optional</sup> <a name="EventExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.eventExpiryDays"></a>

```go
EventExpiryDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#event_expiry_days OpensearchmemorySpace#event_expiry_days}.

---

##### `ExtractionModelId`<sup>Optional</sup> <a name="ExtractionModelId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.extractionModelId"></a>

```go
ExtractionModelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_model_id OpensearchmemorySpace#extraction_model_id}.

---

##### `MemoryExpiryDays`<sup>Optional</sup> <a name="MemoryExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.memoryExpiryDays"></a>

```go
MemoryExpiryDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_expiry_days OpensearchmemorySpace#memory_expiry_days}.

---

##### `MemoryStrategies`<sup>Optional</sup> <a name="MemoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.memoryStrategies"></a>

```go
MemoryStrategies interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_strategies OpensearchmemorySpace#memory_strategies}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#tags OpensearchmemorySpace#tags}

---

### OpensearchmemorySpaceEncryptionConfiguration <a name="OpensearchmemorySpaceEncryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/opensearchmemoryspace"

&opensearchmemoryspace.OpensearchmemorySpaceEncryptionConfiguration {
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#kms_key_arn OpensearchmemorySpace#kms_key_arn}. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#kms_key_arn OpensearchmemorySpace#kms_key_arn}.

---

### OpensearchmemorySpaceMemoryStrategies <a name="OpensearchmemorySpaceMemoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/opensearchmemoryspace"

&opensearchmemoryspace.OpensearchmemorySpaceMemoryStrategies {
	Configuration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration,
	Description: *string,
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#configuration OpensearchmemorySpace#configuration}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#description OpensearchmemorySpace#description}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#type OpensearchmemorySpace#type}. |

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.configuration"></a>

```go
Configuration OpensearchmemorySpaceMemoryStrategiesConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#configuration OpensearchmemorySpace#configuration}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#description OpensearchmemorySpace#description}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#type OpensearchmemorySpace#type}.

---

### OpensearchmemorySpaceMemoryStrategiesConfiguration <a name="OpensearchmemorySpaceMemoryStrategiesConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/opensearchmemoryspace"

&opensearchmemoryspace.OpensearchmemorySpaceMemoryStrategiesConfiguration {
	ConsolidationEnabled: interface{},
	ExtractEveryNMessages: *f64,
	ExtractEveryNTokens: *f64,
	ExtractionPrompt: *string,
	ExtractionSeedRecentN: *f64,
	ExtractionSeedTopK: *f64,
	IdleTimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.consolidationEnabled">ConsolidationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#consolidation_enabled OpensearchmemorySpace#consolidation_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractEveryNMessages">ExtractEveryNMessages</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_messages OpensearchmemorySpace#extract_every_n_messages}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractEveryNTokens">ExtractEveryNTokens</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_tokens OpensearchmemorySpace#extract_every_n_tokens}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionPrompt">ExtractionPrompt</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_prompt OpensearchmemorySpace#extraction_prompt}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionSeedRecentN">ExtractionSeedRecentN</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_recent_n OpensearchmemorySpace#extraction_seed_recent_n}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionSeedTopK">ExtractionSeedTopK</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_top_k OpensearchmemorySpace#extraction_seed_top_k}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.idleTimeoutSeconds">IdleTimeoutSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#idle_timeout_seconds OpensearchmemorySpace#idle_timeout_seconds}. |

---

##### `ConsolidationEnabled`<sup>Optional</sup> <a name="ConsolidationEnabled" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.consolidationEnabled"></a>

```go
ConsolidationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#consolidation_enabled OpensearchmemorySpace#consolidation_enabled}.

---

##### `ExtractEveryNMessages`<sup>Optional</sup> <a name="ExtractEveryNMessages" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractEveryNMessages"></a>

```go
ExtractEveryNMessages *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_messages OpensearchmemorySpace#extract_every_n_messages}.

---

##### `ExtractEveryNTokens`<sup>Optional</sup> <a name="ExtractEveryNTokens" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractEveryNTokens"></a>

```go
ExtractEveryNTokens *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_tokens OpensearchmemorySpace#extract_every_n_tokens}.

---

##### `ExtractionPrompt`<sup>Optional</sup> <a name="ExtractionPrompt" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionPrompt"></a>

```go
ExtractionPrompt *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_prompt OpensearchmemorySpace#extraction_prompt}.

---

##### `ExtractionSeedRecentN`<sup>Optional</sup> <a name="ExtractionSeedRecentN" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionSeedRecentN"></a>

```go
ExtractionSeedRecentN *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_recent_n OpensearchmemorySpace#extraction_seed_recent_n}.

---

##### `ExtractionSeedTopK`<sup>Optional</sup> <a name="ExtractionSeedTopK" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionSeedTopK"></a>

```go
ExtractionSeedTopK *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_top_k OpensearchmemorySpace#extraction_seed_top_k}.

---

##### `IdleTimeoutSeconds`<sup>Optional</sup> <a name="IdleTimeoutSeconds" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.idleTimeoutSeconds"></a>

```go
IdleTimeoutSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#idle_timeout_seconds OpensearchmemorySpace#idle_timeout_seconds}.

---

### OpensearchmemorySpaceTags <a name="OpensearchmemorySpaceTags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/opensearchmemoryspace"

&opensearchmemoryspace.OpensearchmemorySpaceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#key OpensearchmemorySpace#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#value OpensearchmemorySpace#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchmemorySpaceEncryptionConfigurationOutputReference <a name="OpensearchmemorySpaceEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/opensearchmemoryspace"

opensearchmemoryspace.NewOpensearchmemorySpaceEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchmemorySpaceEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference <a name="OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/opensearchmemoryspace"

opensearchmemoryspace.NewOpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetConsolidationEnabled">ResetConsolidationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractEveryNMessages">ResetExtractEveryNMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractEveryNTokens">ResetExtractEveryNTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionPrompt">ResetExtractionPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionSeedRecentN">ResetExtractionSeedRecentN</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionSeedTopK">ResetExtractionSeedTopK</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetIdleTimeoutSeconds">ResetIdleTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConsolidationEnabled` <a name="ResetConsolidationEnabled" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetConsolidationEnabled"></a>

```go
func ResetConsolidationEnabled()
```

##### `ResetExtractEveryNMessages` <a name="ResetExtractEveryNMessages" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractEveryNMessages"></a>

```go
func ResetExtractEveryNMessages()
```

##### `ResetExtractEveryNTokens` <a name="ResetExtractEveryNTokens" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractEveryNTokens"></a>

```go
func ResetExtractEveryNTokens()
```

##### `ResetExtractionPrompt` <a name="ResetExtractionPrompt" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionPrompt"></a>

```go
func ResetExtractionPrompt()
```

##### `ResetExtractionSeedRecentN` <a name="ResetExtractionSeedRecentN" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionSeedRecentN"></a>

```go
func ResetExtractionSeedRecentN()
```

##### `ResetExtractionSeedTopK` <a name="ResetExtractionSeedTopK" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionSeedTopK"></a>

```go
func ResetExtractionSeedTopK()
```

##### `ResetIdleTimeoutSeconds` <a name="ResetIdleTimeoutSeconds" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetIdleTimeoutSeconds"></a>

```go
func ResetIdleTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabledInput">ConsolidationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessagesInput">ExtractEveryNMessagesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokensInput">ExtractEveryNTokensInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPromptInput">ExtractionPromptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentNInput">ExtractionSeedRecentNInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopKInput">ExtractionSeedTopKInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSecondsInput">IdleTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabled">ConsolidationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessages">ExtractEveryNMessages</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokens">ExtractEveryNTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPrompt">ExtractionPrompt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentN">ExtractionSeedRecentN</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopK">ExtractionSeedTopK</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSeconds">IdleTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConsolidationEnabledInput`<sup>Optional</sup> <a name="ConsolidationEnabledInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabledInput"></a>

```go
func ConsolidationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExtractEveryNMessagesInput`<sup>Optional</sup> <a name="ExtractEveryNMessagesInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessagesInput"></a>

```go
func ExtractEveryNMessagesInput() *f64
```

- *Type:* *f64

---

##### `ExtractEveryNTokensInput`<sup>Optional</sup> <a name="ExtractEveryNTokensInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokensInput"></a>

```go
func ExtractEveryNTokensInput() *f64
```

- *Type:* *f64

---

##### `ExtractionPromptInput`<sup>Optional</sup> <a name="ExtractionPromptInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPromptInput"></a>

```go
func ExtractionPromptInput() *string
```

- *Type:* *string

---

##### `ExtractionSeedRecentNInput`<sup>Optional</sup> <a name="ExtractionSeedRecentNInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentNInput"></a>

```go
func ExtractionSeedRecentNInput() *f64
```

- *Type:* *f64

---

##### `ExtractionSeedTopKInput`<sup>Optional</sup> <a name="ExtractionSeedTopKInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopKInput"></a>

```go
func ExtractionSeedTopKInput() *f64
```

- *Type:* *f64

---

##### `IdleTimeoutSecondsInput`<sup>Optional</sup> <a name="IdleTimeoutSecondsInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSecondsInput"></a>

```go
func IdleTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `ConsolidationEnabled`<sup>Required</sup> <a name="ConsolidationEnabled" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabled"></a>

```go
func ConsolidationEnabled() interface{}
```

- *Type:* interface{}

---

##### `ExtractEveryNMessages`<sup>Required</sup> <a name="ExtractEveryNMessages" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessages"></a>

```go
func ExtractEveryNMessages() *f64
```

- *Type:* *f64

---

##### `ExtractEveryNTokens`<sup>Required</sup> <a name="ExtractEveryNTokens" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokens"></a>

```go
func ExtractEveryNTokens() *f64
```

- *Type:* *f64

---

##### `ExtractionPrompt`<sup>Required</sup> <a name="ExtractionPrompt" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPrompt"></a>

```go
func ExtractionPrompt() *string
```

- *Type:* *string

---

##### `ExtractionSeedRecentN`<sup>Required</sup> <a name="ExtractionSeedRecentN" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentN"></a>

```go
func ExtractionSeedRecentN() *f64
```

- *Type:* *f64

---

##### `ExtractionSeedTopK`<sup>Required</sup> <a name="ExtractionSeedTopK" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopK"></a>

```go
func ExtractionSeedTopK() *f64
```

- *Type:* *f64

---

##### `IdleTimeoutSeconds`<sup>Required</sup> <a name="IdleTimeoutSeconds" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSeconds"></a>

```go
func IdleTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchmemorySpaceMemoryStrategiesList <a name="OpensearchmemorySpaceMemoryStrategiesList" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/opensearchmemoryspace"

opensearchmemoryspace.NewOpensearchmemorySpaceMemoryStrategiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpensearchmemorySpaceMemoryStrategiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.get"></a>

```go
func Get(index *f64) OpensearchmemorySpaceMemoryStrategiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchmemorySpaceMemoryStrategiesOutputReference <a name="OpensearchmemorySpaceMemoryStrategiesOutputReference" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/opensearchmemoryspace"

opensearchmemoryspace.NewOpensearchmemorySpaceMemoryStrategiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpensearchmemorySpaceMemoryStrategiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration"></a>

```go
func PutConfiguration(value OpensearchmemorySpaceMemoryStrategiesConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a>

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference">OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.configurationInput">ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.configuration"></a>

```go
func Configuration() OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference">OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference</a>

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.configurationInput"></a>

```go
func ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchmemorySpaceTagsList <a name="OpensearchmemorySpaceTagsList" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/opensearchmemoryspace"

opensearchmemoryspace.NewOpensearchmemorySpaceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OpensearchmemorySpaceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.get"></a>

```go
func Get(index *f64) OpensearchmemorySpaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OpensearchmemorySpaceTagsOutputReference <a name="OpensearchmemorySpaceTagsOutputReference" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/opensearchmemoryspace"

opensearchmemoryspace.NewOpensearchmemorySpaceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OpensearchmemorySpaceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




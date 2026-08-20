# `glueIntegrationResourceProperty` Submodule <a name="`glueIntegrationResourceProperty` Submodule" id="@cdktn/provider-awscc.glueIntegrationResourceProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueIntegrationResourceProperty <a name="GlueIntegrationResourceProperty" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property awscc_glue_integration_resource_property}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegrationresourceproperty"

glueintegrationresourceproperty.NewGlueIntegrationResourceProperty(scope Construct, id *string, config GlueIntegrationResourcePropertyConfig) GlueIntegrationResourceProperty
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig">GlueIntegrationResourcePropertyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig">GlueIntegrationResourcePropertyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putSourceProcessingProperties">PutSourceProcessingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTargetProcessingProperties">PutTargetProcessingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetSourceProcessingProperties">ResetSourceProcessingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetTargetProcessingProperties">ResetTargetProcessingProperties</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSourceProcessingProperties` <a name="PutSourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putSourceProcessingProperties"></a>

```go
func PutSourceProcessingProperties(value GlueIntegrationResourcePropertySourceProcessingProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putSourceProcessingProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTargetProcessingProperties` <a name="PutTargetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTargetProcessingProperties"></a>

```go
func PutTargetProcessingProperties(value GlueIntegrationResourcePropertyTargetProcessingProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTargetProcessingProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a>

---

##### `ResetSourceProcessingProperties` <a name="ResetSourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetSourceProcessingProperties"></a>

```go
func ResetSourceProcessingProperties()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTargetProcessingProperties` <a name="ResetTargetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetTargetProcessingProperties"></a>

```go
func ResetTargetProcessingProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueIntegrationResourceProperty resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegrationresourceproperty"

glueintegrationresourceproperty.GlueIntegrationResourceProperty_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegrationresourceproperty"

glueintegrationresourceproperty.GlueIntegrationResourceProperty_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegrationresourceproperty"

glueintegrationresourceproperty.GlueIntegrationResourceProperty_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegrationresourceproperty"

glueintegrationresourceproperty.GlueIntegrationResourceProperty_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GlueIntegrationResourceProperty resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GlueIntegrationResourceProperty to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GlueIntegrationResourceProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GlueIntegrationResourceProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourcePropertyArn">ResourcePropertyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.sourceProcessingProperties">SourceProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference">GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList">GlueIntegrationResourcePropertyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.targetProcessingProperties">TargetProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference">GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourceArnInput">ResourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.sourceProcessingPropertiesInput">SourceProcessingPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.targetProcessingPropertiesInput">TargetProcessingPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourcePropertyArn`<sup>Required</sup> <a name="ResourcePropertyArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourcePropertyArn"></a>

```go
func ResourcePropertyArn() *string
```

- *Type:* *string

---

##### `SourceProcessingProperties`<sup>Required</sup> <a name="SourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.sourceProcessingProperties"></a>

```go
func SourceProcessingProperties() GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference">GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tags"></a>

```go
func Tags() GlueIntegrationResourcePropertyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList">GlueIntegrationResourcePropertyTagsList</a>

---

##### `TargetProcessingProperties`<sup>Required</sup> <a name="TargetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.targetProcessingProperties"></a>

```go
func TargetProcessingProperties() GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference">GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference</a>

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourceArnInput"></a>

```go
func ResourceArnInput() *string
```

- *Type:* *string

---

##### `SourceProcessingPropertiesInput`<sup>Optional</sup> <a name="SourceProcessingPropertiesInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.sourceProcessingPropertiesInput"></a>

```go
func SourceProcessingPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetProcessingPropertiesInput`<sup>Optional</sup> <a name="TargetProcessingPropertiesInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.targetProcessingPropertiesInput"></a>

```go
func TargetProcessingPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueIntegrationResourcePropertyConfig <a name="GlueIntegrationResourcePropertyConfig" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegrationresourceproperty"

&glueintegrationresourceproperty.GlueIntegrationResourcePropertyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ResourceArn: *string,
	SourceProcessingProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties,
	Tags: interface{},
	TargetProcessingProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | The connection ARN of the source, or the database ARN of the target. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.sourceProcessingProperties">SourceProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a></code> | The resource properties associated with the integration source. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.targetProcessingProperties">TargetProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a></code> | The resource properties associated with the integration target. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.resourceArn"></a>

```go
ResourceArn *string
```

- *Type:* *string

The connection ARN of the source, or the database ARN of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#resource_arn GlueIntegrationResourceProperty#resource_arn}

---

##### `SourceProcessingProperties`<sup>Optional</sup> <a name="SourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.sourceProcessingProperties"></a>

```go
SourceProcessingProperties GlueIntegrationResourcePropertySourceProcessingProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a>

The resource properties associated with the integration source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#source_processing_properties GlueIntegrationResourceProperty#source_processing_properties}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#tags GlueIntegrationResourceProperty#tags}

---

##### `TargetProcessingProperties`<sup>Optional</sup> <a name="TargetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.targetProcessingProperties"></a>

```go
TargetProcessingProperties GlueIntegrationResourcePropertyTargetProcessingProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a>

The resource properties associated with the integration target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#target_processing_properties GlueIntegrationResourceProperty#target_processing_properties}

---

### GlueIntegrationResourcePropertySourceProcessingProperties <a name="GlueIntegrationResourcePropertySourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegrationresourceproperty"

&glueintegrationresourceproperty.GlueIntegrationResourcePropertySourceProcessingProperties {
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties.property.roleArn">RoleArn</a></code> | <code>*string</code> | The IAM role to access the Glue connection. |

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The IAM role to access the Glue connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#role_arn GlueIntegrationResourceProperty#role_arn}

---

### GlueIntegrationResourcePropertyTags <a name="GlueIntegrationResourcePropertyTags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegrationresourceproperty"

&glueintegrationresourceproperty.GlueIntegrationResourcePropertyTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#key GlueIntegrationResourceProperty#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#value GlueIntegrationResourceProperty#value}

---

### GlueIntegrationResourcePropertyTargetProcessingProperties <a name="GlueIntegrationResourcePropertyTargetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegrationresourceproperty"

&glueintegrationresourceproperty.GlueIntegrationResourcePropertyTargetProcessingProperties {
	ConnectionName: *string,
	EventBusArn: *string,
	KmsArn: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.connectionName">ConnectionName</a></code> | <code>*string</code> | The Glue network connection to configure the Glue job running in the customer VPC. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.eventBusArn">EventBusArn</a></code> | <code>*string</code> | The ARN of an Eventbridge event bus to receive the integration status notification. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.kmsArn">KmsArn</a></code> | <code>*string</code> | The ARN of the KMS key used for encryption. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.roleArn">RoleArn</a></code> | <code>*string</code> | The IAM role to access the Glue database. |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

The Glue network connection to configure the Glue job running in the customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#connection_name GlueIntegrationResourceProperty#connection_name}

---

##### `EventBusArn`<sup>Optional</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.eventBusArn"></a>

```go
EventBusArn *string
```

- *Type:* *string

The ARN of an Eventbridge event bus to receive the integration status notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#event_bus_arn GlueIntegrationResourceProperty#event_bus_arn}

---

##### `KmsArn`<sup>Optional</sup> <a name="KmsArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.kmsArn"></a>

```go
KmsArn *string
```

- *Type:* *string

The ARN of the KMS key used for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#kms_arn GlueIntegrationResourceProperty#kms_arn}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The IAM role to access the Glue database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_integration_resource_property#role_arn GlueIntegrationResourceProperty#role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference <a name="GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegrationresourceproperty"

glueintegrationresourceproperty.NewGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueIntegrationResourcePropertyTagsList <a name="GlueIntegrationResourcePropertyTagsList" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegrationresourceproperty"

glueintegrationresourceproperty.NewGlueIntegrationResourcePropertyTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueIntegrationResourcePropertyTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.get"></a>

```go
func Get(index *f64) GlueIntegrationResourcePropertyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueIntegrationResourcePropertyTagsOutputReference <a name="GlueIntegrationResourcePropertyTagsOutputReference" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegrationresourceproperty"

glueintegrationresourceproperty.NewGlueIntegrationResourcePropertyTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueIntegrationResourcePropertyTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference <a name="GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegrationresourceproperty"

glueintegrationresourceproperty.NewGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetEventBusArn">ResetEventBusArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetKmsArn">ResetKmsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetConnectionName"></a>

```go
func ResetConnectionName()
```

##### `ResetEventBusArn` <a name="ResetEventBusArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetEventBusArn"></a>

```go
func ResetEventBusArn()
```

##### `ResetKmsArn` <a name="ResetKmsArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetKmsArn"></a>

```go
func ResetKmsArn()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArnInput">EventBusArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArnInput">KmsArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArn">EventBusArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArn">KmsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `EventBusArnInput`<sup>Optional</sup> <a name="EventBusArnInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArnInput"></a>

```go
func EventBusArnInput() *string
```

- *Type:* *string

---

##### `KmsArnInput`<sup>Optional</sup> <a name="KmsArnInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArnInput"></a>

```go
func KmsArnInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArn"></a>

```go
func EventBusArn() *string
```

- *Type:* *string

---

##### `KmsArn`<sup>Required</sup> <a name="KmsArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArn"></a>

```go
func KmsArn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




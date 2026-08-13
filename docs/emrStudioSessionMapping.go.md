# `emrStudioSessionMapping` Submodule <a name="`emrStudioSessionMapping` Submodule" id="@cdktn/provider-awscc.emrStudioSessionMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrStudioSessionMapping <a name="EmrStudioSessionMapping" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/emr_studio_session_mapping awscc_emr_studio_session_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/emrstudiosessionmapping"

emrstudiosessionmapping.NewEmrStudioSessionMapping(scope Construct, id *string, config EmrStudioSessionMappingConfig) EmrStudioSessionMapping
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig">EmrStudioSessionMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig">EmrStudioSessionMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EmrStudioSessionMapping resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/emrstudiosessionmapping"

emrstudiosessionmapping.EmrStudioSessionMapping_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/emrstudiosessionmapping"

emrstudiosessionmapping.EmrStudioSessionMapping_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/emrstudiosessionmapping"

emrstudiosessionmapping.EmrStudioSessionMapping_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/emrstudiosessionmapping"

emrstudiosessionmapping.EmrStudioSessionMapping_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EmrStudioSessionMapping resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EmrStudioSessionMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EmrStudioSessionMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/emr_studio_session_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EmrStudioSessionMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityNameInput">IdentityNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityTypeInput">IdentityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.sessionPolicyArnInput">SessionPolicyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.studioIdInput">StudioIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityName">IdentityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityType">IdentityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.sessionPolicyArn">SessionPolicyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.studioId">StudioId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentityNameInput`<sup>Optional</sup> <a name="IdentityNameInput" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityNameInput"></a>

```go
func IdentityNameInput() *string
```

- *Type:* *string

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityTypeInput"></a>

```go
func IdentityTypeInput() *string
```

- *Type:* *string

---

##### `SessionPolicyArnInput`<sup>Optional</sup> <a name="SessionPolicyArnInput" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.sessionPolicyArnInput"></a>

```go
func SessionPolicyArnInput() *string
```

- *Type:* *string

---

##### `StudioIdInput`<sup>Optional</sup> <a name="StudioIdInput" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.studioIdInput"></a>

```go
func StudioIdInput() *string
```

- *Type:* *string

---

##### `IdentityName`<sup>Required</sup> <a name="IdentityName" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityName"></a>

```go
func IdentityName() *string
```

- *Type:* *string

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.identityType"></a>

```go
func IdentityType() *string
```

- *Type:* *string

---

##### `SessionPolicyArn`<sup>Required</sup> <a name="SessionPolicyArn" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.sessionPolicyArn"></a>

```go
func SessionPolicyArn() *string
```

- *Type:* *string

---

##### `StudioId`<sup>Required</sup> <a name="StudioId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.studioId"></a>

```go
func StudioId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMapping.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrStudioSessionMappingConfig <a name="EmrStudioSessionMappingConfig" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/emrstudiosessionmapping"

&emrstudiosessionmapping.EmrStudioSessionMappingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IdentityName: *string,
	IdentityType: *string,
	SessionPolicyArn: *string,
	StudioId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.identityName">IdentityName</a></code> | <code>*string</code> | The name of the user or group. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.identityType">IdentityType</a></code> | <code>*string</code> | Specifies whether the identity to map to the Studio is a user or a group. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.sessionPolicyArn">SessionPolicyArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. |
| <code><a href="#@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.studioId">StudioId</a></code> | <code>*string</code> | The ID of the Amazon EMR Studio to which the user or group will be mapped. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdentityName`<sup>Required</sup> <a name="IdentityName" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.identityName"></a>

```go
IdentityName *string
```

- *Type:* *string

The name of the user or group.

For more information, see UserName and DisplayName in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/emr_studio_session_mapping#identity_name EmrStudioSessionMapping#identity_name}

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.identityType"></a>

```go
IdentityType *string
```

- *Type:* *string

Specifies whether the identity to map to the Studio is a user or a group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/emr_studio_session_mapping#identity_type EmrStudioSessionMapping#identity_type}

---

##### `SessionPolicyArn`<sup>Required</sup> <a name="SessionPolicyArn" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.sessionPolicyArn"></a>

```go
SessionPolicyArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group.

Session policies refine Studio user permissions without the need to use multiple IAM user roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/emr_studio_session_mapping#session_policy_arn EmrStudioSessionMapping#session_policy_arn}

---

##### `StudioId`<sup>Required</sup> <a name="StudioId" id="@cdktn/provider-awscc.emrStudioSessionMapping.EmrStudioSessionMappingConfig.property.studioId"></a>

```go
StudioId *string
```

- *Type:* *string

The ID of the Amazon EMR Studio to which the user or group will be mapped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/emr_studio_session_mapping#studio_id EmrStudioSessionMapping#studio_id}

---




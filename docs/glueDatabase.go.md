# `glueDatabase` Submodule <a name="`glueDatabase` Submodule" id="@cdktn/provider-awscc.glueDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueDatabase <a name="GlueDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database awscc_glue_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluedatabase"

gluedatabase.NewGlueDatabase(scope Construct, id *string, config GlueDatabaseConfig) GlueDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig">GlueDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig">GlueDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.putDatabaseInput">PutDatabaseInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDatabaseInput` <a name="PutDatabaseInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.putDatabaseInput"></a>

```go
func PutDatabaseInput(value GlueDatabaseDatabaseInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.putDatabaseInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput">GlueDatabaseDatabaseInput</a>

---

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluedatabase"

gluedatabase.GlueDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluedatabase"

gluedatabase.GlueDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluedatabase"

gluedatabase.GlueDatabase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluedatabase"

gluedatabase.GlueDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GlueDatabase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GlueDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GlueDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GlueDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseInput">DatabaseInput</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference">GlueDatabaseDatabaseInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseInputInput">DatabaseInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseInput`<sup>Required</sup> <a name="DatabaseInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseInput"></a>

```go
func DatabaseInput() GlueDatabaseDatabaseInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference">GlueDatabaseDatabaseInputOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `DatabaseInputInput`<sup>Optional</sup> <a name="DatabaseInputInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseInputInput"></a>

```go
func DatabaseInputInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueDatabase.GlueDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueDatabaseConfig <a name="GlueDatabaseConfig" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluedatabase"

&gluedatabase.GlueDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CatalogId: *string,
	DatabaseInput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueDatabase.GlueDatabaseDatabaseInput,
	DatabaseName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.catalogId">CatalogId</a></code> | <code>*string</code> | The AWS account ID for the account in which to create the catalog object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.databaseInput">DatabaseInput</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput">GlueDatabaseDatabaseInput</a></code> | The metadata for the database. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | The name of the database. For hive compatibility, this is folded to lowercase when it is store. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

The AWS account ID for the account in which to create the catalog object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#catalog_id GlueDatabase#catalog_id}

---

##### `DatabaseInput`<sup>Required</sup> <a name="DatabaseInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.databaseInput"></a>

```go
DatabaseInput GlueDatabaseDatabaseInput
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput">GlueDatabaseDatabaseInput</a>

The metadata for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#database_input GlueDatabase#database_input}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

The name of the database. For hive compatibility, this is folded to lowercase when it is store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#database_name GlueDatabase#database_name}

---

### GlueDatabaseDatabaseInput <a name="GlueDatabaseDatabaseInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluedatabase"

&gluedatabase.GlueDatabaseDatabaseInput {
	CreateTableDefaultPermissions: interface{},
	Description: *string,
	FederatedDatabase: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase,
	LocationUri: *string,
	Name: *string,
	Parameters: *string,
	TargetDatabase: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.createTableDefaultPermissions">CreateTableDefaultPermissions</a></code> | <code>interface{}</code> | Creates a set of default permissions on the table for principals. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.description">Description</a></code> | <code>*string</code> | A description of the database. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.federatedDatabase">FederatedDatabase</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase">GlueDatabaseDatabaseInputFederatedDatabase</a></code> | A FederatedDatabase structure that references an entity outside the AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.locationUri">LocationUri</a></code> | <code>*string</code> | The location of the database (for example, an HDFS path). |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.name">Name</a></code> | <code>*string</code> | The name of the database. For hive compatibility, this is folded to lowercase when it is stored. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.parameters">Parameters</a></code> | <code>*string</code> | These key-value pairs define parameters and properties of the database. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.targetDatabase">TargetDatabase</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase">GlueDatabaseDatabaseInputTargetDatabase</a></code> | A DatabaseIdentifier structure that describes a target database for resource linking. |

---

##### `CreateTableDefaultPermissions`<sup>Optional</sup> <a name="CreateTableDefaultPermissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.createTableDefaultPermissions"></a>

```go
CreateTableDefaultPermissions interface{}
```

- *Type:* interface{}

Creates a set of default permissions on the table for principals.

Used by AWS Lake Formation. Not used in the normal course of AWS Glue operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#create_table_default_permissions GlueDatabase#create_table_default_permissions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#description GlueDatabase#description}

---

##### `FederatedDatabase`<sup>Optional</sup> <a name="FederatedDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.federatedDatabase"></a>

```go
FederatedDatabase GlueDatabaseDatabaseInputFederatedDatabase
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase">GlueDatabaseDatabaseInputFederatedDatabase</a>

A FederatedDatabase structure that references an entity outside the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#federated_database GlueDatabase#federated_database}

---

##### `LocationUri`<sup>Optional</sup> <a name="LocationUri" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.locationUri"></a>

```go
LocationUri *string
```

- *Type:* *string

The location of the database (for example, an HDFS path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#location_uri GlueDatabase#location_uri}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the database. For hive compatibility, this is folded to lowercase when it is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#name GlueDatabase#name}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.parameters"></a>

```go
Parameters *string
```

- *Type:* *string

These key-value pairs define parameters and properties of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#parameters GlueDatabase#parameters}

---

##### `TargetDatabase`<sup>Optional</sup> <a name="TargetDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInput.property.targetDatabase"></a>

```go
TargetDatabase GlueDatabaseDatabaseInputTargetDatabase
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase">GlueDatabaseDatabaseInputTargetDatabase</a>

A DatabaseIdentifier structure that describes a target database for resource linking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#target_database GlueDatabase#target_database}

---

### GlueDatabaseDatabaseInputCreateTableDefaultPermissions <a name="GlueDatabaseDatabaseInputCreateTableDefaultPermissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluedatabase"

&gluedatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions {
	Permissions: *[]*string,
	Principal: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions.property.permissions">Permissions</a></code> | <code>*[]*string</code> | The permissions that are granted to the principal. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal</a></code> | The principal who is granted permissions. |

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions.property.permissions"></a>

```go
Permissions *[]*string
```

- *Type:* *[]*string

The permissions that are granted to the principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#permissions GlueDatabase#permissions}

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissions.property.principal"></a>

```go
Principal GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal</a>

The principal who is granted permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#principal GlueDatabase#principal}

---

### GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal <a name="GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluedatabase"

&gluedatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal {
	DataLakePrincipalIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier">DataLakePrincipalIdentifier</a></code> | <code>*string</code> | An identifier for the AWS Lake Formation principal. |

---

##### `DataLakePrincipalIdentifier`<sup>Optional</sup> <a name="DataLakePrincipalIdentifier" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier"></a>

```go
DataLakePrincipalIdentifier *string
```

- *Type:* *string

An identifier for the AWS Lake Formation principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#data_lake_principal_identifier GlueDatabase#data_lake_principal_identifier}

---

### GlueDatabaseDatabaseInputFederatedDatabase <a name="GlueDatabaseDatabaseInputFederatedDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluedatabase"

&gluedatabase.GlueDatabaseDatabaseInputFederatedDatabase {
	ConnectionName: *string,
	Identifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase.property.connectionName">ConnectionName</a></code> | <code>*string</code> | The name of the connection to the external metastore. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase.property.identifier">Identifier</a></code> | <code>*string</code> | A unique identifier for the federated database. |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

The name of the connection to the external metastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#connection_name GlueDatabase#connection_name}

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

A unique identifier for the federated database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#identifier GlueDatabase#identifier}

---

### GlueDatabaseDatabaseInputTargetDatabase <a name="GlueDatabaseDatabaseInputTargetDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluedatabase"

&gluedatabase.GlueDatabaseDatabaseInputTargetDatabase {
	CatalogId: *string,
	DatabaseName: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.property.catalogId">CatalogId</a></code> | <code>*string</code> | The ID of the Data Catalog in which the database resides. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.property.databaseName">DatabaseName</a></code> | <code>*string</code> | The name of the catalog database. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.property.region">Region</a></code> | <code>*string</code> | Region of the target database. |

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

The ID of the Data Catalog in which the database resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#catalog_id GlueDatabase#catalog_id}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

The name of the catalog database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#database_name GlueDatabase#database_name}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region of the target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#region GlueDatabase#region}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList <a name="GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluedatabase"

gluedatabase.NewGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.get"></a>

```go
func Get(index *f64) GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference <a name="GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluedatabase"

gluedatabase.NewGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.putPrincipal">PutPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrincipal` <a name="PutPrincipal" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.putPrincipal"></a>

```go
func PutPrincipal(value GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal</a>

---

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resetPrincipal"></a>

```go
func ResetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```go
func Principal() GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference</a>

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.permissionsInput"></a>

```go
func PermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.principalInput"></a>

```go
func PrincipalInput() interface{}
```

- *Type:* interface{}

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference <a name="GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluedatabase"

gluedatabase.NewGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier">ResetDataLakePrincipalIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataLakePrincipalIdentifier` <a name="ResetDataLakePrincipalIdentifier" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier"></a>

```go
func ResetDataLakePrincipalIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">DataLakePrincipalIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">DataLakePrincipalIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataLakePrincipalIdentifierInput`<sup>Optional</sup> <a name="DataLakePrincipalIdentifierInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```go
func DataLakePrincipalIdentifierInput() *string
```

- *Type:* *string

---

##### `DataLakePrincipalIdentifier`<sup>Required</sup> <a name="DataLakePrincipalIdentifier" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```go
func DataLakePrincipalIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueDatabaseDatabaseInputFederatedDatabaseOutputReference <a name="GlueDatabaseDatabaseInputFederatedDatabaseOutputReference" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluedatabase"

gluedatabase.NewGlueDatabaseDatabaseInputFederatedDatabaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueDatabaseDatabaseInputFederatedDatabaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resetIdentifier">ResetIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resetConnectionName"></a>

```go
func ResetConnectionName()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resetIdentifier"></a>

```go
func ResetIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueDatabaseDatabaseInputOutputReference <a name="GlueDatabaseDatabaseInputOutputReference" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluedatabase"

gluedatabase.NewGlueDatabaseDatabaseInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueDatabaseDatabaseInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putCreateTableDefaultPermissions">PutCreateTableDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putFederatedDatabase">PutFederatedDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putTargetDatabase">PutTargetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetCreateTableDefaultPermissions">ResetCreateTableDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetFederatedDatabase">ResetFederatedDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetLocationUri">ResetLocationUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetTargetDatabase">ResetTargetDatabase</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCreateTableDefaultPermissions` <a name="PutCreateTableDefaultPermissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putCreateTableDefaultPermissions"></a>

```go
func PutCreateTableDefaultPermissions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putCreateTableDefaultPermissions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFederatedDatabase` <a name="PutFederatedDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putFederatedDatabase"></a>

```go
func PutFederatedDatabase(value GlueDatabaseDatabaseInputFederatedDatabase)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putFederatedDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabase">GlueDatabaseDatabaseInputFederatedDatabase</a>

---

##### `PutTargetDatabase` <a name="PutTargetDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putTargetDatabase"></a>

```go
func PutTargetDatabase(value GlueDatabaseDatabaseInputTargetDatabase)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.putTargetDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabase">GlueDatabaseDatabaseInputTargetDatabase</a>

---

##### `ResetCreateTableDefaultPermissions` <a name="ResetCreateTableDefaultPermissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetCreateTableDefaultPermissions"></a>

```go
func ResetCreateTableDefaultPermissions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFederatedDatabase` <a name="ResetFederatedDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetFederatedDatabase"></a>

```go
func ResetFederatedDatabase()
```

##### `ResetLocationUri` <a name="ResetLocationUri" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetLocationUri"></a>

```go
func ResetLocationUri()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetTargetDatabase` <a name="ResetTargetDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.resetTargetDatabase"></a>

```go
func ResetTargetDatabase()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.createTableDefaultPermissions">CreateTableDefaultPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.federatedDatabase">FederatedDatabase</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference">GlueDatabaseDatabaseInputFederatedDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.targetDatabase">TargetDatabase</a></code> | <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference">GlueDatabaseDatabaseInputTargetDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.createTableDefaultPermissionsInput">CreateTableDefaultPermissionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.federatedDatabaseInput">FederatedDatabaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.locationUriInput">LocationUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.targetDatabaseInput">TargetDatabaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.locationUri">LocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTableDefaultPermissions`<sup>Required</sup> <a name="CreateTableDefaultPermissions" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.createTableDefaultPermissions"></a>

```go
func CreateTableDefaultPermissions() GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList">GlueDatabaseDatabaseInputCreateTableDefaultPermissionsList</a>

---

##### `FederatedDatabase`<sup>Required</sup> <a name="FederatedDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.federatedDatabase"></a>

```go
func FederatedDatabase() GlueDatabaseDatabaseInputFederatedDatabaseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputFederatedDatabaseOutputReference">GlueDatabaseDatabaseInputFederatedDatabaseOutputReference</a>

---

##### `TargetDatabase`<sup>Required</sup> <a name="TargetDatabase" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.targetDatabase"></a>

```go
func TargetDatabase() GlueDatabaseDatabaseInputTargetDatabaseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference">GlueDatabaseDatabaseInputTargetDatabaseOutputReference</a>

---

##### `CreateTableDefaultPermissionsInput`<sup>Optional</sup> <a name="CreateTableDefaultPermissionsInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.createTableDefaultPermissionsInput"></a>

```go
func CreateTableDefaultPermissionsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FederatedDatabaseInput`<sup>Optional</sup> <a name="FederatedDatabaseInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.federatedDatabaseInput"></a>

```go
func FederatedDatabaseInput() interface{}
```

- *Type:* interface{}

---

##### `LocationUriInput`<sup>Optional</sup> <a name="LocationUriInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.locationUriInput"></a>

```go
func LocationUriInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *string
```

- *Type:* *string

---

##### `TargetDatabaseInput`<sup>Optional</sup> <a name="TargetDatabaseInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.targetDatabaseInput"></a>

```go
func TargetDatabaseInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `LocationUri`<sup>Required</sup> <a name="LocationUri" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.locationUri"></a>

```go
func LocationUri() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueDatabaseDatabaseInputTargetDatabaseOutputReference <a name="GlueDatabaseDatabaseInputTargetDatabaseOutputReference" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluedatabase"

gluedatabase.NewGlueDatabaseDatabaseInputTargetDatabaseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueDatabaseDatabaseInputTargetDatabaseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueDatabase.GlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




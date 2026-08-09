# `appconfigExtensionAssociation` Submodule <a name="`appconfigExtensionAssociation` Submodule" id="@cdktn/provider-awscc.appconfigExtensionAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigExtensionAssociation <a name="AppconfigExtensionAssociation" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association awscc_appconfig_extension_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigextensionassociation"

appconfigextensionassociation.NewAppconfigExtensionAssociation(scope Construct, id *string, config AppconfigExtensionAssociationConfig) AppconfigExtensionAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig">AppconfigExtensionAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig">AppconfigExtensionAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetExtensionIdentifier">ResetExtensionIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetExtensionVersionNumber">ResetExtensionVersionNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetResourceIdentifier">ResetResourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExtensionIdentifier` <a name="ResetExtensionIdentifier" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetExtensionIdentifier"></a>

```go
func ResetExtensionIdentifier()
```

##### `ResetExtensionVersionNumber` <a name="ResetExtensionVersionNumber" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetExtensionVersionNumber"></a>

```go
func ResetExtensionVersionNumber()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetResourceIdentifier` <a name="ResetResourceIdentifier" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetResourceIdentifier"></a>

```go
func ResetResourceIdentifier()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppconfigExtensionAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigextensionassociation"

appconfigextensionassociation.AppconfigExtensionAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigextensionassociation"

appconfigextensionassociation.AppconfigExtensionAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigextensionassociation"

appconfigextensionassociation.AppconfigExtensionAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigextensionassociation"

appconfigextensionassociation.AppconfigExtensionAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AppconfigExtensionAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppconfigExtensionAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppconfigExtensionAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigExtensionAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionArn">ExtensionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionAssociationId">ExtensionAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList">AppconfigExtensionAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionIdentifierInput">ExtensionIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionVersionNumberInput">ExtensionVersionNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.resourceIdentifierInput">ResourceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionIdentifier">ExtensionIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionVersionNumber">ExtensionVersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ExtensionArn`<sup>Required</sup> <a name="ExtensionArn" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionArn"></a>

```go
func ExtensionArn() *string
```

- *Type:* *string

---

##### `ExtensionAssociationId`<sup>Required</sup> <a name="ExtensionAssociationId" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionAssociationId"></a>

```go
func ExtensionAssociationId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.tags"></a>

```go
func Tags() AppconfigExtensionAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList">AppconfigExtensionAssociationTagsList</a>

---

##### `ExtensionIdentifierInput`<sup>Optional</sup> <a name="ExtensionIdentifierInput" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionIdentifierInput"></a>

```go
func ExtensionIdentifierInput() *string
```

- *Type:* *string

---

##### `ExtensionVersionNumberInput`<sup>Optional</sup> <a name="ExtensionVersionNumberInput" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionVersionNumberInput"></a>

```go
func ExtensionVersionNumberInput() *f64
```

- *Type:* *f64

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceIdentifierInput`<sup>Optional</sup> <a name="ResourceIdentifierInput" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.resourceIdentifierInput"></a>

```go
func ResourceIdentifierInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ExtensionIdentifier`<sup>Required</sup> <a name="ExtensionIdentifier" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionIdentifier"></a>

```go
func ExtensionIdentifier() *string
```

- *Type:* *string

---

##### `ExtensionVersionNumber`<sup>Required</sup> <a name="ExtensionVersionNumber" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionVersionNumber"></a>

```go
func ExtensionVersionNumber() *f64
```

- *Type:* *f64

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.resourceIdentifier"></a>

```go
func ResourceIdentifier() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigExtensionAssociationConfig <a name="AppconfigExtensionAssociationConfig" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigextensionassociation"

&appconfigextensionassociation.AppconfigExtensionAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ExtensionIdentifier: *string,
	ExtensionVersionNumber: *f64,
	Parameters: *map[string]*string,
	ResourceIdentifier: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.extensionIdentifier">ExtensionIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#extension_identifier AppconfigExtensionAssociation#extension_identifier}. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.extensionVersionNumber">ExtensionVersionNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#extension_version_number AppconfigExtensionAssociation#extension_version_number}. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#parameters AppconfigExtensionAssociation#parameters}. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#resource_identifier AppconfigExtensionAssociation#resource_identifier}. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExtensionIdentifier`<sup>Optional</sup> <a name="ExtensionIdentifier" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.extensionIdentifier"></a>

```go
ExtensionIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#extension_identifier AppconfigExtensionAssociation#extension_identifier}.

---

##### `ExtensionVersionNumber`<sup>Optional</sup> <a name="ExtensionVersionNumber" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.extensionVersionNumber"></a>

```go
ExtensionVersionNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#extension_version_number AppconfigExtensionAssociation#extension_version_number}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#parameters AppconfigExtensionAssociation#parameters}.

---

##### `ResourceIdentifier`<sup>Optional</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.resourceIdentifier"></a>

```go
ResourceIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#resource_identifier AppconfigExtensionAssociation#resource_identifier}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#tags AppconfigExtensionAssociation#tags}

---

### AppconfigExtensionAssociationTags <a name="AppconfigExtensionAssociationTags" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigextensionassociation"

&appconfigextensionassociation.AppconfigExtensionAssociationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#key AppconfigExtensionAssociation#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_extension_association#value AppconfigExtensionAssociation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigExtensionAssociationTagsList <a name="AppconfigExtensionAssociationTagsList" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigextensionassociation"

appconfigextensionassociation.NewAppconfigExtensionAssociationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppconfigExtensionAssociationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.get"></a>

```go
func Get(index *f64) AppconfigExtensionAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppconfigExtensionAssociationTagsOutputReference <a name="AppconfigExtensionAssociationTagsOutputReference" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigextensionassociation"

appconfigextensionassociation.NewAppconfigExtensionAssociationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppconfigExtensionAssociationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExtensionAssociation.AppconfigExtensionAssociationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




# `serverlessrepoApplication` Submodule <a name="`serverlessrepoApplication` Submodule" id="@cdktn/provider-awscc.serverlessrepoApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServerlessrepoApplication <a name="ServerlessrepoApplication" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application awscc_serverlessrepo_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/serverlessrepoapplication"

serverlessrepoapplication.NewServerlessrepoApplication(scope Construct, id *string, config ServerlessrepoApplicationConfig) ServerlessrepoApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig">ServerlessrepoApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig">ServerlessrepoApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetHomePageUrl">ResetHomePageUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetLicenseBody">ResetLicenseBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetReadmeBody">ResetReadmeBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSemanticVersion">ResetSemanticVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSourceCodeUrl">ResetSourceCodeUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSpdxLicenseId">ResetSpdxLicenseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetTemplateBody">ResetTemplateBody</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetHomePageUrl` <a name="ResetHomePageUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetHomePageUrl"></a>

```go
func ResetHomePageUrl()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLicenseBody` <a name="ResetLicenseBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetLicenseBody"></a>

```go
func ResetLicenseBody()
```

##### `ResetReadmeBody` <a name="ResetReadmeBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetReadmeBody"></a>

```go
func ResetReadmeBody()
```

##### `ResetSemanticVersion` <a name="ResetSemanticVersion" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSemanticVersion"></a>

```go
func ResetSemanticVersion()
```

##### `ResetSourceCodeUrl` <a name="ResetSourceCodeUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSourceCodeUrl"></a>

```go
func ResetSourceCodeUrl()
```

##### `ResetSpdxLicenseId` <a name="ResetSpdxLicenseId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSpdxLicenseId"></a>

```go
func ResetSpdxLicenseId()
```

##### `ResetTemplateBody` <a name="ResetTemplateBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetTemplateBody"></a>

```go
func ResetTemplateBody()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServerlessrepoApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/serverlessrepoapplication"

serverlessrepoapplication.ServerlessrepoApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/serverlessrepoapplication"

serverlessrepoapplication.ServerlessrepoApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/serverlessrepoapplication"

serverlessrepoapplication.ServerlessrepoApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/serverlessrepoapplication"

serverlessrepoapplication.ServerlessrepoApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ServerlessrepoApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServerlessrepoApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServerlessrepoApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ServerlessrepoApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.isVerifiedAuthor">IsVerifiedAuthor</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.authorInput">AuthorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.homePageUrlInput">HomePageUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.labelsInput">LabelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.licenseBodyInput">LicenseBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.readmeBodyInput">ReadmeBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.semanticVersionInput">SemanticVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.sourceCodeUrlInput">SourceCodeUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.spdxLicenseIdInput">SpdxLicenseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.templateBodyInput">TemplateBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.author">Author</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.homePageUrl">HomePageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.licenseBody">LicenseBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.readmeBody">ReadmeBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.semanticVersion">SemanticVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.sourceCodeUrl">SourceCodeUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.spdxLicenseId">SpdxLicenseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.templateBody">TemplateBody</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsVerifiedAuthor`<sup>Required</sup> <a name="IsVerifiedAuthor" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.isVerifiedAuthor"></a>

```go
func IsVerifiedAuthor() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AuthorInput`<sup>Optional</sup> <a name="AuthorInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.authorInput"></a>

```go
func AuthorInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HomePageUrlInput`<sup>Optional</sup> <a name="HomePageUrlInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.homePageUrlInput"></a>

```go
func HomePageUrlInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.labelsInput"></a>

```go
func LabelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LicenseBodyInput`<sup>Optional</sup> <a name="LicenseBodyInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.licenseBodyInput"></a>

```go
func LicenseBodyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReadmeBodyInput`<sup>Optional</sup> <a name="ReadmeBodyInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.readmeBodyInput"></a>

```go
func ReadmeBodyInput() *string
```

- *Type:* *string

---

##### `SemanticVersionInput`<sup>Optional</sup> <a name="SemanticVersionInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.semanticVersionInput"></a>

```go
func SemanticVersionInput() *string
```

- *Type:* *string

---

##### `SourceCodeUrlInput`<sup>Optional</sup> <a name="SourceCodeUrlInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.sourceCodeUrlInput"></a>

```go
func SourceCodeUrlInput() *string
```

- *Type:* *string

---

##### `SpdxLicenseIdInput`<sup>Optional</sup> <a name="SpdxLicenseIdInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.spdxLicenseIdInput"></a>

```go
func SpdxLicenseIdInput() *string
```

- *Type:* *string

---

##### `TemplateBodyInput`<sup>Optional</sup> <a name="TemplateBodyInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.templateBodyInput"></a>

```go
func TemplateBodyInput() *string
```

- *Type:* *string

---

##### `Author`<sup>Required</sup> <a name="Author" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.author"></a>

```go
func Author() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HomePageUrl`<sup>Required</sup> <a name="HomePageUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.homePageUrl"></a>

```go
func HomePageUrl() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `LicenseBody`<sup>Required</sup> <a name="LicenseBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.licenseBody"></a>

```go
func LicenseBody() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReadmeBody`<sup>Required</sup> <a name="ReadmeBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.readmeBody"></a>

```go
func ReadmeBody() *string
```

- *Type:* *string

---

##### `SemanticVersion`<sup>Required</sup> <a name="SemanticVersion" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.semanticVersion"></a>

```go
func SemanticVersion() *string
```

- *Type:* *string

---

##### `SourceCodeUrl`<sup>Required</sup> <a name="SourceCodeUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.sourceCodeUrl"></a>

```go
func SourceCodeUrl() *string
```

- *Type:* *string

---

##### `SpdxLicenseId`<sup>Required</sup> <a name="SpdxLicenseId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.spdxLicenseId"></a>

```go
func SpdxLicenseId() *string
```

- *Type:* *string

---

##### `TemplateBody`<sup>Required</sup> <a name="TemplateBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.templateBody"></a>

```go
func TemplateBody() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServerlessrepoApplicationConfig <a name="ServerlessrepoApplicationConfig" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/serverlessrepoapplication"

&serverlessrepoapplication.ServerlessrepoApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Author: *string,
	Description: *string,
	Name: *string,
	HomePageUrl: *string,
	Labels: *[]*string,
	LicenseBody: *string,
	ReadmeBody: *string,
	SemanticVersion: *string,
	SourceCodeUrl: *string,
	SpdxLicenseId: *string,
	TemplateBody: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.author">Author</a></code> | <code>*string</code> | The name of the author publishing the app. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.description">Description</a></code> | <code>*string</code> | The description of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.name">Name</a></code> | <code>*string</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.homePageUrl">HomePageUrl</a></code> | <code>*string</code> | A URL with more information about the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.labels">Labels</a></code> | <code>*[]*string</code> | Labels to improve discovery of apps in search results. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.licenseBody">LicenseBody</a></code> | <code>*string</code> | A local text file that contains the license of the app. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.readmeBody">ReadmeBody</a></code> | <code>*string</code> | A text readme file in Markdown language that contains a more detailed description of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.semanticVersion">SemanticVersion</a></code> | <code>*string</code> | The semantic version of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.sourceCodeUrl">SourceCodeUrl</a></code> | <code>*string</code> | A link to a public repository for the source code of your application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.spdxLicenseId">SpdxLicenseId</a></code> | <code>*string</code> | A valid identifier from https://spdx.org/licenses/. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.templateBody">TemplateBody</a></code> | <code>*string</code> | The local raw packaged AWS SAM template file of your application. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Author`<sup>Required</sup> <a name="Author" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.author"></a>

```go
Author *string
```

- *Type:* *string

The name of the author publishing the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#author ServerlessrepoApplication#author}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#description ServerlessrepoApplication#description}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#name ServerlessrepoApplication#name}

---

##### `HomePageUrl`<sup>Optional</sup> <a name="HomePageUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.homePageUrl"></a>

```go
HomePageUrl *string
```

- *Type:* *string

A URL with more information about the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#home_page_url ServerlessrepoApplication#home_page_url}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.labels"></a>

```go
Labels *[]*string
```

- *Type:* *[]*string

Labels to improve discovery of apps in search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#labels ServerlessrepoApplication#labels}

---

##### `LicenseBody`<sup>Optional</sup> <a name="LicenseBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.licenseBody"></a>

```go
LicenseBody *string
```

- *Type:* *string

A local text file that contains the license of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#license_body ServerlessrepoApplication#license_body}

---

##### `ReadmeBody`<sup>Optional</sup> <a name="ReadmeBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.readmeBody"></a>

```go
ReadmeBody *string
```

- *Type:* *string

A text readme file in Markdown language that contains a more detailed description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#readme_body ServerlessrepoApplication#readme_body}

---

##### `SemanticVersion`<sup>Optional</sup> <a name="SemanticVersion" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.semanticVersion"></a>

```go
SemanticVersion *string
```

- *Type:* *string

The semantic version of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#semantic_version ServerlessrepoApplication#semantic_version}

---

##### `SourceCodeUrl`<sup>Optional</sup> <a name="SourceCodeUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.sourceCodeUrl"></a>

```go
SourceCodeUrl *string
```

- *Type:* *string

A link to a public repository for the source code of your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#source_code_url ServerlessrepoApplication#source_code_url}

---

##### `SpdxLicenseId`<sup>Optional</sup> <a name="SpdxLicenseId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.spdxLicenseId"></a>

```go
SpdxLicenseId *string
```

- *Type:* *string

A valid identifier from https://spdx.org/licenses/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#spdx_license_id ServerlessrepoApplication#spdx_license_id}

---

##### `TemplateBody`<sup>Optional</sup> <a name="TemplateBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.templateBody"></a>

```go
TemplateBody *string
```

- *Type:* *string

The local raw packaged AWS SAM template file of your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#template_body ServerlessrepoApplication#template_body}

---




# `cloudfrontResponseHeadersPolicy` Submodule <a name="`cloudfrontResponseHeadersPolicy` Submodule" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontResponseHeadersPolicy <a name="CloudfrontResponseHeadersPolicy" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy awscc_cloudfront_response_headers_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicy(scope Construct, id *string, config CloudfrontResponseHeadersPolicyConfig) CloudfrontResponseHeadersPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig">CloudfrontResponseHeadersPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig">CloudfrontResponseHeadersPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putResponseHeadersPolicyConfig">PutResponseHeadersPolicyConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResponseHeadersPolicyConfig` <a name="PutResponseHeadersPolicyConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putResponseHeadersPolicyConfig"></a>

```go
func PutResponseHeadersPolicyConfig(value CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.putResponseHeadersPolicyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontResponseHeadersPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudfrontResponseHeadersPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudfrontResponseHeadersPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudfrontResponseHeadersPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontResponseHeadersPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.responseHeadersPolicyConfig">ResponseHeadersPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.responseHeadersPolicyId">ResponseHeadersPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.responseHeadersPolicyConfigInput">ResponseHeadersPolicyConfigInput</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `ResponseHeadersPolicyConfig`<sup>Required</sup> <a name="ResponseHeadersPolicyConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.responseHeadersPolicyConfig"></a>

```go
func ResponseHeadersPolicyConfig() CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference</a>

---

##### `ResponseHeadersPolicyId`<sup>Required</sup> <a name="ResponseHeadersPolicyId" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.responseHeadersPolicyId"></a>

```go
func ResponseHeadersPolicyId() *string
```

- *Type:* *string

---

##### `ResponseHeadersPolicyConfigInput`<sup>Optional</sup> <a name="ResponseHeadersPolicyConfigInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.responseHeadersPolicyConfigInput"></a>

```go
func ResponseHeadersPolicyConfigInput() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontResponseHeadersPolicyConfig <a name="CloudfrontResponseHeadersPolicyConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

&cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ResponseHeadersPolicyConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.responseHeadersPolicyConfig">ResponseHeadersPolicyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig</a></code> | A response headers policy configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResponseHeadersPolicyConfig`<sup>Required</sup> <a name="ResponseHeadersPolicyConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyConfig.property.responseHeadersPolicyConfig"></a>

```go
ResponseHeadersPolicyConfig CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig</a>

A response headers policy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#response_headers_policy_config CloudfrontResponseHeadersPolicy#response_headers_policy_config}

---

### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

&cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig {
	Name: *string,
	Comment: *string,
	CorsConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig,
	CustomHeadersConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig,
	RemoveHeadersConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig,
	SecurityHeadersConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig,
	ServerTimingHeadersConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig.property.name">Name</a></code> | <code>*string</code> | A name to identify the response headers policy. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig.property.comment">Comment</a></code> | <code>*string</code> | A comment to describe the response headers policy.  The comment cannot be longer than 128 characters. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig.property.corsConfig">CorsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig</a></code> | A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS). |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig.property.customHeadersConfig">CustomHeadersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig</a></code> | A configuration for a set of custom HTTP response headers. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig.property.removeHeadersConfig">RemoveHeadersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig</a></code> | A configuration for a set of HTTP headers to remove from the HTTP response. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig.property.securityHeadersConfig">SecurityHeadersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig</a></code> | A configuration for a set of security-related HTTP response headers. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig.property.serverTimingHeadersConfig">ServerTimingHeadersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig</a></code> | A configuration for enabling the ``Server-Timing`` header in HTTP responses sent from CloudFront. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A name to identify the response headers policy.

The name must be unique for response headers policies in this AWS-account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#name CloudfrontResponseHeadersPolicy#name}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

A comment to describe the response headers policy.  The comment cannot be longer than 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#comment CloudfrontResponseHeadersPolicy#comment}

---

##### `CorsConfig`<sup>Optional</sup> <a name="CorsConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig.property.corsConfig"></a>

```go
CorsConfig CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig</a>

A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#cors_config CloudfrontResponseHeadersPolicy#cors_config}

---

##### `CustomHeadersConfig`<sup>Optional</sup> <a name="CustomHeadersConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig.property.customHeadersConfig"></a>

```go
CustomHeadersConfig CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig</a>

A configuration for a set of custom HTTP response headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#custom_headers_config CloudfrontResponseHeadersPolicy#custom_headers_config}

---

##### `RemoveHeadersConfig`<sup>Optional</sup> <a name="RemoveHeadersConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig.property.removeHeadersConfig"></a>

```go
RemoveHeadersConfig CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig</a>

A configuration for a set of HTTP headers to remove from the HTTP response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#remove_headers_config CloudfrontResponseHeadersPolicy#remove_headers_config}

---

##### `SecurityHeadersConfig`<sup>Optional</sup> <a name="SecurityHeadersConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig.property.securityHeadersConfig"></a>

```go
SecurityHeadersConfig CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig</a>

A configuration for a set of security-related HTTP response headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#security_headers_config CloudfrontResponseHeadersPolicy#security_headers_config}

---

##### `ServerTimingHeadersConfig`<sup>Optional</sup> <a name="ServerTimingHeadersConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfig.property.serverTimingHeadersConfig"></a>

```go
ServerTimingHeadersConfig CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig</a>

A configuration for enabling the ``Server-Timing`` header in HTTP responses sent from CloudFront.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#server_timing_headers_config CloudfrontResponseHeadersPolicy#server_timing_headers_config}

---

### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

&cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig {
	AccessControlAllowCredentials: interface{},
	AccessControlAllowHeaders: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders,
	AccessControlAllowMethods: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods,
	AccessControlAllowOrigins: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins,
	AccessControlExposeHeaders: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders,
	AccessControlMaxAgeSec: *f64,
	OriginOverride: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig.property.accessControlAllowCredentials">AccessControlAllowCredentials</a></code> | <code>interface{}</code> | A Boolean that CloudFront uses as the value for the ``Access-Control-Allow-Credentials`` HTTP response header. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig.property.accessControlAllowHeaders">AccessControlAllowHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders</a></code> | A list of HTTP header names that CloudFront includes as values for the ``Access-Control-Allow-Headers`` HTTP response header. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig.property.accessControlAllowMethods">AccessControlAllowMethods</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods</a></code> | A list of HTTP methods that CloudFront includes as values for the ``Access-Control-Allow-Methods`` HTTP response header. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig.property.accessControlAllowOrigins">AccessControlAllowOrigins</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins</a></code> | A list of origins (domain names) that CloudFront can use as the value for the ``Access-Control-Allow-Origin`` HTTP response header. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig.property.accessControlExposeHeaders">AccessControlExposeHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders</a></code> | A list of HTTP headers that CloudFront includes as values for the ``Access-Control-Expose-Headers`` HTTP response header. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig.property.accessControlMaxAgeSec">AccessControlMaxAgeSec</a></code> | <code>*f64</code> | A number that CloudFront uses as the value for the ``Access-Control-Max-Age`` HTTP response header. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig.property.originOverride">OriginOverride</a></code> | <code>interface{}</code> | A Boolean that determines whether CloudFront overrides HTTP response headers received from the origin with the ones specified in this response headers policy. |

---

##### `AccessControlAllowCredentials`<sup>Optional</sup> <a name="AccessControlAllowCredentials" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig.property.accessControlAllowCredentials"></a>

```go
AccessControlAllowCredentials interface{}
```

- *Type:* interface{}

A Boolean that CloudFront uses as the value for the ``Access-Control-Allow-Credentials`` HTTP response header.

For more information about the `Access-Control-Allow-Credentials` HTTP response header, see [Access-Control-Allow-Credentials](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials) in the MDN Web Docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#access_control_allow_credentials CloudfrontResponseHeadersPolicy#access_control_allow_credentials}

---

##### `AccessControlAllowHeaders`<sup>Optional</sup> <a name="AccessControlAllowHeaders" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig.property.accessControlAllowHeaders"></a>

```go
AccessControlAllowHeaders CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders</a>

A list of HTTP header names that CloudFront includes as values for the ``Access-Control-Allow-Headers`` HTTP response header.

For more information about the `Access-Control-Allow-Headers` HTTP response header, see [Access-Control-Allow-Headers](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) in the MDN Web Docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#access_control_allow_headers CloudfrontResponseHeadersPolicy#access_control_allow_headers}

---

##### `AccessControlAllowMethods`<sup>Optional</sup> <a name="AccessControlAllowMethods" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig.property.accessControlAllowMethods"></a>

```go
AccessControlAllowMethods CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods</a>

A list of HTTP methods that CloudFront includes as values for the ``Access-Control-Allow-Methods`` HTTP response header.

For more information about the `Access-Control-Allow-Methods` HTTP response header, see [Access-Control-Allow-Methods](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) in the MDN Web Docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#access_control_allow_methods CloudfrontResponseHeadersPolicy#access_control_allow_methods}

---

##### `AccessControlAllowOrigins`<sup>Optional</sup> <a name="AccessControlAllowOrigins" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig.property.accessControlAllowOrigins"></a>

```go
AccessControlAllowOrigins CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins</a>

A list of origins (domain names) that CloudFront can use as the value for the ``Access-Control-Allow-Origin`` HTTP response header.

For more information about the `Access-Control-Allow-Origin` HTTP response header, see [Access-Control-Allow-Origin](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) in the MDN Web Docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#access_control_allow_origins CloudfrontResponseHeadersPolicy#access_control_allow_origins}

---

##### `AccessControlExposeHeaders`<sup>Optional</sup> <a name="AccessControlExposeHeaders" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig.property.accessControlExposeHeaders"></a>

```go
AccessControlExposeHeaders CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders</a>

A list of HTTP headers that CloudFront includes as values for the ``Access-Control-Expose-Headers`` HTTP response header.

For more information about the `Access-Control-Expose-Headers` HTTP response header, see [Access-Control-Expose-Headers](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers) in the MDN Web Docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#access_control_expose_headers CloudfrontResponseHeadersPolicy#access_control_expose_headers}

---

##### `AccessControlMaxAgeSec`<sup>Optional</sup> <a name="AccessControlMaxAgeSec" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig.property.accessControlMaxAgeSec"></a>

```go
AccessControlMaxAgeSec *f64
```

- *Type:* *f64

A number that CloudFront uses as the value for the ``Access-Control-Max-Age`` HTTP response header.

For more information about the `Access-Control-Max-Age` HTTP response header, see [Access-Control-Max-Age](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age) in the MDN Web Docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#access_control_max_age_sec CloudfrontResponseHeadersPolicy#access_control_max_age_sec}

---

##### `OriginOverride`<sup>Optional</sup> <a name="OriginOverride" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig.property.originOverride"></a>

```go
OriginOverride interface{}
```

- *Type:* interface{}

A Boolean that determines whether CloudFront overrides HTTP response headers received from the origin with the ones specified in this response headers policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#origin_override CloudfrontResponseHeadersPolicy#origin_override}

---

### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

&cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders {
	Items: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders.property.items">Items</a></code> | <code>*[]*string</code> | The list of HTTP header names. You can specify ``*`` to allow all headers. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders.property.items"></a>

```go
Items *[]*string
```

- *Type:* *[]*string

The list of HTTP header names. You can specify ``*`` to allow all headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}

---

### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

&cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods {
	Items: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods.property.items">Items</a></code> | <code>*[]*string</code> | The list of HTTP methods. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods.property.items"></a>

```go
Items *[]*string
```

- *Type:* *[]*string

The list of HTTP methods.

Valid values are:

* `GET`
* `DELETE`
* `HEAD`
* `OPTIONS`
* `PATCH`
* `POST`
* `PUT`
* `ALL`

`ALL` is a special value that includes all of the listed HTTP methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}

---

### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

&cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins {
	Items: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins.property.items">Items</a></code> | <code>*[]*string</code> | The list of origins (domain names). You can specify ``*`` to allow all origins. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins.property.items"></a>

```go
Items *[]*string
```

- *Type:* *[]*string

The list of origins (domain names). You can specify ``*`` to allow all origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}

---

### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

&cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders {
	Items: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders.property.items">Items</a></code> | <code>*[]*string</code> | The list of HTTP headers. You can specify ``*`` to expose all headers. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders.property.items"></a>

```go
Items *[]*string
```

- *Type:* *[]*string

The list of HTTP headers. You can specify ``*`` to expose all headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}

---

### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

&cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig {
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig.property.items">Items</a></code> | <code>interface{}</code> | The list of HTTP response headers and their values. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

The list of HTTP response headers and their values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}

---

### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

&cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems {
	Header: *string,
	Override: interface{},
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems.property.header">Header</a></code> | <code>*string</code> | The HTTP response header name. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems.property.override">Override</a></code> | <code>interface{}</code> | A Boolean that determines whether CloudFront overrides a response header with the same name received from the origin with the header specified here. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems.property.value">Value</a></code> | <code>*string</code> | The value for the HTTP response header. |

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems.property.header"></a>

```go
Header *string
```

- *Type:* *string

The HTTP response header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#header CloudfrontResponseHeadersPolicy#header}

---

##### `Override`<sup>Optional</sup> <a name="Override" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems.property.override"></a>

```go
Override interface{}
```

- *Type:* interface{}

A Boolean that determines whether CloudFront overrides a response header with the same name received from the origin with the header specified here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItems.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the HTTP response header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#value CloudfrontResponseHeadersPolicy#value}

---

### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

&cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig {
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig.property.items">Items</a></code> | <code>interface{}</code> | The list of HTTP header names. |

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

The list of HTTP header names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#items CloudfrontResponseHeadersPolicy#items}

---

### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

&cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems {
	Header: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems.property.header">Header</a></code> | <code>*string</code> | The HTTP header name. |

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItems.property.header"></a>

```go
Header *string
```

- *Type:* *string

The HTTP header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#header CloudfrontResponseHeadersPolicy#header}

---

### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

&cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig {
	ContentSecurityPolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy,
	ContentTypeOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions,
	FrameOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions,
	ReferrerPolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy,
	StrictTransportSecurity: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity,
	XssProtection: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig.property.contentSecurityPolicy">ContentSecurityPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy</a></code> | The policy directives and their values that CloudFront includes as values for the ``Content-Security-Policy`` HTTP response header. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig.property.contentTypeOptions">ContentTypeOptions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions</a></code> | Determines whether CloudFront includes the ``X-Content-Type-Options`` HTTP response header with its value set to ``nosniff``. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig.property.frameOptions">FrameOptions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions</a></code> | Determines whether CloudFront includes the ``X-Frame-Options`` HTTP response header and the header's value. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig.property.referrerPolicy">ReferrerPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy</a></code> | Determines whether CloudFront includes the ``Referrer-Policy`` HTTP response header and the header's value. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig.property.strictTransportSecurity">StrictTransportSecurity</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity</a></code> | Determines whether CloudFront includes the ``Strict-Transport-Security`` HTTP response header and the header's value. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig.property.xssProtection">XssProtection</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection</a></code> | Determines whether CloudFront includes the ``X-XSS-Protection`` HTTP response header and the header's value. |

---

##### `ContentSecurityPolicy`<sup>Optional</sup> <a name="ContentSecurityPolicy" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig.property.contentSecurityPolicy"></a>

```go
ContentSecurityPolicy CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy</a>

The policy directives and their values that CloudFront includes as values for the ``Content-Security-Policy`` HTTP response header.

For more information about the `Content-Security-Policy` HTTP response header, see [Content-Security-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) in the MDN Web Docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#content_security_policy CloudfrontResponseHeadersPolicy#content_security_policy}

---

##### `ContentTypeOptions`<sup>Optional</sup> <a name="ContentTypeOptions" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig.property.contentTypeOptions"></a>

```go
ContentTypeOptions CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions</a>

Determines whether CloudFront includes the ``X-Content-Type-Options`` HTTP response header with its value set to ``nosniff``.

For more information about the `X-Content-Type-Options` HTTP response header, see [X-Content-Type-Options](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options) in the MDN Web Docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#content_type_options CloudfrontResponseHeadersPolicy#content_type_options}

---

##### `FrameOptions`<sup>Optional</sup> <a name="FrameOptions" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig.property.frameOptions"></a>

```go
FrameOptions CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions</a>

Determines whether CloudFront includes the ``X-Frame-Options`` HTTP response header and the header's value.

For more information about the `X-Frame-Options` HTTP response header, see [X-Frame-Options](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) in the MDN Web Docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#frame_options CloudfrontResponseHeadersPolicy#frame_options}

---

##### `ReferrerPolicy`<sup>Optional</sup> <a name="ReferrerPolicy" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig.property.referrerPolicy"></a>

```go
ReferrerPolicy CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy</a>

Determines whether CloudFront includes the ``Referrer-Policy`` HTTP response header and the header's value.

For more information about the `Referrer-Policy` HTTP response header, see [Referrer-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) in the MDN Web Docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#referrer_policy CloudfrontResponseHeadersPolicy#referrer_policy}

---

##### `StrictTransportSecurity`<sup>Optional</sup> <a name="StrictTransportSecurity" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig.property.strictTransportSecurity"></a>

```go
StrictTransportSecurity CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity</a>

Determines whether CloudFront includes the ``Strict-Transport-Security`` HTTP response header and the header's value.

For more information about the `Strict-Transport-Security` HTTP response header, see [Security headers](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html#understanding-response-headers-policies-security) in the *Amazon CloudFront Developer Guide* and [Strict-Transport-Security](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) in the MDN Web Docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#strict_transport_security CloudfrontResponseHeadersPolicy#strict_transport_security}

---

##### `XssProtection`<sup>Optional</sup> <a name="XssProtection" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig.property.xssProtection"></a>

```go
XssProtection CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection</a>

Determines whether CloudFront includes the ``X-XSS-Protection`` HTTP response header and the header's value.

For more information about the `X-XSS-Protection` HTTP response header, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#xss_protection CloudfrontResponseHeadersPolicy#xss_protection}

---

### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

&cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy {
	ContentSecurityPolicy: *string,
	Override: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy.property.contentSecurityPolicy">ContentSecurityPolicy</a></code> | <code>*string</code> | The policy directives and their values that CloudFront includes as values for the ``Content-Security-Policy`` HTTP response header. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy.property.override">Override</a></code> | <code>interface{}</code> | A Boolean that determines whether CloudFront overrides the ``Content-Security-Policy`` HTTP response header received from the origin with the one specified in this response headers policy. |

---

##### `ContentSecurityPolicy`<sup>Optional</sup> <a name="ContentSecurityPolicy" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy.property.contentSecurityPolicy"></a>

```go
ContentSecurityPolicy *string
```

- *Type:* *string

The policy directives and their values that CloudFront includes as values for the ``Content-Security-Policy`` HTTP response header.

For more information about the `Content-Security-Policy` HTTP response header, see [Content-Security-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) in the MDN Web Docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#content_security_policy CloudfrontResponseHeadersPolicy#content_security_policy}

---

##### `Override`<sup>Optional</sup> <a name="Override" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy.property.override"></a>

```go
Override interface{}
```

- *Type:* interface{}

A Boolean that determines whether CloudFront overrides the ``Content-Security-Policy`` HTTP response header received from the origin with the one specified in this response headers policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}

---

### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

&cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions {
	Override: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions.property.override">Override</a></code> | <code>interface{}</code> | A Boolean that determines whether CloudFront overrides the ``X-Content-Type-Options`` HTTP response header received from the origin with the one specified in this response headers policy. |

---

##### `Override`<sup>Optional</sup> <a name="Override" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions.property.override"></a>

```go
Override interface{}
```

- *Type:* interface{}

A Boolean that determines whether CloudFront overrides the ``X-Content-Type-Options`` HTTP response header received from the origin with the one specified in this response headers policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}

---

### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

&cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions {
	FrameOption: *string,
	Override: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions.property.frameOption">FrameOption</a></code> | <code>*string</code> | The value of the ``X-Frame-Options`` HTTP response header. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions.property.override">Override</a></code> | <code>interface{}</code> | A Boolean that determines whether CloudFront overrides the ``X-Frame-Options`` HTTP response header received from the origin with the one specified in this response headers policy. |

---

##### `FrameOption`<sup>Optional</sup> <a name="FrameOption" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions.property.frameOption"></a>

```go
FrameOption *string
```

- *Type:* *string

The value of the ``X-Frame-Options`` HTTP response header.

Valid values are `DENY` and `SAMEORIGIN`.
For more information about these values, see [X-Frame-Options](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) in the MDN Web Docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#frame_option CloudfrontResponseHeadersPolicy#frame_option}

---

##### `Override`<sup>Optional</sup> <a name="Override" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions.property.override"></a>

```go
Override interface{}
```

- *Type:* interface{}

A Boolean that determines whether CloudFront overrides the ``X-Frame-Options`` HTTP response header received from the origin with the one specified in this response headers policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}

---

### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

&cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy {
	Override: interface{},
	ReferrerPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy.property.override">Override</a></code> | <code>interface{}</code> | A Boolean that determines whether CloudFront overrides the ``Referrer-Policy`` HTTP response header received from the origin with the one specified in this response headers policy. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy.property.referrerPolicy">ReferrerPolicy</a></code> | <code>*string</code> | Determines whether CloudFront includes the ``Referrer-Policy`` HTTP response header and the header's value. |

---

##### `Override`<sup>Optional</sup> <a name="Override" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy.property.override"></a>

```go
Override interface{}
```

- *Type:* interface{}

A Boolean that determines whether CloudFront overrides the ``Referrer-Policy`` HTTP response header received from the origin with the one specified in this response headers policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}

---

##### `ReferrerPolicy`<sup>Optional</sup> <a name="ReferrerPolicy" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy.property.referrerPolicy"></a>

```go
ReferrerPolicy *string
```

- *Type:* *string

Determines whether CloudFront includes the ``Referrer-Policy`` HTTP response header and the header's value.

For more information about the `Referrer-Policy` HTTP response header, see [Referrer-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) in the MDN Web Docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#referrer_policy CloudfrontResponseHeadersPolicy#referrer_policy}

---

### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

&cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity {
	AccessControlMaxAgeSec: *f64,
	IncludeSubdomains: interface{},
	Override: interface{},
	Preload: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity.property.accessControlMaxAgeSec">AccessControlMaxAgeSec</a></code> | <code>*f64</code> | A number that CloudFront uses as the value for the ``max-age`` directive in the ``Strict-Transport-Security`` HTTP response header. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity.property.includeSubdomains">IncludeSubdomains</a></code> | <code>interface{}</code> | A Boolean that determines whether CloudFront includes the ``includeSubDomains`` directive in the ``Strict-Transport-Security`` HTTP response header. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity.property.override">Override</a></code> | <code>interface{}</code> | A Boolean that determines whether CloudFront overrides the ``Strict-Transport-Security`` HTTP response header received from the origin with the one specified in this response headers policy. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity.property.preload">Preload</a></code> | <code>interface{}</code> | A Boolean that determines whether CloudFront includes the ``preload`` directive in the ``Strict-Transport-Security`` HTTP response header. |

---

##### `AccessControlMaxAgeSec`<sup>Optional</sup> <a name="AccessControlMaxAgeSec" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity.property.accessControlMaxAgeSec"></a>

```go
AccessControlMaxAgeSec *f64
```

- *Type:* *f64

A number that CloudFront uses as the value for the ``max-age`` directive in the ``Strict-Transport-Security`` HTTP response header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#access_control_max_age_sec CloudfrontResponseHeadersPolicy#access_control_max_age_sec}

---

##### `IncludeSubdomains`<sup>Optional</sup> <a name="IncludeSubdomains" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity.property.includeSubdomains"></a>

```go
IncludeSubdomains interface{}
```

- *Type:* interface{}

A Boolean that determines whether CloudFront includes the ``includeSubDomains`` directive in the ``Strict-Transport-Security`` HTTP response header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#include_subdomains CloudfrontResponseHeadersPolicy#include_subdomains}

---

##### `Override`<sup>Optional</sup> <a name="Override" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity.property.override"></a>

```go
Override interface{}
```

- *Type:* interface{}

A Boolean that determines whether CloudFront overrides the ``Strict-Transport-Security`` HTTP response header received from the origin with the one specified in this response headers policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}

---

##### `Preload`<sup>Optional</sup> <a name="Preload" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity.property.preload"></a>

```go
Preload interface{}
```

- *Type:* interface{}

A Boolean that determines whether CloudFront includes the ``preload`` directive in the ``Strict-Transport-Security`` HTTP response header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#preload CloudfrontResponseHeadersPolicy#preload}

---

### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

&cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection {
	ModeBlock: interface{},
	Override: interface{},
	Protection: interface{},
	ReportUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection.property.modeBlock">ModeBlock</a></code> | <code>interface{}</code> | A Boolean that determines whether CloudFront includes the ``mode=block`` directive in the ``X-XSS-Protection`` header. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection.property.override">Override</a></code> | <code>interface{}</code> | A Boolean that determines whether CloudFront overrides the ``X-XSS-Protection`` HTTP response header received from the origin with the one specified in this response headers policy. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection.property.protection">Protection</a></code> | <code>interface{}</code> | A Boolean that determines the value of the ``X-XSS-Protection`` HTTP response header. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection.property.reportUri">ReportUri</a></code> | <code>*string</code> | A reporting URI, which CloudFront uses as the value of the ``report`` directive in the ``X-XSS-Protection`` header. |

---

##### `ModeBlock`<sup>Optional</sup> <a name="ModeBlock" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection.property.modeBlock"></a>

```go
ModeBlock interface{}
```

- *Type:* interface{}

A Boolean that determines whether CloudFront includes the ``mode=block`` directive in the ``X-XSS-Protection`` header.

For more information about this directive, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#mode_block CloudfrontResponseHeadersPolicy#mode_block}

---

##### `Override`<sup>Optional</sup> <a name="Override" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection.property.override"></a>

```go
Override interface{}
```

- *Type:* interface{}

A Boolean that determines whether CloudFront overrides the ``X-XSS-Protection`` HTTP response header received from the origin with the one specified in this response headers policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#override CloudfrontResponseHeadersPolicy#override}

---

##### `Protection`<sup>Optional</sup> <a name="Protection" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection.property.protection"></a>

```go
Protection interface{}
```

- *Type:* interface{}

A Boolean that determines the value of the ``X-XSS-Protection`` HTTP response header.

When this setting is `true`, the value of the `X-XSS-Protection` header is `1`. When this setting is `false`, the value of the `X-XSS-Protection` header is `0`.
For more information about these settings, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#protection CloudfrontResponseHeadersPolicy#protection}

---

##### `ReportUri`<sup>Optional</sup> <a name="ReportUri" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection.property.reportUri"></a>

```go
ReportUri *string
```

- *Type:* *string

A reporting URI, which CloudFront uses as the value of the ``report`` directive in the ``X-XSS-Protection`` header.

You cannot specify a `ReportUri` when `ModeBlock` is `true`.
For more information about using a reporting URL, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#report_uri CloudfrontResponseHeadersPolicy#report_uri}

---

### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

&cloudfrontresponseheaderspolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig {
	Enabled: interface{},
	SamplingRate: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | A Boolean that determines whether CloudFront adds the ``Server-Timing`` header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig.property.samplingRate">SamplingRate</a></code> | <code>*f64</code> | A number 0?100 (inclusive) that specifies the percentage of responses that you want CloudFront to add the ``Server-Timing`` header to. When you set the sampling rate to 100, CloudFront adds the ``Server-Timing`` header to the HTTP response for every request that matches the cache behavior that this response headers policy is attached to. When you set it to 50, CloudFront adds the header to 50% of the responses for requests that match the cache behavior. You can set the sampling rate to any number 0?100 with up to four decimal places. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

A Boolean that determines whether CloudFront adds the ``Server-Timing`` header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#enabled CloudfrontResponseHeadersPolicy#enabled}

---

##### `SamplingRate`<sup>Optional</sup> <a name="SamplingRate" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig.property.samplingRate"></a>

```go
SamplingRate *f64
```

- *Type:* *f64

A number 0?100 (inclusive) that specifies the percentage of responses that you want CloudFront to add the ``Server-Timing`` header to. When you set the sampling rate to 100, CloudFront adds the ``Server-Timing`` header to the HTTP response for every request that matches the cache behavior that this response headers policy is attached to. When you set it to 50, CloudFront adds the header to 50% of the responses for requests that match the cache behavior. You can set the sampling rate to any number 0?100 with up to four decimal places.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_response_headers_policy#sampling_rate CloudfrontResponseHeadersPolicy#sampling_rate}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetItems` <a name="ResetItems" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.property.itemsInput">ItemsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.property.items">Items</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.property.itemsInput"></a>

```go
func ItemsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.property.items"></a>

```go
func Items() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetItems` <a name="ResetItems" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.property.itemsInput">ItemsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.property.items">Items</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.property.itemsInput"></a>

```go
func ItemsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.property.items"></a>

```go
func Items() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetItems` <a name="ResetItems" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.property.itemsInput">ItemsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.property.items">Items</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.property.itemsInput"></a>

```go
func ItemsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.property.items"></a>

```go
func Items() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetItems` <a name="ResetItems" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.property.itemsInput">ItemsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.property.items">Items</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.property.itemsInput"></a>

```go
func ItemsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.property.items"></a>

```go
func Items() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.putAccessControlAllowHeaders">PutAccessControlAllowHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.putAccessControlAllowMethods">PutAccessControlAllowMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.putAccessControlAllowOrigins">PutAccessControlAllowOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.putAccessControlExposeHeaders">PutAccessControlExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.resetAccessControlAllowCredentials">ResetAccessControlAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.resetAccessControlAllowHeaders">ResetAccessControlAllowHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.resetAccessControlAllowMethods">ResetAccessControlAllowMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.resetAccessControlAllowOrigins">ResetAccessControlAllowOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.resetAccessControlExposeHeaders">ResetAccessControlExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.resetAccessControlMaxAgeSec">ResetAccessControlMaxAgeSec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.resetOriginOverride">ResetOriginOverride</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessControlAllowHeaders` <a name="PutAccessControlAllowHeaders" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.putAccessControlAllowHeaders"></a>

```go
func PutAccessControlAllowHeaders(value CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.putAccessControlAllowHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeaders</a>

---

##### `PutAccessControlAllowMethods` <a name="PutAccessControlAllowMethods" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.putAccessControlAllowMethods"></a>

```go
func PutAccessControlAllowMethods(value CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.putAccessControlAllowMethods.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethods</a>

---

##### `PutAccessControlAllowOrigins` <a name="PutAccessControlAllowOrigins" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.putAccessControlAllowOrigins"></a>

```go
func PutAccessControlAllowOrigins(value CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.putAccessControlAllowOrigins.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOrigins</a>

---

##### `PutAccessControlExposeHeaders` <a name="PutAccessControlExposeHeaders" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.putAccessControlExposeHeaders"></a>

```go
func PutAccessControlExposeHeaders(value CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.putAccessControlExposeHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeaders</a>

---

##### `ResetAccessControlAllowCredentials` <a name="ResetAccessControlAllowCredentials" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.resetAccessControlAllowCredentials"></a>

```go
func ResetAccessControlAllowCredentials()
```

##### `ResetAccessControlAllowHeaders` <a name="ResetAccessControlAllowHeaders" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.resetAccessControlAllowHeaders"></a>

```go
func ResetAccessControlAllowHeaders()
```

##### `ResetAccessControlAllowMethods` <a name="ResetAccessControlAllowMethods" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.resetAccessControlAllowMethods"></a>

```go
func ResetAccessControlAllowMethods()
```

##### `ResetAccessControlAllowOrigins` <a name="ResetAccessControlAllowOrigins" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.resetAccessControlAllowOrigins"></a>

```go
func ResetAccessControlAllowOrigins()
```

##### `ResetAccessControlExposeHeaders` <a name="ResetAccessControlExposeHeaders" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.resetAccessControlExposeHeaders"></a>

```go
func ResetAccessControlExposeHeaders()
```

##### `ResetAccessControlMaxAgeSec` <a name="ResetAccessControlMaxAgeSec" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.resetAccessControlMaxAgeSec"></a>

```go
func ResetAccessControlMaxAgeSec()
```

##### `ResetOriginOverride` <a name="ResetOriginOverride" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.resetOriginOverride"></a>

```go
func ResetOriginOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowHeaders">AccessControlAllowHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowMethods">AccessControlAllowMethods</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowOrigins">AccessControlAllowOrigins</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlExposeHeaders">AccessControlExposeHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowCredentialsInput">AccessControlAllowCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowHeadersInput">AccessControlAllowHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowMethodsInput">AccessControlAllowMethodsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowOriginsInput">AccessControlAllowOriginsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlExposeHeadersInput">AccessControlExposeHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlMaxAgeSecInput">AccessControlMaxAgeSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.originOverrideInput">OriginOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowCredentials">AccessControlAllowCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlMaxAgeSec">AccessControlMaxAgeSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.originOverride">OriginOverride</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessControlAllowHeaders`<sup>Required</sup> <a name="AccessControlAllowHeaders" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowHeaders"></a>

```go
func AccessControlAllowHeaders() CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowHeadersOutputReference</a>

---

##### `AccessControlAllowMethods`<sup>Required</sup> <a name="AccessControlAllowMethods" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowMethods"></a>

```go
func AccessControlAllowMethods() CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowMethodsOutputReference</a>

---

##### `AccessControlAllowOrigins`<sup>Required</sup> <a name="AccessControlAllowOrigins" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowOrigins"></a>

```go
func AccessControlAllowOrigins() CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlAllowOriginsOutputReference</a>

---

##### `AccessControlExposeHeaders`<sup>Required</sup> <a name="AccessControlExposeHeaders" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlExposeHeaders"></a>

```go
func AccessControlExposeHeaders() CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigAccessControlExposeHeadersOutputReference</a>

---

##### `AccessControlAllowCredentialsInput`<sup>Optional</sup> <a name="AccessControlAllowCredentialsInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowCredentialsInput"></a>

```go
func AccessControlAllowCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessControlAllowHeadersInput`<sup>Optional</sup> <a name="AccessControlAllowHeadersInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowHeadersInput"></a>

```go
func AccessControlAllowHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `AccessControlAllowMethodsInput`<sup>Optional</sup> <a name="AccessControlAllowMethodsInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowMethodsInput"></a>

```go
func AccessControlAllowMethodsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessControlAllowOriginsInput`<sup>Optional</sup> <a name="AccessControlAllowOriginsInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowOriginsInput"></a>

```go
func AccessControlAllowOriginsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessControlExposeHeadersInput`<sup>Optional</sup> <a name="AccessControlExposeHeadersInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlExposeHeadersInput"></a>

```go
func AccessControlExposeHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `AccessControlMaxAgeSecInput`<sup>Optional</sup> <a name="AccessControlMaxAgeSecInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlMaxAgeSecInput"></a>

```go
func AccessControlMaxAgeSecInput() *f64
```

- *Type:* *f64

---

##### `OriginOverrideInput`<sup>Optional</sup> <a name="OriginOverrideInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.originOverrideInput"></a>

```go
func OriginOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `AccessControlAllowCredentials`<sup>Required</sup> <a name="AccessControlAllowCredentials" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlAllowCredentials"></a>

```go
func AccessControlAllowCredentials() interface{}
```

- *Type:* interface{}

---

##### `AccessControlMaxAgeSec`<sup>Required</sup> <a name="AccessControlMaxAgeSec" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.accessControlMaxAgeSec"></a>

```go
func AccessControlMaxAgeSec() *f64
```

- *Type:* *f64

---

##### `OriginOverride`<sup>Required</sup> <a name="OriginOverride" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.originOverride"></a>

```go
func OriginOverride() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.get"></a>

```go
func Get(index *f64) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.resetOverride">ResetOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetOverride` <a name="ResetOverride" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.resetOverride"></a>

```go
func ResetOverride()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.headerInput">HeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.overrideInput">OverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.header">Header</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.override">Override</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.headerInput"></a>

```go
func HeaderInput() *string
```

- *Type:* *string

---

##### `OverrideInput`<sup>Optional</sup> <a name="OverrideInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.overrideInput"></a>

```go
func OverrideInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.header"></a>

```go
func Header() *string
```

- *Type:* *string

---

##### `Override`<sup>Required</sup> <a name="Override" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.override"></a>

```go
func Override() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetItems` <a name="ResetItems" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.property.items">Items</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.property.items"></a>

```go
func Items() CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.putCorsConfig">PutCorsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.putCustomHeadersConfig">PutCustomHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.putRemoveHeadersConfig">PutRemoveHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.putSecurityHeadersConfig">PutSecurityHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.putServerTimingHeadersConfig">PutServerTimingHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.resetCorsConfig">ResetCorsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.resetCustomHeadersConfig">ResetCustomHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.resetRemoveHeadersConfig">ResetRemoveHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.resetSecurityHeadersConfig">ResetSecurityHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.resetServerTimingHeadersConfig">ResetServerTimingHeadersConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCorsConfig` <a name="PutCorsConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.putCorsConfig"></a>

```go
func PutCorsConfig(value CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.putCorsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfig</a>

---

##### `PutCustomHeadersConfig` <a name="PutCustomHeadersConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.putCustomHeadersConfig"></a>

```go
func PutCustomHeadersConfig(value CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.putCustomHeadersConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfig</a>

---

##### `PutRemoveHeadersConfig` <a name="PutRemoveHeadersConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.putRemoveHeadersConfig"></a>

```go
func PutRemoveHeadersConfig(value CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.putRemoveHeadersConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfig</a>

---

##### `PutSecurityHeadersConfig` <a name="PutSecurityHeadersConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.putSecurityHeadersConfig"></a>

```go
func PutSecurityHeadersConfig(value CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.putSecurityHeadersConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfig</a>

---

##### `PutServerTimingHeadersConfig` <a name="PutServerTimingHeadersConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.putServerTimingHeadersConfig"></a>

```go
func PutServerTimingHeadersConfig(value CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.putServerTimingHeadersConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfig</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetCorsConfig` <a name="ResetCorsConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.resetCorsConfig"></a>

```go
func ResetCorsConfig()
```

##### `ResetCustomHeadersConfig` <a name="ResetCustomHeadersConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.resetCustomHeadersConfig"></a>

```go
func ResetCustomHeadersConfig()
```

##### `ResetRemoveHeadersConfig` <a name="ResetRemoveHeadersConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.resetRemoveHeadersConfig"></a>

```go
func ResetRemoveHeadersConfig()
```

##### `ResetSecurityHeadersConfig` <a name="ResetSecurityHeadersConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.resetSecurityHeadersConfig"></a>

```go
func ResetSecurityHeadersConfig()
```

##### `ResetServerTimingHeadersConfig` <a name="ResetServerTimingHeadersConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.resetServerTimingHeadersConfig"></a>

```go
func ResetServerTimingHeadersConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.corsConfig">CorsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.customHeadersConfig">CustomHeadersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.removeHeadersConfig">RemoveHeadersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.securityHeadersConfig">SecurityHeadersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.serverTimingHeadersConfig">ServerTimingHeadersConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.corsConfigInput">CorsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.customHeadersConfigInput">CustomHeadersConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.removeHeadersConfigInput">RemoveHeadersConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.securityHeadersConfigInput">SecurityHeadersConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.serverTimingHeadersConfigInput">ServerTimingHeadersConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CorsConfig`<sup>Required</sup> <a name="CorsConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.corsConfig"></a>

```go
func CorsConfig() CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCorsConfigOutputReference</a>

---

##### `CustomHeadersConfig`<sup>Required</sup> <a name="CustomHeadersConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.customHeadersConfig"></a>

```go
func CustomHeadersConfig() CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigCustomHeadersConfigOutputReference</a>

---

##### `RemoveHeadersConfig`<sup>Required</sup> <a name="RemoveHeadersConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.removeHeadersConfig"></a>

```go
func RemoveHeadersConfig() CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference</a>

---

##### `SecurityHeadersConfig`<sup>Required</sup> <a name="SecurityHeadersConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.securityHeadersConfig"></a>

```go
func SecurityHeadersConfig() CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference</a>

---

##### `ServerTimingHeadersConfig`<sup>Required</sup> <a name="ServerTimingHeadersConfig" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.serverTimingHeadersConfig"></a>

```go
func ServerTimingHeadersConfig() CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `CorsConfigInput`<sup>Optional</sup> <a name="CorsConfigInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.corsConfigInput"></a>

```go
func CorsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `CustomHeadersConfigInput`<sup>Optional</sup> <a name="CustomHeadersConfigInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.customHeadersConfigInput"></a>

```go
func CustomHeadersConfigInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RemoveHeadersConfigInput`<sup>Optional</sup> <a name="RemoveHeadersConfigInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.removeHeadersConfigInput"></a>

```go
func RemoveHeadersConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityHeadersConfigInput`<sup>Optional</sup> <a name="SecurityHeadersConfigInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.securityHeadersConfigInput"></a>

```go
func SecurityHeadersConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ServerTimingHeadersConfigInput`<sup>Optional</sup> <a name="ServerTimingHeadersConfigInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.serverTimingHeadersConfigInput"></a>

```go
func ServerTimingHeadersConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.get"></a>

```go
func Get(index *f64) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.resetHeader"></a>

```go
func ResetHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.property.headerInput">HeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.property.header">Header</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.property.headerInput"></a>

```go
func HeaderInput() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.property.header"></a>

```go
func Header() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetItems` <a name="ResetItems" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.property.items">Items</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.property.items"></a>

```go
func Items() CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigItemsList</a>

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigRemoveHeadersConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.resetContentSecurityPolicy">ResetContentSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.resetOverride">ResetOverride</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentSecurityPolicy` <a name="ResetContentSecurityPolicy" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.resetContentSecurityPolicy"></a>

```go
func ResetContentSecurityPolicy()
```

##### `ResetOverride` <a name="ResetOverride" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.resetOverride"></a>

```go
func ResetOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.contentSecurityPolicyInput">ContentSecurityPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.overrideInput">OverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.contentSecurityPolicy">ContentSecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.override">Override</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentSecurityPolicyInput`<sup>Optional</sup> <a name="ContentSecurityPolicyInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.contentSecurityPolicyInput"></a>

```go
func ContentSecurityPolicyInput() *string
```

- *Type:* *string

---

##### `OverrideInput`<sup>Optional</sup> <a name="OverrideInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.overrideInput"></a>

```go
func OverrideInput() interface{}
```

- *Type:* interface{}

---

##### `ContentSecurityPolicy`<sup>Required</sup> <a name="ContentSecurityPolicy" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.contentSecurityPolicy"></a>

```go
func ContentSecurityPolicy() *string
```

- *Type:* *string

---

##### `Override`<sup>Required</sup> <a name="Override" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.override"></a>

```go
func Override() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.resetOverride">ResetOverride</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOverride` <a name="ResetOverride" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.resetOverride"></a>

```go
func ResetOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.property.overrideInput">OverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.property.override">Override</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OverrideInput`<sup>Optional</sup> <a name="OverrideInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.property.overrideInput"></a>

```go
func OverrideInput() interface{}
```

- *Type:* interface{}

---

##### `Override`<sup>Required</sup> <a name="Override" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.property.override"></a>

```go
func Override() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.resetFrameOption">ResetFrameOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.resetOverride">ResetOverride</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrameOption` <a name="ResetFrameOption" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.resetFrameOption"></a>

```go
func ResetFrameOption()
```

##### `ResetOverride` <a name="ResetOverride" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.resetOverride"></a>

```go
func ResetOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.frameOptionInput">FrameOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.overrideInput">OverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.frameOption">FrameOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.override">Override</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrameOptionInput`<sup>Optional</sup> <a name="FrameOptionInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.frameOptionInput"></a>

```go
func FrameOptionInput() *string
```

- *Type:* *string

---

##### `OverrideInput`<sup>Optional</sup> <a name="OverrideInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.overrideInput"></a>

```go
func OverrideInput() interface{}
```

- *Type:* interface{}

---

##### `FrameOption`<sup>Required</sup> <a name="FrameOption" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.frameOption"></a>

```go
func FrameOption() *string
```

- *Type:* *string

---

##### `Override`<sup>Required</sup> <a name="Override" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.override"></a>

```go
func Override() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.putContentSecurityPolicy">PutContentSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.putContentTypeOptions">PutContentTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.putFrameOptions">PutFrameOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.putReferrerPolicy">PutReferrerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.putStrictTransportSecurity">PutStrictTransportSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.putXssProtection">PutXssProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.resetContentSecurityPolicy">ResetContentSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.resetContentTypeOptions">ResetContentTypeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.resetFrameOptions">ResetFrameOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.resetReferrerPolicy">ResetReferrerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.resetStrictTransportSecurity">ResetStrictTransportSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.resetXssProtection">ResetXssProtection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContentSecurityPolicy` <a name="PutContentSecurityPolicy" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.putContentSecurityPolicy"></a>

```go
func PutContentSecurityPolicy(value CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.putContentSecurityPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicy</a>

---

##### `PutContentTypeOptions` <a name="PutContentTypeOptions" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.putContentTypeOptions"></a>

```go
func PutContentTypeOptions(value CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.putContentTypeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptions</a>

---

##### `PutFrameOptions` <a name="PutFrameOptions" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.putFrameOptions"></a>

```go
func PutFrameOptions(value CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.putFrameOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptions</a>

---

##### `PutReferrerPolicy` <a name="PutReferrerPolicy" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.putReferrerPolicy"></a>

```go
func PutReferrerPolicy(value CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.putReferrerPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicy</a>

---

##### `PutStrictTransportSecurity` <a name="PutStrictTransportSecurity" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.putStrictTransportSecurity"></a>

```go
func PutStrictTransportSecurity(value CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.putStrictTransportSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurity</a>

---

##### `PutXssProtection` <a name="PutXssProtection" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.putXssProtection"></a>

```go
func PutXssProtection(value CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.putXssProtection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtection</a>

---

##### `ResetContentSecurityPolicy` <a name="ResetContentSecurityPolicy" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.resetContentSecurityPolicy"></a>

```go
func ResetContentSecurityPolicy()
```

##### `ResetContentTypeOptions` <a name="ResetContentTypeOptions" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.resetContentTypeOptions"></a>

```go
func ResetContentTypeOptions()
```

##### `ResetFrameOptions` <a name="ResetFrameOptions" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.resetFrameOptions"></a>

```go
func ResetFrameOptions()
```

##### `ResetReferrerPolicy` <a name="ResetReferrerPolicy" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.resetReferrerPolicy"></a>

```go
func ResetReferrerPolicy()
```

##### `ResetStrictTransportSecurity` <a name="ResetStrictTransportSecurity" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.resetStrictTransportSecurity"></a>

```go
func ResetStrictTransportSecurity()
```

##### `ResetXssProtection` <a name="ResetXssProtection" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.resetXssProtection"></a>

```go
func ResetXssProtection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.contentSecurityPolicy">ContentSecurityPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.contentTypeOptions">ContentTypeOptions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.frameOptions">FrameOptions</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.referrerPolicy">ReferrerPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.strictTransportSecurity">StrictTransportSecurity</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.xssProtection">XssProtection</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.contentSecurityPolicyInput">ContentSecurityPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.contentTypeOptionsInput">ContentTypeOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.frameOptionsInput">FrameOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.referrerPolicyInput">ReferrerPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.strictTransportSecurityInput">StrictTransportSecurityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.xssProtectionInput">XssProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentSecurityPolicy`<sup>Required</sup> <a name="ContentSecurityPolicy" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.contentSecurityPolicy"></a>

```go
func ContentSecurityPolicy() CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentSecurityPolicyOutputReference</a>

---

##### `ContentTypeOptions`<sup>Required</sup> <a name="ContentTypeOptions" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.contentTypeOptions"></a>

```go
func ContentTypeOptions() CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigContentTypeOptionsOutputReference</a>

---

##### `FrameOptions`<sup>Required</sup> <a name="FrameOptions" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.frameOptions"></a>

```go
func FrameOptions() CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigFrameOptionsOutputReference</a>

---

##### `ReferrerPolicy`<sup>Required</sup> <a name="ReferrerPolicy" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.referrerPolicy"></a>

```go
func ReferrerPolicy() CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference</a>

---

##### `StrictTransportSecurity`<sup>Required</sup> <a name="StrictTransportSecurity" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.strictTransportSecurity"></a>

```go
func StrictTransportSecurity() CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference</a>

---

##### `XssProtection`<sup>Required</sup> <a name="XssProtection" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.xssProtection"></a>

```go
func XssProtection() CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference">CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference</a>

---

##### `ContentSecurityPolicyInput`<sup>Optional</sup> <a name="ContentSecurityPolicyInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.contentSecurityPolicyInput"></a>

```go
func ContentSecurityPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `ContentTypeOptionsInput`<sup>Optional</sup> <a name="ContentTypeOptionsInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.contentTypeOptionsInput"></a>

```go
func ContentTypeOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `FrameOptionsInput`<sup>Optional</sup> <a name="FrameOptionsInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.frameOptionsInput"></a>

```go
func FrameOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `ReferrerPolicyInput`<sup>Optional</sup> <a name="ReferrerPolicyInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.referrerPolicyInput"></a>

```go
func ReferrerPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `StrictTransportSecurityInput`<sup>Optional</sup> <a name="StrictTransportSecurityInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.strictTransportSecurityInput"></a>

```go
func StrictTransportSecurityInput() interface{}
```

- *Type:* interface{}

---

##### `XssProtectionInput`<sup>Optional</sup> <a name="XssProtectionInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.xssProtectionInput"></a>

```go
func XssProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.resetOverride">ResetOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.resetReferrerPolicy">ResetReferrerPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOverride` <a name="ResetOverride" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.resetOverride"></a>

```go
func ResetOverride()
```

##### `ResetReferrerPolicy` <a name="ResetReferrerPolicy" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.resetReferrerPolicy"></a>

```go
func ResetReferrerPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.overrideInput">OverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.referrerPolicyInput">ReferrerPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.override">Override</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.referrerPolicy">ReferrerPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OverrideInput`<sup>Optional</sup> <a name="OverrideInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.overrideInput"></a>

```go
func OverrideInput() interface{}
```

- *Type:* interface{}

---

##### `ReferrerPolicyInput`<sup>Optional</sup> <a name="ReferrerPolicyInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.referrerPolicyInput"></a>

```go
func ReferrerPolicyInput() *string
```

- *Type:* *string

---

##### `Override`<sup>Required</sup> <a name="Override" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.override"></a>

```go
func Override() interface{}
```

- *Type:* interface{}

---

##### `ReferrerPolicy`<sup>Required</sup> <a name="ReferrerPolicy" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.referrerPolicy"></a>

```go
func ReferrerPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigReferrerPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.resetAccessControlMaxAgeSec">ResetAccessControlMaxAgeSec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.resetIncludeSubdomains">ResetIncludeSubdomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.resetOverride">ResetOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.resetPreload">ResetPreload</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessControlMaxAgeSec` <a name="ResetAccessControlMaxAgeSec" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.resetAccessControlMaxAgeSec"></a>

```go
func ResetAccessControlMaxAgeSec()
```

##### `ResetIncludeSubdomains` <a name="ResetIncludeSubdomains" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.resetIncludeSubdomains"></a>

```go
func ResetIncludeSubdomains()
```

##### `ResetOverride` <a name="ResetOverride" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.resetOverride"></a>

```go
func ResetOverride()
```

##### `ResetPreload` <a name="ResetPreload" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.resetPreload"></a>

```go
func ResetPreload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.accessControlMaxAgeSecInput">AccessControlMaxAgeSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.includeSubdomainsInput">IncludeSubdomainsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.overrideInput">OverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.preloadInput">PreloadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.accessControlMaxAgeSec">AccessControlMaxAgeSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.includeSubdomains">IncludeSubdomains</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.override">Override</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.preload">Preload</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessControlMaxAgeSecInput`<sup>Optional</sup> <a name="AccessControlMaxAgeSecInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.accessControlMaxAgeSecInput"></a>

```go
func AccessControlMaxAgeSecInput() *f64
```

- *Type:* *f64

---

##### `IncludeSubdomainsInput`<sup>Optional</sup> <a name="IncludeSubdomainsInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.includeSubdomainsInput"></a>

```go
func IncludeSubdomainsInput() interface{}
```

- *Type:* interface{}

---

##### `OverrideInput`<sup>Optional</sup> <a name="OverrideInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.overrideInput"></a>

```go
func OverrideInput() interface{}
```

- *Type:* interface{}

---

##### `PreloadInput`<sup>Optional</sup> <a name="PreloadInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.preloadInput"></a>

```go
func PreloadInput() interface{}
```

- *Type:* interface{}

---

##### `AccessControlMaxAgeSec`<sup>Required</sup> <a name="AccessControlMaxAgeSec" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.accessControlMaxAgeSec"></a>

```go
func AccessControlMaxAgeSec() *f64
```

- *Type:* *f64

---

##### `IncludeSubdomains`<sup>Required</sup> <a name="IncludeSubdomains" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.includeSubdomains"></a>

```go
func IncludeSubdomains() interface{}
```

- *Type:* interface{}

---

##### `Override`<sup>Required</sup> <a name="Override" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.override"></a>

```go
func Override() interface{}
```

- *Type:* interface{}

---

##### `Preload`<sup>Required</sup> <a name="Preload" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.preload"></a>

```go
func Preload() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigStrictTransportSecurityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.resetModeBlock">ResetModeBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.resetOverride">ResetOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.resetProtection">ResetProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.resetReportUri">ResetReportUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModeBlock` <a name="ResetModeBlock" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.resetModeBlock"></a>

```go
func ResetModeBlock()
```

##### `ResetOverride` <a name="ResetOverride" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.resetOverride"></a>

```go
func ResetOverride()
```

##### `ResetProtection` <a name="ResetProtection" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.resetProtection"></a>

```go
func ResetProtection()
```

##### `ResetReportUri` <a name="ResetReportUri" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.resetReportUri"></a>

```go
func ResetReportUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.modeBlockInput">ModeBlockInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.overrideInput">OverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.protectionInput">ProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.reportUriInput">ReportUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.modeBlock">ModeBlock</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.override">Override</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.protection">Protection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.reportUri">ReportUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeBlockInput`<sup>Optional</sup> <a name="ModeBlockInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.modeBlockInput"></a>

```go
func ModeBlockInput() interface{}
```

- *Type:* interface{}

---

##### `OverrideInput`<sup>Optional</sup> <a name="OverrideInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.overrideInput"></a>

```go
func OverrideInput() interface{}
```

- *Type:* interface{}

---

##### `ProtectionInput`<sup>Optional</sup> <a name="ProtectionInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.protectionInput"></a>

```go
func ProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `ReportUriInput`<sup>Optional</sup> <a name="ReportUriInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.reportUriInput"></a>

```go
func ReportUriInput() *string
```

- *Type:* *string

---

##### `ModeBlock`<sup>Required</sup> <a name="ModeBlock" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.modeBlock"></a>

```go
func ModeBlock() interface{}
```

- *Type:* interface{}

---

##### `Override`<sup>Required</sup> <a name="Override" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.override"></a>

```go
func Override() interface{}
```

- *Type:* interface{}

---

##### `Protection`<sup>Required</sup> <a name="Protection" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.protection"></a>

```go
func Protection() interface{}
```

- *Type:* interface{}

---

##### `ReportUri`<sup>Required</sup> <a name="ReportUri" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.reportUri"></a>

```go
func ReportUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigSecurityHeadersConfigXssProtectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference <a name="CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontresponseheaderspolicy"

cloudfrontresponseheaderspolicy.NewCloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.resetSamplingRate">ResetSamplingRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetSamplingRate` <a name="ResetSamplingRate" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.resetSamplingRate"></a>

```go
func ResetSamplingRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.samplingRateInput">SamplingRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.samplingRate">SamplingRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SamplingRateInput`<sup>Optional</sup> <a name="SamplingRateInput" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.samplingRateInput"></a>

```go
func SamplingRateInput() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `SamplingRate`<sup>Required</sup> <a name="SamplingRate" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.samplingRate"></a>

```go
func SamplingRate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontResponseHeadersPolicy.CloudfrontResponseHeadersPolicyResponseHeadersPolicyConfigServerTimingHeadersConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




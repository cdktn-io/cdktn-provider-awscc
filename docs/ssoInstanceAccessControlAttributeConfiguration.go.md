# `ssoInstanceAccessControlAttributeConfiguration` Submodule <a name="`ssoInstanceAccessControlAttributeConfiguration` Submodule" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoInstanceAccessControlAttributeConfiguration <a name="SsoInstanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sso_instance_access_control_attribute_configuration awscc_sso_instance_access_control_attribute_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssoinstanceaccesscontrolattributeconfiguration"

ssoinstanceaccesscontrolattributeconfiguration.NewSsoInstanceAccessControlAttributeConfiguration(scope Construct, id *string, config SsoInstanceAccessControlAttributeConfigurationConfig) SsoInstanceAccessControlAttributeConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig">SsoInstanceAccessControlAttributeConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig">SsoInstanceAccessControlAttributeConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.putAccessControlAttributes">PutAccessControlAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.putInstanceAccessControlAttributeConfiguration">PutInstanceAccessControlAttributeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.resetAccessControlAttributes">ResetAccessControlAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.resetInstanceAccessControlAttributeConfiguration">ResetInstanceAccessControlAttributeConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessControlAttributes` <a name="PutAccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.putAccessControlAttributes"></a>

```go
func PutAccessControlAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.putAccessControlAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInstanceAccessControlAttributeConfiguration` <a name="PutInstanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.putInstanceAccessControlAttributeConfiguration"></a>

```go
func PutInstanceAccessControlAttributeConfiguration(value SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.putInstanceAccessControlAttributeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a>

---

##### `ResetAccessControlAttributes` <a name="ResetAccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.resetAccessControlAttributes"></a>

```go
func ResetAccessControlAttributes()
```

##### `ResetInstanceAccessControlAttributeConfiguration` <a name="ResetInstanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.resetInstanceAccessControlAttributeConfiguration"></a>

```go
func ResetInstanceAccessControlAttributeConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsoInstanceAccessControlAttributeConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssoinstanceaccesscontrolattributeconfiguration"

ssoinstanceaccesscontrolattributeconfiguration.SsoInstanceAccessControlAttributeConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssoinstanceaccesscontrolattributeconfiguration"

ssoinstanceaccesscontrolattributeconfiguration.SsoInstanceAccessControlAttributeConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssoinstanceaccesscontrolattributeconfiguration"

ssoinstanceaccesscontrolattributeconfiguration.SsoInstanceAccessControlAttributeConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssoinstanceaccesscontrolattributeconfiguration"

ssoinstanceaccesscontrolattributeconfiguration.SsoInstanceAccessControlAttributeConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SsoInstanceAccessControlAttributeConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SsoInstanceAccessControlAttributeConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SsoInstanceAccessControlAttributeConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sso_instance_access_control_attribute_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SsoInstanceAccessControlAttributeConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.accessControlAttributes">AccessControlAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceAccessControlAttributeConfiguration">InstanceAccessControlAttributeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.accessControlAttributesInput">AccessControlAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceAccessControlAttributeConfigurationInput">InstanceAccessControlAttributeConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceArnInput">InstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessControlAttributes`<sup>Required</sup> <a name="AccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.accessControlAttributes"></a>

```go
func AccessControlAttributes() SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceAccessControlAttributeConfiguration`<sup>Required</sup> <a name="InstanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceAccessControlAttributeConfiguration"></a>

```go
func InstanceAccessControlAttributeConfiguration() SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference</a>

---

##### `AccessControlAttributesInput`<sup>Optional</sup> <a name="AccessControlAttributesInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.accessControlAttributesInput"></a>

```go
func AccessControlAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceAccessControlAttributeConfigurationInput`<sup>Optional</sup> <a name="InstanceAccessControlAttributeConfigurationInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceAccessControlAttributeConfigurationInput"></a>

```go
func InstanceAccessControlAttributeConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceArnInput"></a>

```go
func InstanceArnInput() *string
```

- *Type:* *string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes <a name="SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssoinstanceaccesscontrolattributeconfiguration"

&ssoinstanceaccesscontrolattributeconfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes {
	Key: *string,
	Value: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sso_instance_access_control_attribute_configuration#key SsoInstanceAccessControlAttributeConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sso_instance_access_control_attribute_configuration#value SsoInstanceAccessControlAttributeConfiguration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sso_instance_access_control_attribute_configuration#key SsoInstanceAccessControlAttributeConfiguration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.value"></a>

```go
Value SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sso_instance_access_control_attribute_configuration#value SsoInstanceAccessControlAttributeConfiguration#value}.

---

### SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue <a name="SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssoinstanceaccesscontrolattributeconfiguration"

&ssoinstanceaccesscontrolattributeconfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue {
	Source: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.property.source">Source</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sso_instance_access_control_attribute_configuration#source SsoInstanceAccessControlAttributeConfiguration#source}. |

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.property.source"></a>

```go
Source *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sso_instance_access_control_attribute_configuration#source SsoInstanceAccessControlAttributeConfiguration#source}.

---

### SsoInstanceAccessControlAttributeConfigurationConfig <a name="SsoInstanceAccessControlAttributeConfigurationConfig" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssoinstanceaccesscontrolattributeconfiguration"

&ssoinstanceaccesscontrolattributeconfiguration.SsoInstanceAccessControlAttributeConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceArn: *string,
	AccessControlAttributes: interface{},
	InstanceAccessControlAttributeConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | The ARN of the AWS SSO instance under which the operation will be executed. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.accessControlAttributes">AccessControlAttributes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sso_instance_access_control_attribute_configuration#access_control_attributes SsoInstanceAccessControlAttributeConfiguration#access_control_attributes}. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.instanceAccessControlAttributeConfiguration">InstanceAccessControlAttributeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a></code> | The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.instanceArn"></a>

```go
InstanceArn *string
```

- *Type:* *string

The ARN of the AWS SSO instance under which the operation will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sso_instance_access_control_attribute_configuration#instance_arn SsoInstanceAccessControlAttributeConfiguration#instance_arn}

---

##### `AccessControlAttributes`<sup>Optional</sup> <a name="AccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.accessControlAttributes"></a>

```go
AccessControlAttributes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sso_instance_access_control_attribute_configuration#access_control_attributes SsoInstanceAccessControlAttributeConfiguration#access_control_attributes}.

---

##### `InstanceAccessControlAttributeConfiguration`<sup>Optional</sup> <a name="InstanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationConfig.property.instanceAccessControlAttributeConfiguration"></a>

```go
InstanceAccessControlAttributeConfiguration SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration</a>

The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes.

We recomend that you use  AccessControlAttributes property instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sso_instance_access_control_attribute_configuration#instance_access_control_attribute_configuration SsoInstanceAccessControlAttributeConfiguration#instance_access_control_attribute_configuration}

---

### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssoinstanceaccesscontrolattributeconfiguration"

&ssoinstanceaccesscontrolattributeconfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration {
	AccessControlAttributes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration.property.accessControlAttributes">AccessControlAttributes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sso_instance_access_control_attribute_configuration#access_control_attributes SsoInstanceAccessControlAttributeConfiguration#access_control_attributes}. |

---

##### `AccessControlAttributes`<sup>Optional</sup> <a name="AccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfiguration.property.accessControlAttributes"></a>

```go
AccessControlAttributes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sso_instance_access_control_attribute_configuration#access_control_attributes SsoInstanceAccessControlAttributeConfiguration#access_control_attributes}.

---

### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssoinstanceaccesscontrolattributeconfiguration"

&ssoinstanceaccesscontrolattributeconfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes {
	Key: *string,
	Value: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sso_instance_access_control_attribute_configuration#key SsoInstanceAccessControlAttributeConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sso_instance_access_control_attribute_configuration#value SsoInstanceAccessControlAttributeConfiguration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sso_instance_access_control_attribute_configuration#key SsoInstanceAccessControlAttributeConfiguration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributes.property.value"></a>

```go
Value SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sso_instance_access_control_attribute_configuration#value SsoInstanceAccessControlAttributeConfiguration#value}.

---

### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssoinstanceaccesscontrolattributeconfiguration"

&ssoinstanceaccesscontrolattributeconfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue {
	Source: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.property.source">Source</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sso_instance_access_control_attribute_configuration#source SsoInstanceAccessControlAttributeConfiguration#source}. |

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue.property.source"></a>

```go
Source *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/sso_instance_access_control_attribute_configuration#source SsoInstanceAccessControlAttributeConfiguration#source}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList <a name="SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssoinstanceaccesscontrolattributeconfiguration"

ssoinstanceaccesscontrolattributeconfiguration.NewSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get"></a>

```go
func Get(index *f64) SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference <a name="SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssoinstanceaccesscontrolattributeconfiguration"

ssoinstanceaccesscontrolattributeconfiguration.NewSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.putValue"></a>

```go
func PutValue(value SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

---

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.value"></a>

```go
func Value() SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference">SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference <a name="SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssoinstanceaccesscontrolattributeconfiguration"

ssoinstanceaccesscontrolattributeconfiguration.NewSsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.sourceInput">SourceInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.source">Source</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.sourceInput"></a>

```go
func SourceInput() *[]*string
```

- *Type:* *[]*string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.source"></a>

```go
func Source() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssoinstanceaccesscontrolattributeconfiguration"

ssoinstanceaccesscontrolattributeconfiguration.NewSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get"></a>

```go
func Get(index *f64) SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssoinstanceaccesscontrolattributeconfiguration"

ssoinstanceaccesscontrolattributeconfiguration.NewSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.putValue"></a>

```go
func PutValue(value SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValue</a>

---

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.value"></a>

```go
func Value() SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssoinstanceaccesscontrolattributeconfiguration"

ssoinstanceaccesscontrolattributeconfiguration.NewSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.sourceInput">SourceInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.source">Source</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.sourceInput"></a>

```go
func SourceInput() *[]*string
```

- *Type:* *[]*string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.source"></a>

```go
func Source() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference <a name="SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssoinstanceaccesscontrolattributeconfiguration"

ssoinstanceaccesscontrolattributeconfiguration.NewSsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.putAccessControlAttributes">PutAccessControlAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resetAccessControlAttributes">ResetAccessControlAttributes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessControlAttributes` <a name="PutAccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.putAccessControlAttributes"></a>

```go
func PutAccessControlAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.putAccessControlAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessControlAttributes` <a name="ResetAccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.resetAccessControlAttributes"></a>

```go
func ResetAccessControlAttributes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.accessControlAttributes">AccessControlAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.accessControlAttributesInput">AccessControlAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessControlAttributes`<sup>Required</sup> <a name="AccessControlAttributes" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.accessControlAttributes"></a>

```go
func AccessControlAttributes() SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList">SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationAccessControlAttributesList</a>

---

##### `AccessControlAttributesInput`<sup>Optional</sup> <a name="AccessControlAttributesInput" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.accessControlAttributesInput"></a>

```go
func AccessControlAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssoInstanceAccessControlAttributeConfiguration.SsoInstanceAccessControlAttributeConfigurationInstanceAccessControlAttributeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




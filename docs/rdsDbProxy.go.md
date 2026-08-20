# `rdsDbProxy` Submodule <a name="`rdsDbProxy` Submodule" id="@cdktn/provider-awscc.rdsDbProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbProxy <a name="RdsDbProxy" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy awscc_rds_db_proxy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbproxy"

rdsdbproxy.NewRdsDbProxy(scope Construct, id *string, config RdsDbProxyConfig) RdsDbProxy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig">RdsDbProxyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig">RdsDbProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putAuth">PutAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetAuth">ResetAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetDebugLogging">ResetDebugLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetDefaultAuthScheme">ResetDefaultAuthScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetEndpointNetworkType">ResetEndpointNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetIdleClientTimeout">ResetIdleClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetRequireTls">ResetRequireTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetTargetConnectionNetworkType">ResetTargetConnectionNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuth` <a name="PutAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putAuth"></a>

```go
func PutAuth(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putAuth.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAuth` <a name="ResetAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetAuth"></a>

```go
func ResetAuth()
```

##### `ResetDebugLogging` <a name="ResetDebugLogging" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetDebugLogging"></a>

```go
func ResetDebugLogging()
```

##### `ResetDefaultAuthScheme` <a name="ResetDefaultAuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetDefaultAuthScheme"></a>

```go
func ResetDefaultAuthScheme()
```

##### `ResetEndpointNetworkType` <a name="ResetEndpointNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetEndpointNetworkType"></a>

```go
func ResetEndpointNetworkType()
```

##### `ResetIdleClientTimeout` <a name="ResetIdleClientTimeout" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetIdleClientTimeout"></a>

```go
func ResetIdleClientTimeout()
```

##### `ResetRequireTls` <a name="ResetRequireTls" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetRequireTls"></a>

```go
func ResetRequireTls()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTargetConnectionNetworkType` <a name="ResetTargetConnectionNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetTargetConnectionNetworkType"></a>

```go
func ResetTargetConnectionNetworkType()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetVpcSecurityGroupIds"></a>

```go
func ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RdsDbProxy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbproxy"

rdsdbproxy.RdsDbProxy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbproxy"

rdsdbproxy.RdsDbProxy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbproxy"

rdsdbproxy.RdsDbProxy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbproxy"

rdsdbproxy.RdsDbProxy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RdsDbProxy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RdsDbProxy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RdsDbProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.auth">Auth</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList">RdsDbProxyAuthList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyArn">DbProxyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList">RdsDbProxyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.authInput">AuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyNameInput">DbProxyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.debugLoggingInput">DebugLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.defaultAuthSchemeInput">DefaultAuthSchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpointNetworkTypeInput">EndpointNetworkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.engineFamilyInput">EngineFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.idleClientTimeoutInput">IdleClientTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.requireTlsInput">RequireTlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.targetConnectionNetworkTypeInput">TargetConnectionNetworkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSubnetIdsInput">VpcSubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyName">DbProxyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.debugLogging">DebugLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.defaultAuthScheme">DefaultAuthScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpointNetworkType">EndpointNetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.engineFamily">EngineFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.idleClientTimeout">IdleClientTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.requireTls">RequireTls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.targetConnectionNetworkType">TargetConnectionNetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSubnetIds">VpcSubnetIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Auth`<sup>Required</sup> <a name="Auth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.auth"></a>

```go
func Auth() RdsDbProxyAuthList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList">RdsDbProxyAuthList</a>

---

##### `DbProxyArn`<sup>Required</sup> <a name="DbProxyArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyArn"></a>

```go
func DbProxyArn() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tags"></a>

```go
func Tags() RdsDbProxyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList">RdsDbProxyTagsList</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `AuthInput`<sup>Optional</sup> <a name="AuthInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.authInput"></a>

```go
func AuthInput() interface{}
```

- *Type:* interface{}

---

##### `DbProxyNameInput`<sup>Optional</sup> <a name="DbProxyNameInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyNameInput"></a>

```go
func DbProxyNameInput() *string
```

- *Type:* *string

---

##### `DebugLoggingInput`<sup>Optional</sup> <a name="DebugLoggingInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.debugLoggingInput"></a>

```go
func DebugLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultAuthSchemeInput`<sup>Optional</sup> <a name="DefaultAuthSchemeInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.defaultAuthSchemeInput"></a>

```go
func DefaultAuthSchemeInput() *string
```

- *Type:* *string

---

##### `EndpointNetworkTypeInput`<sup>Optional</sup> <a name="EndpointNetworkTypeInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpointNetworkTypeInput"></a>

```go
func EndpointNetworkTypeInput() *string
```

- *Type:* *string

---

##### `EngineFamilyInput`<sup>Optional</sup> <a name="EngineFamilyInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.engineFamilyInput"></a>

```go
func EngineFamilyInput() *string
```

- *Type:* *string

---

##### `IdleClientTimeoutInput`<sup>Optional</sup> <a name="IdleClientTimeoutInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.idleClientTimeoutInput"></a>

```go
func IdleClientTimeoutInput() *f64
```

- *Type:* *f64

---

##### `RequireTlsInput`<sup>Optional</sup> <a name="RequireTlsInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.requireTlsInput"></a>

```go
func RequireTlsInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetConnectionNetworkTypeInput`<sup>Optional</sup> <a name="TargetConnectionNetworkTypeInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.targetConnectionNetworkTypeInput"></a>

```go
func TargetConnectionNetworkTypeInput() *string
```

- *Type:* *string

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSecurityGroupIdsInput"></a>

```go
func VpcSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VpcSubnetIdsInput`<sup>Optional</sup> <a name="VpcSubnetIdsInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSubnetIdsInput"></a>

```go
func VpcSubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DbProxyName`<sup>Required</sup> <a name="DbProxyName" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyName"></a>

```go
func DbProxyName() *string
```

- *Type:* *string

---

##### `DebugLogging`<sup>Required</sup> <a name="DebugLogging" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.debugLogging"></a>

```go
func DebugLogging() interface{}
```

- *Type:* interface{}

---

##### `DefaultAuthScheme`<sup>Required</sup> <a name="DefaultAuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.defaultAuthScheme"></a>

```go
func DefaultAuthScheme() *string
```

- *Type:* *string

---

##### `EndpointNetworkType`<sup>Required</sup> <a name="EndpointNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpointNetworkType"></a>

```go
func EndpointNetworkType() *string
```

- *Type:* *string

---

##### `EngineFamily`<sup>Required</sup> <a name="EngineFamily" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.engineFamily"></a>

```go
func EngineFamily() *string
```

- *Type:* *string

---

##### `IdleClientTimeout`<sup>Required</sup> <a name="IdleClientTimeout" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.idleClientTimeout"></a>

```go
func IdleClientTimeout() *f64
```

- *Type:* *f64

---

##### `RequireTls`<sup>Required</sup> <a name="RequireTls" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.requireTls"></a>

```go
func RequireTls() interface{}
```

- *Type:* interface{}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `TargetConnectionNetworkType`<sup>Required</sup> <a name="TargetConnectionNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.targetConnectionNetworkType"></a>

```go
func TargetConnectionNetworkType() *string
```

- *Type:* *string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSecurityGroupIds"></a>

```go
func VpcSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcSubnetIds`<sup>Required</sup> <a name="VpcSubnetIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSubnetIds"></a>

```go
func VpcSubnetIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbProxyAuth <a name="RdsDbProxyAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbproxy"

&rdsdbproxy.RdsDbProxyAuth {
	AuthScheme: *string,
	ClientPasswordAuthType: *string,
	Description: *string,
	IamAuth: *string,
	SecretArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.authScheme">AuthScheme</a></code> | <code>*string</code> | The type of authentication that the proxy uses for connections from the proxy to the underlying database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.clientPasswordAuthType">ClientPasswordAuthType</a></code> | <code>*string</code> | The type of authentication the proxy uses for connections from clients. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.description">Description</a></code> | <code>*string</code> | A user-specified description about the authentication used by a proxy to log in as a specific database user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.iamAuth">IamAuth</a></code> | <code>*string</code> | Whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.secretArn">SecretArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster. |

---

##### `AuthScheme`<sup>Optional</sup> <a name="AuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.authScheme"></a>

```go
AuthScheme *string
```

- *Type:* *string

The type of authentication that the proxy uses for connections from the proxy to the underlying database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#auth_scheme RdsDbProxy#auth_scheme}

---

##### `ClientPasswordAuthType`<sup>Optional</sup> <a name="ClientPasswordAuthType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.clientPasswordAuthType"></a>

```go
ClientPasswordAuthType *string
```

- *Type:* *string

The type of authentication the proxy uses for connections from clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#client_password_auth_type RdsDbProxy#client_password_auth_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.description"></a>

```go
Description *string
```

- *Type:* *string

A user-specified description about the authentication used by a proxy to log in as a specific database user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#description RdsDbProxy#description}

---

##### `IamAuth`<sup>Optional</sup> <a name="IamAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.iamAuth"></a>

```go
IamAuth *string
```

- *Type:* *string

Whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy.

The ENABLED value is valid only for proxies with RDS for Microsoft SQL Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#iam_auth RdsDbProxy#iam_auth}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster.

These secrets are stored within Amazon Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#secret_arn RdsDbProxy#secret_arn}

---

### RdsDbProxyConfig <a name="RdsDbProxyConfig" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbproxy"

&rdsdbproxy.RdsDbProxyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DbProxyName: *string,
	EngineFamily: *string,
	RoleArn: *string,
	VpcSubnetIds: *[]*string,
	Auth: interface{},
	DebugLogging: interface{},
	DefaultAuthScheme: *string,
	EndpointNetworkType: *string,
	IdleClientTimeout: *f64,
	RequireTls: interface{},
	Tags: interface{},
	TargetConnectionNetworkType: *string,
	VpcSecurityGroupIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.dbProxyName">DbProxyName</a></code> | <code>*string</code> | The identifier for the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.engineFamily">EngineFamily</a></code> | <code>*string</code> | The kinds of databases that the proxy can connect to. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.vpcSubnetIds">VpcSubnetIds</a></code> | <code>*[]*string</code> | VPC subnet IDs to associate with the new proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.auth">Auth</a></code> | <code>interface{}</code> | The authorization mechanism that the proxy uses. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.debugLogging">DebugLogging</a></code> | <code>interface{}</code> | Whether the proxy includes detailed information about SQL statements in its logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.defaultAuthScheme">DefaultAuthScheme</a></code> | <code>*string</code> | The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.endpointNetworkType">EndpointNetworkType</a></code> | <code>*string</code> | The network type of the DB proxy endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.idleClientTimeout">IdleClientTimeout</a></code> | <code>*f64</code> | The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.requireTls">RequireTls</a></code> | <code>interface{}</code> | A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.targetConnectionNetworkType">TargetConnectionNetworkType</a></code> | <code>*string</code> | The network type that the proxy uses to connect to the target database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>*[]*string</code> | VPC security group IDs to associate with the new proxy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DbProxyName`<sup>Required</sup> <a name="DbProxyName" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.dbProxyName"></a>

```go
DbProxyName *string
```

- *Type:* *string

The identifier for the proxy.

This name must be unique for all proxies owned by your AWS account in the specified AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#db_proxy_name RdsDbProxy#db_proxy_name}

---

##### `EngineFamily`<sup>Required</sup> <a name="EngineFamily" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.engineFamily"></a>

```go
EngineFamily *string
```

- *Type:* *string

The kinds of databases that the proxy can connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#engine_family RdsDbProxy#engine_family}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#role_arn RdsDbProxy#role_arn}

---

##### `VpcSubnetIds`<sup>Required</sup> <a name="VpcSubnetIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.vpcSubnetIds"></a>

```go
VpcSubnetIds *[]*string
```

- *Type:* *[]*string

VPC subnet IDs to associate with the new proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#vpc_subnet_ids RdsDbProxy#vpc_subnet_ids}

---

##### `Auth`<sup>Optional</sup> <a name="Auth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.auth"></a>

```go
Auth interface{}
```

- *Type:* interface{}

The authorization mechanism that the proxy uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#auth RdsDbProxy#auth}

---

##### `DebugLogging`<sup>Optional</sup> <a name="DebugLogging" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.debugLogging"></a>

```go
DebugLogging interface{}
```

- *Type:* interface{}

Whether the proxy includes detailed information about SQL statements in its logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#debug_logging RdsDbProxy#debug_logging}

---

##### `DefaultAuthScheme`<sup>Optional</sup> <a name="DefaultAuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.defaultAuthScheme"></a>

```go
DefaultAuthScheme *string
```

- *Type:* *string

The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#default_auth_scheme RdsDbProxy#default_auth_scheme}

---

##### `EndpointNetworkType`<sup>Optional</sup> <a name="EndpointNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.endpointNetworkType"></a>

```go
EndpointNetworkType *string
```

- *Type:* *string

The network type of the DB proxy endpoint.

The network type determines the IP version that the proxy endpoint supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#endpoint_network_type RdsDbProxy#endpoint_network_type}

---

##### `IdleClientTimeout`<sup>Optional</sup> <a name="IdleClientTimeout" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.idleClientTimeout"></a>

```go
IdleClientTimeout *f64
```

- *Type:* *f64

The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#idle_client_timeout RdsDbProxy#idle_client_timeout}

---

##### `RequireTls`<sup>Optional</sup> <a name="RequireTls" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.requireTls"></a>

```go
RequireTls interface{}
```

- *Type:* interface{}

A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#require_tls RdsDbProxy#require_tls}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#tags RdsDbProxy#tags}

---

##### `TargetConnectionNetworkType`<sup>Optional</sup> <a name="TargetConnectionNetworkType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.targetConnectionNetworkType"></a>

```go
TargetConnectionNetworkType *string
```

- *Type:* *string

The network type that the proxy uses to connect to the target database.

The network type determines the IP version that the proxy uses for connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#target_connection_network_type RdsDbProxy#target_connection_network_type}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.vpcSecurityGroupIds"></a>

```go
VpcSecurityGroupIds *[]*string
```

- *Type:* *[]*string

VPC security group IDs to associate with the new proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#vpc_security_group_ids RdsDbProxy#vpc_security_group_ids}

---

### RdsDbProxyTags <a name="RdsDbProxyTags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbproxy"

&rdsdbproxy.RdsDbProxyTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#key RdsDbProxy#key}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#value RdsDbProxy#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#key RdsDbProxy#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_proxy#value RdsDbProxy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbProxyAuthList <a name="RdsDbProxyAuthList" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbproxy"

rdsdbproxy.NewRdsDbProxyAuthList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RdsDbProxyAuthList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.get"></a>

```go
func Get(index *f64) RdsDbProxyAuthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RdsDbProxyAuthOutputReference <a name="RdsDbProxyAuthOutputReference" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbproxy"

rdsdbproxy.NewRdsDbProxyAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RdsDbProxyAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetAuthScheme">ResetAuthScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetClientPasswordAuthType">ResetClientPasswordAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetIamAuth">ResetIamAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthScheme` <a name="ResetAuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetAuthScheme"></a>

```go
func ResetAuthScheme()
```

##### `ResetClientPasswordAuthType` <a name="ResetClientPasswordAuthType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetClientPasswordAuthType"></a>

```go
func ResetClientPasswordAuthType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetIamAuth` <a name="ResetIamAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetIamAuth"></a>

```go
func ResetIamAuth()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.authSchemeInput">AuthSchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.clientPasswordAuthTypeInput">ClientPasswordAuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.iamAuthInput">IamAuthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.authScheme">AuthScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.clientPasswordAuthType">ClientPasswordAuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.iamAuth">IamAuth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthSchemeInput`<sup>Optional</sup> <a name="AuthSchemeInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.authSchemeInput"></a>

```go
func AuthSchemeInput() *string
```

- *Type:* *string

---

##### `ClientPasswordAuthTypeInput`<sup>Optional</sup> <a name="ClientPasswordAuthTypeInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.clientPasswordAuthTypeInput"></a>

```go
func ClientPasswordAuthTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IamAuthInput`<sup>Optional</sup> <a name="IamAuthInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.iamAuthInput"></a>

```go
func IamAuthInput() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `AuthScheme`<sup>Required</sup> <a name="AuthScheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.authScheme"></a>

```go
func AuthScheme() *string
```

- *Type:* *string

---

##### `ClientPasswordAuthType`<sup>Required</sup> <a name="ClientPasswordAuthType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.clientPasswordAuthType"></a>

```go
func ClientPasswordAuthType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IamAuth`<sup>Required</sup> <a name="IamAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.iamAuth"></a>

```go
func IamAuth() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RdsDbProxyTagsList <a name="RdsDbProxyTagsList" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbproxy"

rdsdbproxy.NewRdsDbProxyTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RdsDbProxyTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.get"></a>

```go
func Get(index *f64) RdsDbProxyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RdsDbProxyTagsOutputReference <a name="RdsDbProxyTagsOutputReference" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdsdbproxy"

rdsdbproxy.NewRdsDbProxyTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RdsDbProxyTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




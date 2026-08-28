# `dataAwsccElasticloadbalancingv2Listener` Submodule <a name="`dataAwsccElasticloadbalancingv2Listener` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticloadbalancingv2Listener <a name="DataAwsccElasticloadbalancingv2Listener" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticloadbalancingv2_listener awscc_elasticloadbalancingv2_listener}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2Listener(scope Construct, id *string, config DataAwsccElasticloadbalancingv2ListenerConfig) DataAwsccElasticloadbalancingv2Listener
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig">DataAwsccElasticloadbalancingv2ListenerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig">DataAwsccElasticloadbalancingv2ListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2Listener resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.DataAwsccElasticloadbalancingv2Listener_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.DataAwsccElasticloadbalancingv2Listener_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.DataAwsccElasticloadbalancingv2Listener_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.DataAwsccElasticloadbalancingv2Listener_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2Listener resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccElasticloadbalancingv2Listener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccElasticloadbalancingv2Listener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticloadbalancingv2_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticloadbalancingv2Listener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.alpnPolicy">AlpnPolicy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.certificates">Certificates</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList">DataAwsccElasticloadbalancingv2ListenerCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.defaultActions">DefaultActions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList">DataAwsccElasticloadbalancingv2ListenerDefaultActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.listenerArn">ListenerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.listenerAttributes">ListenerAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList">DataAwsccElasticloadbalancingv2ListenerListenerAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.mutualAuthentication">MutualAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference">DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.sslPolicy">SslPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList">DataAwsccElasticloadbalancingv2ListenerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AlpnPolicy`<sup>Required</sup> <a name="AlpnPolicy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.alpnPolicy"></a>

```go
func AlpnPolicy() *[]*string
```

- *Type:* *[]*string

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.certificates"></a>

```go
func Certificates() DataAwsccElasticloadbalancingv2ListenerCertificatesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList">DataAwsccElasticloadbalancingv2ListenerCertificatesList</a>

---

##### `DefaultActions`<sup>Required</sup> <a name="DefaultActions" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.defaultActions"></a>

```go
func DefaultActions() DataAwsccElasticloadbalancingv2ListenerDefaultActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList">DataAwsccElasticloadbalancingv2ListenerDefaultActionsList</a>

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.listenerArn"></a>

```go
func ListenerArn() *string
```

- *Type:* *string

---

##### `ListenerAttributes`<sup>Required</sup> <a name="ListenerAttributes" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.listenerAttributes"></a>

```go
func ListenerAttributes() DataAwsccElasticloadbalancingv2ListenerListenerAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList">DataAwsccElasticloadbalancingv2ListenerListenerAttributesList</a>

---

##### `LoadBalancerArn`<sup>Required</sup> <a name="LoadBalancerArn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.loadBalancerArn"></a>

```go
func LoadBalancerArn() *string
```

- *Type:* *string

---

##### `MutualAuthentication`<sup>Required</sup> <a name="MutualAuthentication" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.mutualAuthentication"></a>

```go
func MutualAuthentication() DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference">DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SslPolicy`<sup>Required</sup> <a name="SslPolicy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.sslPolicy"></a>

```go
func SslPolicy() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.tags"></a>

```go
func Tags() DataAwsccElasticloadbalancingv2ListenerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList">DataAwsccElasticloadbalancingv2ListenerTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2Listener.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticloadbalancingv2ListenerCertificates <a name="DataAwsccElasticloadbalancingv2ListenerCertificates" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificates.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

&dataawsccelasticloadbalancingv2listener.DataAwsccElasticloadbalancingv2ListenerCertificates {

}
```


### DataAwsccElasticloadbalancingv2ListenerConfig <a name="DataAwsccElasticloadbalancingv2ListenerConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

&dataawsccelasticloadbalancingv2listener.DataAwsccElasticloadbalancingv2ListenerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticloadbalancingv2_listener#id DataAwsccElasticloadbalancingv2Listener#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticloadbalancingv2ListenerDefaultActions <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActions" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

&dataawsccelasticloadbalancingv2listener.DataAwsccElasticloadbalancingv2ListenerDefaultActions {

}
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

&dataawsccelasticloadbalancingv2listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig {

}
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

&dataawsccelasticloadbalancingv2listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig {

}
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

&dataawsccelasticloadbalancingv2listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig {

}
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

&dataawsccelasticloadbalancingv2listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig {

}
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

&dataawsccelasticloadbalancingv2listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups {

}
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

&dataawsccelasticloadbalancingv2listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig {

}
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

&dataawsccelasticloadbalancingv2listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig {

}
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

&dataawsccelasticloadbalancingv2listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims {

}
```


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

&dataawsccelasticloadbalancingv2listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig {

}
```


### DataAwsccElasticloadbalancingv2ListenerListenerAttributes <a name="DataAwsccElasticloadbalancingv2ListenerListenerAttributes" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

&dataawsccelasticloadbalancingv2listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributes {

}
```


### DataAwsccElasticloadbalancingv2ListenerMutualAuthentication <a name="DataAwsccElasticloadbalancingv2ListenerMutualAuthentication" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

&dataawsccelasticloadbalancingv2listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthentication {

}
```


### DataAwsccElasticloadbalancingv2ListenerTags <a name="DataAwsccElasticloadbalancingv2ListenerTags" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

&dataawsccelasticloadbalancingv2listener.DataAwsccElasticloadbalancingv2ListenerTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticloadbalancingv2ListenerCertificatesList <a name="DataAwsccElasticloadbalancingv2ListenerCertificatesList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2ListenerCertificatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccElasticloadbalancingv2ListenerCertificatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.get"></a>

```go
func Get(index *f64) DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificates">DataAwsccElasticloadbalancingv2ListenerCertificates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificatesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticloadbalancingv2ListenerCertificates
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerCertificates">DataAwsccElasticloadbalancingv2ListenerCertificates</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn">UserPoolArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId">UserPoolClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain">UserPoolDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParams`<sup>Required</sup> <a name="AuthenticationRequestExtraParams" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams"></a>

```go
func AuthenticationRequestExtraParams() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `OnUnauthenticatedRequest`<sup>Required</sup> <a name="OnUnauthenticatedRequest" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest"></a>

```go
func OnUnauthenticatedRequest() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `SessionCookieName`<sup>Required</sup> <a name="SessionCookieName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName"></a>

```go
func SessionCookieName() *string
```

- *Type:* *string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout"></a>

```go
func SessionTimeout() *string
```

- *Type:* *string

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn"></a>

```go
func UserPoolArn() *string
```

- *Type:* *string

---

##### `UserPoolClientId`<sup>Required</sup> <a name="UserPoolClientId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId"></a>

```go
func UserPoolClientId() *string
```

- *Type:* *string

---

##### `UserPoolDomain`<sup>Required</sup> <a name="UserPoolDomain" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain"></a>

```go
func UserPoolDomain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret">UseExistingClientSecret</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParams`<sup>Required</sup> <a name="AuthenticationRequestExtraParams" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams"></a>

```go
func AuthenticationRequestExtraParams() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint"></a>

```go
func AuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `OnUnauthenticatedRequest`<sup>Required</sup> <a name="OnUnauthenticatedRequest" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest"></a>

```go
func OnUnauthenticatedRequest() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `SessionCookieName`<sup>Required</sup> <a name="SessionCookieName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName"></a>

```go
func SessionCookieName() *string
```

- *Type:* *string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout"></a>

```go
func SessionTimeout() *string
```

- *Type:* *string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `UseExistingClientSecret`<sup>Required</sup> <a name="UseExistingClientSecret" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret"></a>

```go
func UseExistingClientSecret() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint"></a>

```go
func UserInfoEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBody">MessageBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `MessageBody`<sup>Required</sup> <a name="MessageBody" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBody"></a>

```go
func MessageBody() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroups">TargetGroups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfig">TargetGroupStickinessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetGroups`<sup>Required</sup> <a name="TargetGroups" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroups"></a>

```go
func TargetGroups() DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList</a>

---

##### `TargetGroupStickinessConfig`<sup>Required</sup> <a name="TargetGroupStickinessConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfig"></a>

```go
func TargetGroupStickinessConfig() DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get"></a>

```go
func Get(index *f64) DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn"></a>

```go
func TargetGroupArn() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds">DurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationSeconds`<sup>Required</sup> <a name="DurationSeconds" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds"></a>

```go
func DurationSeconds() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get"></a>

```go
func Get(index *f64) DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaims">AdditionalClaims</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpoint">JwksEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalClaims`<sup>Required</sup> <a name="AdditionalClaims" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaims"></a>

```go
func AdditionalClaims() DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList</a>

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `JwksEndpoint`<sup>Required</sup> <a name="JwksEndpoint" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpoint"></a>

```go
func JwksEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsList <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2ListenerDefaultActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccElasticloadbalancingv2ListenerDefaultActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.get"></a>

```go
func Get(index *f64) DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfig">AuthenticateCognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfig">AuthenticateOidcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfig">FixedResponseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfig">ForwardConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfig">JwtValidationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfig">RedirectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActions">DataAwsccElasticloadbalancingv2ListenerDefaultActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticateCognitoConfig`<sup>Required</sup> <a name="AuthenticateCognitoConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfig"></a>

```go
func AuthenticateCognitoConfig() DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference</a>

---

##### `AuthenticateOidcConfig`<sup>Required</sup> <a name="AuthenticateOidcConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfig"></a>

```go
func AuthenticateOidcConfig() DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference</a>

---

##### `FixedResponseConfig`<sup>Required</sup> <a name="FixedResponseConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfig"></a>

```go
func FixedResponseConfig() DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference</a>

---

##### `ForwardConfig`<sup>Required</sup> <a name="ForwardConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfig"></a>

```go
func ForwardConfig() DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference</a>

---

##### `JwtValidationConfig`<sup>Required</sup> <a name="JwtValidationConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfig"></a>

```go
func JwtValidationConfig() DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference</a>

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `RedirectConfig`<sup>Required</sup> <a name="RedirectConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfig"></a>

```go
func RedirectConfig() DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference</a>

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArn"></a>

```go
func TargetGroupArn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticloadbalancingv2ListenerDefaultActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActions">DataAwsccElasticloadbalancingv2ListenerDefaultActions</a>

---


### DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig">DataAwsccElasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerListenerAttributesList <a name="DataAwsccElasticloadbalancingv2ListenerListenerAttributesList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2ListenerListenerAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccElasticloadbalancingv2ListenerListenerAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.get"></a>

```go
func Get(index *f64) DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributes">DataAwsccElasticloadbalancingv2ListenerListenerAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticloadbalancingv2ListenerListenerAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerListenerAttributes">DataAwsccElasticloadbalancingv2ListenerListenerAttributes</a>

---


### DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNames">AdvertiseTrustStoreCaNames</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiry">IgnoreClientCertificateExpiry</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArn">TrustStoreArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthentication">DataAwsccElasticloadbalancingv2ListenerMutualAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvertiseTrustStoreCaNames`<sup>Required</sup> <a name="AdvertiseTrustStoreCaNames" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNames"></a>

```go
func AdvertiseTrustStoreCaNames() *string
```

- *Type:* *string

---

##### `IgnoreClientCertificateExpiry`<sup>Required</sup> <a name="IgnoreClientCertificateExpiry" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiry"></a>

```go
func IgnoreClientCertificateExpiry() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `TrustStoreArn`<sup>Required</sup> <a name="TrustStoreArn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArn"></a>

```go
func TrustStoreArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticloadbalancingv2ListenerMutualAuthentication
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerMutualAuthentication">DataAwsccElasticloadbalancingv2ListenerMutualAuthentication</a>

---


### DataAwsccElasticloadbalancingv2ListenerTagsList <a name="DataAwsccElasticloadbalancingv2ListenerTagsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2ListenerTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccElasticloadbalancingv2ListenerTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.get"></a>

```go
func Get(index *f64) DataAwsccElasticloadbalancingv2ListenerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccElasticloadbalancingv2ListenerTagsOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccelasticloadbalancingv2listener"

dataawsccelasticloadbalancingv2listener.NewDataAwsccElasticloadbalancingv2ListenerTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccElasticloadbalancingv2ListenerTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTags">DataAwsccElasticloadbalancingv2ListenerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccElasticloadbalancingv2ListenerTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2Listener.DataAwsccElasticloadbalancingv2ListenerTags">DataAwsccElasticloadbalancingv2ListenerTags</a>

---




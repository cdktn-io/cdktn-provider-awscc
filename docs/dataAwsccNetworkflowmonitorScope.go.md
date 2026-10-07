# `dataAwsccNetworkflowmonitorScope` Submodule <a name="`dataAwsccNetworkflowmonitorScope` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkflowmonitorScope <a name="DataAwsccNetworkflowmonitorScope" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/networkflowmonitor_scope awscc_networkflowmonitor_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkflowmonitorscope"

dataawsccnetworkflowmonitorscope.NewDataAwsccNetworkflowmonitorScope(scope Construct, id *string, config DataAwsccNetworkflowmonitorScopeConfig) DataAwsccNetworkflowmonitorScope
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig">DataAwsccNetworkflowmonitorScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig">DataAwsccNetworkflowmonitorScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworkflowmonitorScope resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkflowmonitorscope"

dataawsccnetworkflowmonitorscope.DataAwsccNetworkflowmonitorScope_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkflowmonitorscope"

dataawsccnetworkflowmonitorscope.DataAwsccNetworkflowmonitorScope_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkflowmonitorscope"

dataawsccnetworkflowmonitorscope.DataAwsccNetworkflowmonitorScope_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkflowmonitorscope"

dataawsccnetworkflowmonitorscope.DataAwsccNetworkflowmonitorScope_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccNetworkflowmonitorScope resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccNetworkflowmonitorScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccNetworkflowmonitorScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/networkflowmonitor_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkflowmonitorScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.scopeArn">ScopeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.scopeId">ScopeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList">DataAwsccNetworkflowmonitorScopeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList">DataAwsccNetworkflowmonitorScopeTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ScopeArn`<sup>Required</sup> <a name="ScopeArn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.scopeArn"></a>

```go
func ScopeArn() *string
```

- *Type:* *string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.scopeId"></a>

```go
func ScopeId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.tags"></a>

```go
func Tags() DataAwsccNetworkflowmonitorScopeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList">DataAwsccNetworkflowmonitorScopeTagsList</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.targets"></a>

```go
func Targets() DataAwsccNetworkflowmonitorScopeTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList">DataAwsccNetworkflowmonitorScopeTargetsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScope.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkflowmonitorScopeConfig <a name="DataAwsccNetworkflowmonitorScopeConfig" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkflowmonitorscope"

&dataawsccnetworkflowmonitorscope.DataAwsccNetworkflowmonitorScopeConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/networkflowmonitor_scope#id DataAwsccNetworkflowmonitorScope#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkflowmonitorScopeTags <a name="DataAwsccNetworkflowmonitorScopeTags" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkflowmonitorscope"

&dataawsccnetworkflowmonitorscope.DataAwsccNetworkflowmonitorScopeTags {

}
```


### DataAwsccNetworkflowmonitorScopeTargets <a name="DataAwsccNetworkflowmonitorScopeTargets" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkflowmonitorscope"

&dataawsccnetworkflowmonitorscope.DataAwsccNetworkflowmonitorScopeTargets {

}
```


### DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifier <a name="DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifier" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifier.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkflowmonitorscope"

&dataawsccnetworkflowmonitorscope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifier {

}
```


### DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetId <a name="DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetId.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkflowmonitorscope"

&dataawsccnetworkflowmonitorscope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetId {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkflowmonitorScopeTagsList <a name="DataAwsccNetworkflowmonitorScopeTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkflowmonitorscope"

dataawsccnetworkflowmonitorscope.NewDataAwsccNetworkflowmonitorScopeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccNetworkflowmonitorScopeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.get"></a>

```go
func Get(index *f64) DataAwsccNetworkflowmonitorScopeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccNetworkflowmonitorScopeTagsOutputReference <a name="DataAwsccNetworkflowmonitorScopeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkflowmonitorscope"

dataawsccnetworkflowmonitorscope.NewDataAwsccNetworkflowmonitorScopeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccNetworkflowmonitorScopeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTags">DataAwsccNetworkflowmonitorScopeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworkflowmonitorScopeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTags">DataAwsccNetworkflowmonitorScopeTags</a>

---


### DataAwsccNetworkflowmonitorScopeTargetsList <a name="DataAwsccNetworkflowmonitorScopeTargetsList" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkflowmonitorscope"

dataawsccnetworkflowmonitorscope.NewDataAwsccNetworkflowmonitorScopeTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccNetworkflowmonitorScopeTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.get"></a>

```go
func Get(index *f64) DataAwsccNetworkflowmonitorScopeTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccNetworkflowmonitorScopeTargetsOutputReference <a name="DataAwsccNetworkflowmonitorScopeTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkflowmonitorscope"

dataawsccnetworkflowmonitorscope.NewDataAwsccNetworkflowmonitorScopeTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccNetworkflowmonitorScopeTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.property.targetIdentifier">TargetIdentifier</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference">DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargets">DataAwsccNetworkflowmonitorScopeTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TargetIdentifier`<sup>Required</sup> <a name="TargetIdentifier" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.property.targetIdentifier"></a>

```go
func TargetIdentifier() DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference">DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworkflowmonitorScopeTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargets">DataAwsccNetworkflowmonitorScopeTargets</a>

---


### DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference <a name="DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkflowmonitorscope"

dataawsccnetworkflowmonitorscope.NewDataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetId">TargetId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference">DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetType">TargetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifier">DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetId"></a>

```go
func TargetId() DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference">DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference</a>

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.targetType"></a>

```go
func TargetType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifier
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifier">DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifier</a>

---


### DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference <a name="DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccnetworkflowmonitorscope"

dataawsccnetworkflowmonitorscope.NewDataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetId">DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetIdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetId
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkflowmonitorScope.DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetId">DataAwsccNetworkflowmonitorScopeTargetsTargetIdentifierTargetId</a>

---



